#!/usr/bin/env bash
set -Eeuo pipefail

export IMAGE_NAME="${1:?image required}"
export IMAGE_TAG="${2:?immutable image tag required}"

[[ "$IMAGE_NAME" =~ ^ghcr.io/[a-z0-9._/-]+$ ]]
[[ "$IMAGE_TAG" =~ ^sha-[a-f0-9]{40}$ ]]

DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DEPLOY_DIR"

compose() { docker compose -f compose.prod.yml "$@"; }

compose config --quiet
compose pull client
compose up -d --wait --wait-timeout 120 client
curl --fail --silent --show-error --max-time 10 http://127.0.0.1:10501/health >/dev/null

echo "Client SSR deployed and health verified."
