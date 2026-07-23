#!/bin/sh
set -eu

ROOT=$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)
python3 -m http.server 4173 --directory "$ROOT"
