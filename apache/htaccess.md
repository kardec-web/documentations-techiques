
# htaccess

# Compression Gzip
Pour activer le module apache lancer la commande suivant *a2enmod deflate*

```
# MOD_DEFLATE COMPRESSION
<IfModule mod_deflate.c>
SetOutputFilter DEFLATE
AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/x-javascript application/x-httpd-php
</IfModule>
```

# Cache static content
Pour activer le module apache lancer la commande suivant *a2enmod headers*

## Expire header
```
<IfModule mod_expires.c>
 ExpiresActive On
 ExpiresDefault "access plus 7200 seconds"
 ExpiresByType image/jpg "access plus 2592000 seconds"
 ExpiresByType image/jpeg "access plus 2592000 seconds"
 ExpiresByType image/png "access plus 2592000 seconds"
 ExpiresByType image/gif "access plus 2592000 seconds"
 AddType image/x-icon .ico
 AddType application/vnd.ms-fontobject .eot
 AddType application/x-font-ttf .ttf
 AddType application/x-font-opentype .otf
 AddType application/x-font-woff .woff
 AddType image/svg+xml .svg
 ExpiresByType image/ico "access plus 2592000 seconds"
 ExpiresByType image/icon "access plus 2592000 seconds"
 ExpiresByType image/x-icon "access plus 2592000 seconds"
 ExpiresByType text/css "access plus 2592000 seconds"
 ExpiresByType text/javascript "access plus 2592000 seconds"
 ExpiresByType text/html "access plus 7200 seconds"
 ExpiresByType application/xhtml+xml "access plus 7200 seconds"
 ExpiresByType application/javascript A2592000
 ExpiresByType application/x-javascript "access plus 2592000 seconds"
 ExpiresByType application/x-shockwave-flash "access plus 2592000 seconds"
 ExpiresByType application/vnd.ms-fontobject "access plus 1 month"
 ExpiresByType application/x-font-ttf "access plus 1 month"
 ExpiresByType application/x-font-opentype "access plus 1 month"
 ExpiresByType application/x-font-woff "access plus 1 month"
 ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>
```

## Cache-control
```
<IfModule mod_headers.c>
 <FilesMatch "\.(ico|jpe?g|png|gif|swf|css|gz)$">
 Header set Cache-Control "max-age=2592000, public"
 </FilesMatch>
 <FilesMatch "\.(js)$">
 Header set Cache-Control "max-age=2592000, private"
 </FilesMatch>
<filesMatch "\.(html|htm)$">
Header set Cache-Control "max-age=7200, public"
</filesMatch>
# Disable caching for scripts and other dynamic files
<FilesMatch "\.(pl|php|cgi|spl|scgi|fcgi)$">
Header unset Cache-Control
</FilesMatch>
</IfModule>

# Vhost Configuration - Htaccess

## Exemple complet de fichier htaccess et config apche
https://github.com/h5bp/server-configs-apache

## Remove spam backlist
https://github.com/Stevie-Ray/apache-nginx-referral-spam-blacklist

## Desactivate php on a directory
```
RemoveHandler .php .phtml .php3
RemoveType .php .phtml .php3

```

## Activate php on a directory
```
AddHandler .php .phtml .php3
AddType .php .phtml .php3
```