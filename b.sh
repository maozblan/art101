for ((i = 9; i <= 16; i++)); do
    mkdir "lab$i"
    cd "lab$i"
    mkdir "css"
    mkdir "js"
    mkdir "img"
    touch "css/lab.css"
    cp "../sampleJS.js" "js/lab.js"
    sed -i '' -e "s|\$i|$i|" "js/lab.js"
    cp "../sampleIndex.html" "index.html"
    sed -i '' -e "s|\$prev|$((i - 1))|" -e "s|\$next|$((i + 1))|" "index.html"
    cd ..
done

