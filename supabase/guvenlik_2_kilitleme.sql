-- ============================================================================
-- GÜVENLİK — 2. KISIM: KİLİTLEME
-- ÖNCE 1. kısım çalıştırılmış ve yeni site/admin kodu yayına alınmış olmalı.
-- Bundan sonra kişisel bilgiler (e-posta, telefon) yalnız giriş yapmış admine
-- görünür. Birden fazla kez çalıştırılabilir.
-- ============================================================================

-- 1) RLS'i aç ve admin politikası dışındaki eski politikaları kaldır
do $$
declare t text; p record;
begin
  foreach t in array array['rehberler','rezervasyonlar','komisyonlar','yorumlar','kullanici_fotograflar','rehber_yorumlar'] loop
    execute format('alter table public.%I enable row level security', t);
    for p in select policyname from pg_policies where schemaname = 'public' and tablename = t and policyname <> 'admin_tam_erisim' loop
      execute format('drop policy %I on public.%I', p.policyname, t);
    end loop;
    execute format('revoke all on public.%I from anon', t);
  end loop;
end $$;

-- 2) YORUMLAR — herkes okur ve yazar
grant select on public.yorumlar to anon;
grant insert (oren_yeri_id, kullanici_adi, sehir, yorum, puan) on public.yorumlar to anon;
create policy herkes_okur on public.yorumlar for select to anon using (true);
create policy herkes_yazar on public.yorumlar for insert to anon with check (true);

-- 3) KULLANICI FOTOĞRAFLARI — yalnız onaylılar görünür, yeni fotoğraf onaysız eklenir
grant select on public.kullanici_fotograflar to anon;
grant insert (oren_yeri_id, kullanici_adi, sehir, foto_url, onaylandi) on public.kullanici_fotograflar to anon;
create policy onaylilar_gorunur on public.kullanici_fotograflar for select to anon using (onaylandi = true);
create policy onaysiz_eklenir on public.kullanici_fotograflar for insert to anon with check (onaylandi is not true);

-- 4) REHBERLER — onaylı rehberler görünür ama e-posta, telefon ve sertifika no GÖRÜNMEZ
grant select (id, olusturma_tarihi, ad_soyad, sehir, bolgeler, diller, uzmanlik, deneyim_yil,
              hakkinda, gunluk_ucret, onaylandi, foto_url, ortalama_puan, yorum_sayisi,
              tamamlanan_tur, one_cikan)
  on public.rehberler to anon;
grant insert (ad_soyad, email, telefon, sehir, diller, bolgeler, sertifika, deneyim_yil,
              gunluk_ucret, hakkinda, onaylandi)
  on public.rehberler to anon;
create policy onaylilar_gorunur on public.rehberler for select to anon using (onaylandi = true);
create policy basvuru_onaysiz on public.rehberler for insert to anon with check (onaylandi is not true);

-- 5) REZERVASYONLAR — herkes rezervasyon yapabilir, kimse okuyamaz (yalnız admin)
grant insert (rehber_id, musteri_adi, musteri_email, musteri_telefon, oren_yeri_id,
              tur_tarihi, kisi_sayisi, dil, notlar)
  on public.rezervasyonlar to anon;
create policy rezervasyon_yapilir on public.rezervasyonlar for insert to anon with check (true);

-- 6) KOMİSYONLAR — site kayıt ekler, kimse okuyamaz (yalnız admin)
grant insert (rehber_id, rehber_adi, musteri_adi, oren_yeri_id, tur_tarihi, rehber_ucreti,
              komisyon_orani, komisyon_tutar, odeme_durumu)
  on public.komisyonlar to anon;
create policy komisyon_eklenir on public.komisyonlar for insert to anon with check (true);

-- 7) REHBER YORUMLARI — onaylılar görünür; yorum yalnız gerçek bir rezervasyonla, onaysız eklenir
grant select on public.rehber_yorumlar to anon;
grant insert (rehber_id, rezervasyon_id, musteri_adi, puan, yorum, onaylandi) on public.rehber_yorumlar to anon;
create policy onaylilar_gorunur on public.rehber_yorumlar for select to anon using (onaylandi = true);
create policy gercek_rezervasyonla on public.rehber_yorumlar for insert to anon
  with check (onaylandi is not true
              and public.rezervasyon_dogrula(rezervasyon_id::text, rehber_id::text));
