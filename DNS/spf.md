# Enregistrement SPF

## Syntax (Règle TXT)
```
v=spf1 ip4:xx.xx.xx.xx ~all
```

## Avec plusieurs IP
```
"v=spf1 ip4:xx.xx.xx.xx include:<domain> ~all"
```

## Tester l'enregistrement
```
https://vamsoft.com/support/tools/spf-policy-tester
```