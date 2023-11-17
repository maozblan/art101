#!/bin/bash

# replacing all the previous images with canvases
find . -type f -name "*.html" | while read file; do
    # the \1 should take the value from the previous capture group
    sed -i '' -e 's|<img src="\(\.\.+/\)?img/ghostCat_\([a-z]*\)\.png"/>|<canvas class="ghost-cat-anim" data-color="\2"></canvas>|g' "$file"
done
