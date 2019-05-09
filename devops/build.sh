#!/bin/sh
apt-get update
ln -fs /usr/share/zoneinfo/Europe/Dublin /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
apt-get install python3-sphinx build-essential -y
make html
ls _build/html/