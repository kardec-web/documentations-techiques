# Scan networks

## Avahi

Avahi is a free Zero-configuration networking (zeroconf) implementation, including a system for multicast DNS/DNS-SD service discovery. It allows programs to publish and discover services and hosts running on a local network with no specific configuration. For example you can plug into a network and instantly find printers to print to, files to look at and people to talk to. It is licensed under the GNU Lesser General Public License (LGPL).

Scan networks
```
$ avahi-browse -alr
```

## Nmap

### Search printers
```
nmap -p 9100,515,631 192.168.0.1/24 -oX printers.xml
```

