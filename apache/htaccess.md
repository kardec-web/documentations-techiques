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