========
iptables
========

Lister les règles
:::::::::::::::::
::

    iptables -L (+ -v mode verbeux)

Vider les règles
::::::::::::::::
::
    iptables -F

Les options
-A  Ajouter une règle
-D supprimer une règle
-i l'interface réseau sur laquelle le paquet est arrivé (eth0)
-p protocol (udp, tcp, icmp, all)
--dport le port de destination du paquet
-j action du traitement (Accept, DROP)
-P sens de l'action (INPUT, OUTPUT, FORWARD)

Ajouter une règle
:::::::::::::::::
::

    iptables -A <sens> 
