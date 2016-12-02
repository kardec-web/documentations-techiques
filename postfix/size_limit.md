# Size Limit

## show size limit
```
postconf -d | grep size
```
berkeley_db_create_buffer_size = 16777216
berkeley_db_read_buffer_size = 131072
body_checks_size_limit = 51200
bounce_size_limit = 50000
header_size_limit = 102400
mailbox_size_limit = 51200000
message_size_limit = 10240000
tcp_windowsize = 0

## change size limit
```
sudo postconf -e mailbox_size_limit=10240000
sudeo service postfix restart
# 0 for ulimited
```
