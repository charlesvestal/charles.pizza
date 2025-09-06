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
for MOV in *.mov; do
  BASE="${MOV%.mov}"
  POSTER="$MEDIA_DIR/$BASE-poster.jpg"
  MP4="$MEDIA_DIR/$BASE.mp4"

  echo "Processing: $MOV"
  # Poster at 1s into the clip
  ffmpeg -y -ss 00:00:01 -i "$MOV" -frames:v 1 "$POSTER"

  # Transcode to smaller MP4 (600w, 30fps, H.264 + AAC)
  ffmpeg -y -i "$MOV" \
    -vf "scale=600:-2,fps=30" \
    -c:v libx264 -preset veryfast -crf 24 \
    -c:a aac -b:a 96k \
    -movflags +faststart \
    "$MP4"

  echo "✔ Wrote $POSTER and $MP4"
done

echo "Done."
