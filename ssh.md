# SSH

## Spécifier la clé à utiliser pour un domaine

```
~/.ssh/config
Host            gitserv
    Hostname        remote.server.com (ip or hostname of git server)
    IdentityFile    ~/.ssh/id_rsa
    IdentitiesOnly yes
```

## Ressources
http://www.linux-france.org/prj/edu/archinet/systeme/ch13s03.html

