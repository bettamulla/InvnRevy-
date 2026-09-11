#!/usr/bin/env bash
# One-shot dev runner: install, init DB, seed, start server + cron.
set -e

cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "[start] installing deps..."
  npm install
fi

if [ ! -f .env.local ]; then
  echo "[start] creating .env.local from example"
  cp .env.example .env.local
fi

# Auto-generate a strong AUTH_SECRET on first run (or if still the placeholder).
if grep -q "^AUTH_SECRET=replace-me" .env.local || grep -q "^AUTH_SECRET=dev-only-secret" .env.local; then
  if command -v openssl >/dev/null 2>&1; then
    SECRET=$(openssl rand -base64 32)
  else
    SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('base64'))")
  fi
  # Cross-platform in-place edit
  if sed --version >/dev/null 2>&1; then
    sed -i "s|^AUTH_SECRET=.*|AUTH_SECRET=${SECRET}|" .env.local
  else
    sed -i '' "s|^AUTH_SECRET=.*|AUTH_SECRET=${SECRET}|" .env.local
  fi
  echo "[start] generated fresh AUTH_SECRET"
fi

if [ ! -f data/payreview.db ]; then
  echo "[start] initializing DB..."
  npm run db:init
  echo "[start] seeding demo data..."
  npm run db:seed
fi

echo "[start] launching dev server on http://localhost:3000"
echo "[start] demo login: demo@payreview.test / demo1234"
echo
trap "kill 0" INT TERM EXIT
npm run dev &
npm run cron:run &
wait
