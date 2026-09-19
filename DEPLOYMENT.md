# Deploy `meta.nexeragroup.rw`

The client container listens on `127.0.0.1:10501`. Nginx terminates TLS and
proxies page requests to the client and `/api/` requests to the gateway on
`127.0.0.1:10160`.

## DNS and HTTP bootstrap

Point the domain's A record at the server and allow inbound TCP ports 80 and
443. Add an AAAA record only when IPv6 is correctly routed.

Install the host packages and ACME webroot:

```sh
sudo apt-get update
sudo apt-get install -y nginx certbot
sudo install -d -m 0755 /var/www/letsencrypt
```

Install the bootstrap site before requesting the certificate:

```sh
sudo install -m 0644 deploy/nginx/meta-client-http.conf \
  /etc/nginx/sites-available/meta.nexeragroup.rw
sudo ln -sfn /etc/nginx/sites-available/meta.nexeragroup.rw \
  /etc/nginx/sites-enabled/meta.nexeragroup.rw
sudo nginx -t
sudo systemctl reload nginx
```

Request the certificate with the webroot challenge. Replace the email address
with the operational certificate owner:

```sh
sudo certbot certonly --webroot -w /var/www/letsencrypt \
  -d meta.nexeragroup.rw \
  --email YOUR_CERTIFICATE_EMAIL \
  --agree-tos --no-eff-email
```

Install the HTTPS site after Certbot succeeds:

```sh
sudo install -m 0644 deploy/nginx/meta-client.conf \
  /etc/nginx/sites-available/meta.nexeragroup.rw
sudo nginx -t
sudo systemctl reload nginx
```

Verify renewal before relying on the timer:

```sh
sudo certbot renew --dry-run
```

## Smoke checks

```sh
curl -I http://meta.nexeragroup.rw/
curl --fail https://meta.nexeragroup.rw/health
curl --fail https://meta.nexeragroup.rw/robots.txt
curl --fail https://meta.nexeragroup.rw/sitemap.xml
```

The HTTP request should redirect to HTTPS. Keep ports `10501` and `10160`
private; only Nginx should be publicly exposed on ports 80 and 443.
