# Linux Disk Size and Disk Quota:

## Disk Size
### Vérifier l'utilisation d'un espace disque
``` bash
df -h
```
### Verifier l'utilisation des inodes
``` bash
df -i
```

## Quota
### Voir le quota de tous les utilisateurs (en root)
``` bash
repquota /home
```

### Connaitre le quota pour un utilisateur:
``` bash
su username
quota
```

### Connaitre le quota pour un groupe:
``` bash
su username
quota -g
```

### disabling the quota for the user "username":
``` bash
setquota -u username 0 0 0 0 -a
```

## Help
[Debian article] (https://debian-administration.org/article/47/Limiting_your_users_use_of_disk_space_with_quotas)