#!/bin/sh
apt-get install python3-sphinx build-essential -y
make html
ls _build/html/