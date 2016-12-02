# users

## Creating new user
```
useradd username --create-home -g sudo -s /bin/bash
```

## Create new password
```
$ sudo apt-get install makepasswd
$ makepasswd -count 1 -minchars 8
$ makepassword -string 1234567890 -chars 4 

```

## Changing password
```
$ passwd username
```