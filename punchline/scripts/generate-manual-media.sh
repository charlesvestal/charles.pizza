#!/usr/bin/env bash
set -euo pipefail

# Generate posters (JPG) and web-friendly MP4s for all .mov files
# in images/manual. Requires ffmpeg.

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="${DIR%/scripts}"
MEDIA_DIR="$ROOT/images/manual"
ORIG_DIR="$MEDIA_DIR/originals"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is required but not found in PATH" >&2
  exit 1
fi

cd "$ORIG_DIR"

shopt -s nullglob

process_one() {
  local SRC="$1"
  local BASE
  BASE="${SRC%.*}"
  local POSTER="$MEDIA_DIR/$BASE-poster.jpg"
  local OUTMP4="$MEDIA_DIR/$BASE.mp4"

  echo "Processing: $SRC"
  ffmpeg -y -ss 00:00:01 -i "$SRC" -frames:v 1 "$POSTER"
  ffmpeg -y -i "$SRC" \
    -vf "scale=600:-2,fps=30" \
    -c:v libx264 -preset veryfast -crf 24 \
    -c:a aac -b:a 96k \
    -movflags +faststart \
    "$OUTMP4"
  echo "✔ Wrote $POSTER and $OUTMP4"
}

for SRC in *.mov *.mp4; do
  [ -e "$SRC" ] || continue
  process_one "$SRC"
done

echo "Done."
