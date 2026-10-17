// Admin panelinden e-posta gönderir. Resend anahtarı koda değil, Supabase'teki
// RESEND_API_KEY gizli değişkenine konur. Yalnız giriş yapmış admin çağırabilir.
import { createClient } from "jsr:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const yanit = (govde: unknown, durum = 200) =>
  new Response(JSON.stringify(govde), { status: durum, headers: { ...CORS, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return yanit({ hata: "Yalnız POST" }, 405);

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return yanit({ hata: "Giriş gerekli" }, 401);
  const { data: admin } = await supabase.rpc("is_admin");
  if (admin !== true) return yanit({ hata: "Yetkisiz" }, 403);

  const { to, subject, html } = await req.json().catch(() => ({}));
  if (typeof to !== "string" || !to.includes("@") || !subject || !html) {
    return yanit({ hata: "to, subject ve html gerekli" }, 400);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Anadolu Rehberi <onboarding@resend.dev>", to: [to], subject, html }),
  });
  return yanit({ ok: res.ok }, res.ok ? 200 : 502);
});
