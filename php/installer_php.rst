
Configuration
=============
php.ini
:::::::
::

    output_buffering = Off
    error_reporting  =  E_ALL | E_STRICT
    display_errors = On
    display_startup_errors = On

httpd.conf
::::::::::
::

    AddType application/x-httpd-php .php .php5
    AddType application/x-httpd-php-source .phps

xdebug
::::::
::

    zend_extension="/usr/lib/php/20060613/xdebug.so"
