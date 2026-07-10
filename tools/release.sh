#!/usr/bin/env bash
# Release orchestrator.
#
# Normal path (arg empty or "false"): walk each package with a release.config.js,
# run semantic-release in that directory. semantic-release's commit-analyzer
# reads commits since the last tag matching that package's tagFormat, filtered
# by commitPaths — so only packages with semver-relevant changes actually cut
# a release. Everything else is a silent no-op.
#
# Snapshot path (arg "true"): set every package to 0.0.0-<sha>, npm pack each,
# leave the .tgz files at the repo root. CI can attach them to the workflow
# run as artifacts.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SNAPSHOT="${1:-false}"

if [ "$SNAPSHOT" = "true" ]; then
  VERSION="0.0.0-$(git rev-parse --short=8 HEAD)"
  echo "Snapshot mode: setting all packages to $VERSION"

  for pkg in packages/*/package.json; do
    node -e "
      const fs = require('fs');
      const p = '$pkg';
      const j = JSON.parse(fs.readFileSync(p, 'utf8'));
      j.version = '$VERSION';
      fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
    "
  done

  npm run build

  for pkg in packages/*/package.json; do
    priv=$(node -p "require('$(realpath "$pkg")').private || false" 2>/dev/null || echo false)
    if [ "$priv" != "true" ]; then
      (cd "$(dirname "$pkg")" && npm pack --pack-destination="$ROOT")
    fi
  done

  echo "Snapshot tarballs written to $ROOT"
  ls -1 "$ROOT"/*.tgz || true
  exit 0
fi

# Normal release: walk each package's release.config.js.
#
# Errors are NOT swallowed. If semantic-release fails for any package, this
# script exits non-zero and CI turns red. "No release needed" is a clean exit
# 0 from semrel; a hook failure or GitHub API failure is exit 1 and MUST be
# visible so it gets fixed. The previous "|| echo no-op" masked a
# commitlint-hook-vs-release-commit collision for weeks.
failed=""
for cfg in packages/*/release.config.js; do
  pkg_dir="$(dirname "$cfg")"
  echo "──────────────────────────────────────────────"
  echo "Releasing from $pkg_dir"
  echo "──────────────────────────────────────────────"
  if (
    cd "$pkg_dir"
    npm pack
    npx --yes semantic-release --extends "./release.config.js"
    rm -f ./*.tgz
  ); then
    :
  else
    failed="$failed $pkg_dir"
  fi
done

if [ -n "$failed" ]; then
  echo "──────────────────────────────────────────────"
  echo "❌ semantic-release failed for:$failed"
  echo "──────────────────────────────────────────────"
  exit 1
fi
