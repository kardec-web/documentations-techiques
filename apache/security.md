https://github.com/h5bp/server-configs-apache

# Force Secure Cookie and HttpOnly
```
# ----------------------------------------------------------------------
# | Secure cookie with HttpOnly and Secure flag in Apache                                  |
# ----------------------------------------------------------------------

# Implement cookie HTTP header flag with HTTPOnly & Secure to protect website from XSS attacks
#
# https://geekflare.com/httponly-secure-cookie-apache/

<IfModule mod_headers.c>
    Header always edit Set-Cookie ^(.*)$ $1;Secure
    Header always edit Set-Cookie ^(.*)$ $1;HTTPOnly
</IfModule>
```