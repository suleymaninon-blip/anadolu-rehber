-- ============================================================================
-- GÜVENLİK — 1. KISIM: HAZIRLIK
-- Supabase → SQL Editor'da çalıştırın. Siteyi ETKİLEMEZ; yalnızca yeni
-- fonksiyonlar ve admin erişimi ekler. Birden fazla kez çalıştırılabilir.
-- ============================================================================

-- 1) Admin listesi: yalnız bu tablodaki e-postalar admin sayılır.
create table if not exists public.admin_kullanicilar (
  email text primary key
);
alter table public.admin_kullanicilar enable row level security;
revoke all on public.admin_kullanicilar from anon, authenticated;

-- ↓↓↓ Supabase Authentication'da açtığınız admin e-postasını yazın ↓↓↓
insert into public.admin_kullanicilar (email)
values ('ADMIN_EPOSTANIZ@ornek.com')
on conflict do nothing;

-- 2) Giriş yapan kullanıcı admin mi?
create or replace function public.is_admin()
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.admin_kullanicilar
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

-- 3) Rehber yorumu için rezervasyon doğrulama (rezervasyon tablosunu açmadan)
create or replace function public.rezervasyon_dogrula(p_rezervasyon_id text, p_rehber_id text)
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.rezervasyonlar
    where id::text = p_rezervasyon_id
      and rehber_id::text = p_rehber_id
      and durum in ('onaylandi', 'tamamlandi')
  );
$$;
revoke all on function public.rezervasyon_dogrula(text, text) from public;
grant execute on function public.rezervasyon_dogrula(text, text) to anon, authenticated;

-- 4) Değerlendirme linkindeki kodla rezervasyonu bulma (yalnız id ve rehber_id döner)
create or replace function public.degerlendirme_bul(p_token text)
returns table (id text, rehber_id text)
language sql stable security definer set search_path = public
as $$
  select r.id::text, r.rehber_id::text
  from public.rezervasyonlar r
  where p_token is not null and length(p_token) >= 16
    and r.degerlendirme_token = p_token
  limit 1;
$$;
revoke all on function public.degerlendirme_bul(text) from public;
grant execute on function public.degerlendirme_bul(text) to anon, authenticated;

-- 5) Admin, giriş yaptıktan sonra tüm tablolarda her işlemi yapabilsin.
--    (RLS henüz açık değilse etkisizdir; 2. kısımda RLS açılınca devreye girer.)
do $$
declare t text;
begin
  foreach t in array array['rehberler','rezervasyonlar','komisyonlar','yorumlar','kullanici_fotograflar','rehber_yorumlar'] loop
    execute format('drop policy if exists admin_tam_erisim on public.%I', t);
    execute format('create policy admin_tam_erisim on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
  end loop;
end $$;
