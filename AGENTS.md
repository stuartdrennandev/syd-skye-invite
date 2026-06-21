# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single React + Vite single-page app (`syd-skye-invite`), a static bridal shower invitation. There is no backend, database, or auth.

- Node 22 / npm are used; dependency install (`npm install`) runs automatically via the startup update script.
- Standard scripts live in `package.json`: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`. Don't duplicate them elsewhere.
- Dev server: `npm run dev` (Vite). It binds to port 5173. Add `--host` if you need to reach it from outside the VM.
- Non-obvious gotcha: `vite.config.js` sets `base: '/syd-skye-invite/'`, so the app is served at `http://localhost:5173/syd-skye-invite/`, NOT at `/`. Hitting `/` returns 404; always use the `/syd-skye-invite/` path.
- Core flow to smoke-test: load the page (shows a closed envelope), click the "open me" envelope, and confirm the invitation details (date/time/location/RSVP) render.
