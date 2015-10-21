#!/bin/bash
templates_dir=$(xdg-user-dir TEMPLATES)
if [[ -z "${templates_dir}" ]]; then
  echo Unable to locate TEMPLATES user directory >&2
  exit 1
fi
cp template.md "${templates_dir}/Markdown 文档.md"
