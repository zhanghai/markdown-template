#!/bin/bash
sed -e "s:\\\$APOLLO\\\$:$(readlink -f apollo.css):" -e "s:\\\$PANGU\\\$:$(readlink -f pangu.js):" -e "s:\\\$HIGHLIGHT\\\$:$(readlink -f highlight.min.js):" meta_template.md >template.md
