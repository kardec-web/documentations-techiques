# Backup, Restore duplicate

## Backup
``` bash
pg_dump db_name -O -U user -W -h localhost -f file_name.dump -F c
```

## Restore
``` bash
createdb my_db
pg_restore fichier.dump -d my_db
```

## Duplicate
``` bash
createdb -O user_owner -T source_db target_db
```

## Remove db
``` bash
dropdb db
```