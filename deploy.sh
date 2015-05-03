#!/bin/bash
sed \
    -e "s:\\\$MATHJAX\\\$:$(readlink -f mathjax/MathJax.js):" \
    -e "s:\\\$PANGU\\\$:$(readlink -f pangu.js):" \
    -e "s:\\\$HIGHLIGHT\\\$:$(readlink -f highlight.min.js):" \
    script.meta.js >script.js
sed \
    -e "s:\\\$APOLLO\\\$:$(readlink -f apollo.css):" \
    -e "s:\\\$SCRIPT\\\$:$(readlink -f script.js):" \
    template.meta.md >template.md
