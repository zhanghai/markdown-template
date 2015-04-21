#!/bin/bash
sed -e "s:\\\$APOLLO\\\$:$(readlink -f apollo.css):" -e "s:\\\$PANGU\\\$:$(readlink -f pangu.js):" meta_template.md >template.md
