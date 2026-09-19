# Meta Gateway client

Public information site for Meta Gateway, including privacy, security, terms,
data deletion, and contact pages.

## Local prerequisites

Use Node.js **24.21.0** (pinned in `.nvmrc`) and **pnpm 12.3.4**.
The default Node version on a machine may be too old for this Angular workspace.

```sh
nvm use
pnpm install --frozen-lockfile
pnpm start
```

The development site runs at `http://localhost:4200`.
If dependencies are already installed, skip the install step.

## Local API proxy

Browser API URLs use `/api/v1`. The Angular development server forwards `/api`
requests to the origin configured by `API_PROXY_TARGET`, preserving the path.
The default development upstream is `http://localhost:3000`.

For local overrides, create `.env.dev.local` in the client directory:

```dotenv
API_PROXY_TARGET=http://localhost:3000
API_PROXY_TIMEOUT_MS=30000
API_PROXY_ALLOWED_HOSTS=localhost
```

`API_PROXY_ALLOWED_HOSTS` is an optional comma-separated hostname allowlist.
`API_PROXY_TIMEOUT_MS` must be an integer between 1000 and 120000.
The target must be an HTTP(S) origin without credentials, path, query, or fragment;
do not append `/api/v1`.

The proxy reads `.env.dev.local`, `.env.staging.local`, or `.env.prod.local`
according to the selected CLI configuration. Shell variables override these files.
The base `.env.dev`, `.env.staging`, and `.env.prod` files are **not loaded** by
this proxy. Machine-specific `*.local` environment files are ignored by Git.
Angular environment files under `src/environments` are public build-time settings.

Staging and production CLI proxies require an explicit HTTPS upstream origin.
The CLI proxy applies to `ng serve`; it is not deployment API routing.

## Commands

| Purpose                                           | Command                                      |
| ------------------------------------------------- | -------------------------------------------- |
| Development server                                | `pnpm start` or `pnpm start:dev`             |
| Staging CLI server                                | `pnpm start:staging`                         |
| Production CLI server                             | `pnpm start:prod`                            |
| Development build                                 | `pnpm build:dev`                             |
| Staging build                                     | `pnpm build:staging`                         |
| Production build                                  | `pnpm build` or `pnpm build:prod`            |
| Production SSR build                              | `pnpm build:ssr` or `pnpm build:prod:ssr`    |
| Production SSR process                            | `HOST=0.0.0.0 PORT=4000 pnpm serve:prod:ssr` |
| Angular tests, one run                            | `pnpm test --watch=false`                    |
| Proxy unit tests                                  | `pnpm test:proxy`                            |
| Proxy integration test with a local mock upstream | `pnpm test:proxy:integration`                |

Use the named package scripts consistently. The `prod` and `production` Angular
configurations currently differ; `pnpm build` explicitly selects `prod`.
The production SSR host is `https://meta.nexeragroup.rw`. Build the server bundle
with `pnpm build:ssr`, then run the generated process with `HOST=0.0.0.0` and
`PORT=4000` for a direct host process. The Docker deployment uses container
port `4200`, published on host port `10501`; the reverse proxy terminates TLS,
forwards HTML requests there, and routes `/api/v1` to the API service.
Static release metadata is served by the same SSR process at `/robots.txt`,
`/sitemap.xml`, and `/site.webmanifest`.

## Docker deployment

The production image runs Angular SSR on container port `4200`. Compose publishes
it only on `127.0.0.1:10501` for the host, leaving the public TLS and Nginx layer
outside the container. The deployment files expect `/home/yves/meta/client` on
the production server. Set the workflow variable `PROD_CLIENT_DEPLOY_PATH` only
when using a different directory.

The workflow requires the same SSH and GHCR secrets as the gateway workflow:
`PROD_HOST`, `PROD_USER`, `PROD_SSH_PRIVATE_KEY`, `PROD_SSH_KNOWN_HOSTS`,
`PROD_GHCR_USERNAME`, and `PROD_GHCR_TOKEN`. `PROD_SSH_PORT` is optional and
defaults to `22`.

Create or select the GitHub Environment named `production`, then add:

| Type     | Name                      | Value                                         |
| -------- | ------------------------- | --------------------------------------------- |
| Secret   | `PROD_HOST`               | Production server hostname or IP              |
| Secret   | `PROD_USER`               | SSH deployment user                           |
| Secret   | `PROD_SSH_PRIVATE_KEY`    | Private Ed25519 key used by Actions           |
| Secret   | `PROD_SSH_KNOWN_HOSTS`    | Pinned `known_hosts` entry for the server     |
| Secret   | `PROD_GHCR_USERNAME`      | GitHub user or machine-user name              |
| Secret   | `PROD_GHCR_TOKEN`         | GHCR token with package read access           |
| Variable | `PROD_SSH_PORT`           | Optional; `22` if omitted                     |
| Variable | `PROD_CLIENT_DEPLOY_PATH` | Optional; `/home/yves/meta/client` if omitted |

`GITHUB_TOKEN`, `REGISTRY`, `IMAGE_NAME`, `IMAGE_TAG`, and the `production`
environment URL are already supplied by the workflow; do not create duplicate
repository variables for them.

## Current validation limitations

The focused Angular component and contact-page tests pass. Six starter page/layout
tests still need their router, storage, or updated-shell test providers/assertions.
Six proxy unit assertions expect older error-message wording. These known test
issues are deferred; a failed suite should not be treated as a successful check.

## Styling and initialization

Keep the `src/styles` token, theme, base, layout, responsive, and utility hierarchy.
Use `--gray-*` for the grayscale palette and the existing `--font-family-*`,
`--font-size-*`, `--font-weight-*`, and `--line-height-*` typography tokens.
Shared buttons and badges use the `gray` color variant for this palette.

The root module initializes theme preferences and namespaced storage without
starting backend health polling or POS authentication services.
TypeScript strict checking and Angular strict template checking are enabled.
