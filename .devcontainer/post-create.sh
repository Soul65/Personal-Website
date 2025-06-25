#!/usr/bin/env bash
set -ex

echo "[INFO] Running post-create..."

# Install NodeJS npm global dependencies
npm install --global npm-check-updates prettier

if [ -f "package-lock.json" ]; then
    echo "[INFO] Install NodeJS npm 'package.json' dependencies..."
    npm install || EXIT_CODE=$?

    echo "[DEBUG] post.npm-install EXIT_CODE: $EXIT_CODE"
    EXIT_CODE=0
fi

echo "[INFO] post-create complete."