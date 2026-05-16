# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**Anadolu Rehberi** is a Turkish historical-site travel guide delivered as two standalone HTML files with no build toolchain. Open either file directly in a browser; there is no compile step, no `npm install`, and no dev server.

- `index.html` — Mobile-first user app (~4 600 lines). Simulates a 430 px phone viewport on desktop.
- `admin-panel.html` — Desktop admin dashboard (~1 380 lines). Password-protected with a client-side check.

## No build system

There are no scripts to run. To work on this project:

- **Develop**: Open `index.html` or `admin-panel.html` directly in a browser (or use `python3 -m http.server` / VS Code Live Server for local serving).
- **Lint/format**: Not configured. There is no linter, formatter, or test suite.
- **Deploy**: Commit and push; the HTML files are served as-is.

## Architecture

### Data model

All 121 historical sites are hardcoded in `YERLER` (line ~1464 in `index.html`). Each entry is a plain JS object:

```js
{
  id, isim, sehir, bolge, baslangic, bitis, donem,
  unesco, renk, emoji, foto, medeniyetler, aciklama,
  ucret, saatler, park, audioGuideSlug?
}
```

- `bolge`: `'ege' | 'marmara' | 'akdeniz' | 'ic' | 'guneydogu' | 'dogu' | 'karadeniz'`
- `donem`: string `'1'`–`'7'` (Taş Devri → Osmanlı)
- `baslangic` / `bitis`: year integers (negative = BCE)

User-generated content (reviews, photos, reservations, guides) lives entirely in Supabase — it is never in the HTML files.

### External services

| Service | Purpose | Key constant |
|---|---|---|
| **Supabase** (`vdtfjxyktzbuyyvwbufl.supabase.co`) | DB + Edge Functions | `SUPABASE_URL`, `SUPABASE_KEY` in both files |
| **Cloudinary** (account `dsnmabr1p`) | Image hosting & CDN transforms | `CLOUD` in `index.html`, `CLOUDINARY_UPLOAD_PRESET = 'anadolu_kullanici'` |
| **Leaflet.js** (`unpkg.com/leaflet@1.9.4`) | Interactive map | loaded via CDN `<script>` |
| **Resend** | Transactional email (reservation confirmations) | used only in `admin-panel.html` → `mailGonder()` |
| **Google Fonts** | `Cinzel` (headings) + `Crimson Pro` (body) | loaded via CDN `<link>` |

Supabase Edge Function `tur-planlayici` generates AI tour plans and is called by `turPlaniOlustur()` in `index.html`.

### Supabase tables (accessed via REST)

`yorumlar`, `kullanici_fotograflar`, `rehberler`, `rezervasyonlar`, `komisyonlar`, `rehber_yorumlar`

CRUD wrappers in `admin-panel.html`: `sb()` (GET), `sbPatch()` (PATCH), `sbDelete()` (DELETE).

### Admin panel

- Login is a client-side password check (`ADMIN_SIFRE = 'anadolu2024'` at line 866 of `admin-panel.html`). This is intentionally a simple gate, not a secure auth system.
- Pages: Dashboard, Rehber Başvuruları, Kullanıcı Fotoğrafları, Rezervasyonlar, Komisyon Yönetimi, Yorum Yönetimi.

### Multilingual system

`index.html` detects `navigator.language` and picks one of four locales: `tr | en | de | ru`. All UI strings go through `t(key)` which looks up `TERCUMELER[aktifDil]`. The `YERLER` objects themselves have locale-keyed description objects (e.g., `aciklamaEN`, `aciklamaDE`) for some entries.

### CSS conventions

- All styles are `<style>` blocks inside each HTML file — no external stylesheets.
- Class names and variable names use Turkish throughout (`aktif`, `bolge`, `donem`, `kart`, `ekran`, etc.).
- Design tokens: accent `#B85C2A` (burnt orange), dark `#1A1A18`, surface `#FAFAF8`.
- Active state uses class `aktif`; hidden state uses class `gizli`.

### Key UI patterns in `index.html`

- **Screens** (`.ekran`): slide in from the right with `transform: translateX(100%)` → `.acik` removes it.
- **Modals** (e.g., `.unlu-modal`, `.rehber-modal`): fixed overlay, fade via `opacity` + `pointer-events`.
- **Cards** (`.kart`): rendered by `kartHtml()` and inserted via `innerHTML` in `kartlarGoster()`.
- **Filtering**: `getFiltreli()` applies `aktifDonem`, `aktifBolge`, `zamanYili`, and `aramaSorgusu` against `YERLER`.
- **Favourites**: stored in a `Set` called `favoriler` and persisted to `localStorage`.

## Adding or editing historical sites

Edit the `YERLER` array in `index.html`. The site immediately reflects the change — no rebuild needed. Keep the `id` unique and sequential. If a site has audio-guide support, add `audioGuideSlug: '<slug>'`; omitting it hides the audio-guide button automatically.

## Image handling

Cloudinary images are transformed via `cldUrl(key, width)` (line ~2171 in `index.html`), which constructs `https://res.cloudinary.com/dsnmabr1p/image/upload/f_auto,q_auto,w_{w}/{key}`. Wikipedia images and fallback emoji are also used; `foto: null` on a `YERLER` entry triggers the emoji fallback.
