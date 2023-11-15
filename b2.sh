#!/bin/bash

# making the colors into variables instead
find . -type f -name "*.css" | while read file; do
    sed -i '' -e 's/#1a2d44/var(--dark)/g' -e 's/#3e5d84/var(--med)/g' -e 's/#739ccf/var(--light)/g' "$file"
done

