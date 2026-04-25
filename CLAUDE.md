# Springlakeservices — Project Rules

**Version:** 1.1 | **Date:** 2026-04-25

> Universal rules (autonomy, commit cadence, edit discipline, sacred ports) are in `~/.claude/CLAUDE.md`. This file is springlakeservices-specific.

---

## Working directory

```
cd C:\Users\timma\stp\springlakeservices
```

---

## Tech stack

- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Express server (`server/`)
- **Auth/DB:** Firebase
- **Dev ports:** frontend `5220`, backend `3220`

---

## Docker slot

- **Agent container:** `springlakeservices` on ports `5220` (Vite) + `3220` (Express)
- Compose file: `docker/docker-compose.yml`
- Dev Dockerfile: `docker/Dockerfile` (root `Dockerfile` is for production — leave it alone)
- **Single static slot** — one agent session at a time
- Source is volume-mounted — edits reflect via HMR
- Bring up: `docker compose -f docker/docker-compose.yml up -d` from `springlakeservices/`
- Preview tools work against `localhost:5220`

---

## Git workflow

- **`main`** — working branch. Commit freely. Pushing `main` does NOT deploy.
- **`prod`** — deploy branch. Pushing `prod` triggers Cloud Build automatically. Only push on Tim's explicit approval.

**To deploy:** merge `main` into `prod` and push `prod`. Never commit directly on `prod`.

**History note:** prior to 2026-04-25, agents committed directly on `prod`. Don't. `main` was fast-forwarded to match `prod` on that date and is the working branch from then on.

---

## Before every commit

```bash
tsc --noEmit
# Run any test suite present
```

(Universal commit cadence, edit discipline, and typecheck rules are in `~/.claude/CLAUDE.md`.)

---

## Open items to expand this file (when ready)

- Confirm Cloud Build trigger name + `cloudbuild.yaml` config details
- Document production URL
- List any project-specific architecture rules (Firebase patterns, server structure)
- Document deploy workflow / smoke tests once live
