#!/usr/bin/env bash
set -euo pipefail

# Convert WAV previews in kits/previews/originals to MP3 in kits/previews
# Requires ffmpeg with libmp3lame

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="${DIR%/scripts}"
SRC_DIR="$ROOT/kits/previews/originals"
OUT_DIR="$ROOT/kits/previews"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is required but not found in PATH" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

shopt -s nullglob
cd "$SRC_DIR"
for WAV in *.wav; do
  BASE="${WAV%.wav}"
  FIXED="$BASE"
  # Normalize known naming issues
  case "$FIXED" in
    Batallion|batallion)
      FIXED="Battalion" ;;
  esac
  OUT="$OUT_DIR/$FIXED.mp3"
  echo "Converting: $WAV -> ${OUT#$ROOT/}"
  ffmpeg -y -i "$WAV" -vn -ar 44100 -ac 2 -codec:a libmp3lame -q:a 4 "$OUT"
done

echo "Done."
