#!/bin/sh
apt-get update
ln -fs /usr/share/zoneinfo/Europe/Dublin /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
apt-get install python-sphinx build-essential -y
make html
ls _build/html/
cp -R devops/firebase-skeleton .
cp -R _build/html/* public
