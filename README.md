# JFJM Universe V43 — Hyper Motion (Mobile / Vercel Static)

Job For Jobless Myanmar — career hub, CV builder, jobs feed, employer studio, premium effects, and admin dashboard.

**Repo:** https://github.com/JobForJoblessMyanmar/jfjm-universe-v43

## Live routes

- `/` — JFJM Universe home
- `/cv-builder/` — Easy CV Builder
- `/universe/` — Career Universe profile
- `/jobs/` — Company-direct opportunity feed
- `/employer/` — Job Post Studio
- `/premium/` — Premium Effects vault
- `/admin/` — Admin dashboard
- `/reader/` — Notification reader

## Deploy on Vercel

1. Import this GitHub repo in Vercel (Framework Preset: **Other**, output = repo root).
2. Add env vars if using daily push:
   - `ONESIGNAL_APP_ID`
   - `ONESIGNAL_REST_API_KEY`
   - `CRON_SECRET`
3. Optional: set `window.JFJM_ONESIGNAL_APP_ID` and `window.JFJM_GA4_ID` in `config.js`.
4. Run `supabase-schema.sql` in Supabase SQL Editor (see `PREMIUM_SETUP.md`).

`vercel.json` schedules daily push at 09:00 Myanmar time (UTC 02:30).

## Notes

- Browser `config.js` uses the Supabase **publishable** key only. Do not add a service_role key.
- Contributor names in content libraries are placeholders until verified.
- Source package: `JFJM_UNIVERSE_V43_HYPER_MOTION_MOBILE_UNIVERSE_VERCEL_STATIC.zip`
