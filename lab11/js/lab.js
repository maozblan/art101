/**
 * summary.
 *
 * @link   https://maozblan.github.io/art101/lab11/index.html
 * @file   about file.
 * @author Lyssa.
 * @since  20.11.2023
 */


// from lab 7
function sortUserName(name) {
    // no you can't be quirky and put nothing
    if (name.length < 1) {
        return "nameless being :/";
    }

    // turn into array, reverse sort, turn back
    let nameArr = name.split(' ');
    for (let i = 0; i < nameArr.length; ++i) {      // in case the name has multiple words
        nameArr[i] = nameArr[i].toLowerCase().split('').sort().reverse().join('');
    }
    name = nameArr.join(' ');
    return name;
}

$("#submit").click(function() {
    let sorted = sortUserName($("#input").val());
    $("#output").append('<div class="text"><p>' + sorted + '</p></div>');
});

// anagram function i wrote up
function anagram(name) {
    // no you can't be quirky and put nothing
    if (name.length < 1) {
        return "nameless being :/";
    }

    let nameArr = name.split('');
    // random uniform permutation algorithm from my 102 class
    for (let i = 0; i < nameArr.length; ++i) {
        // swap A[i] with A[RANDOM(i, n)]
        let random = Math.floor(Math.random() * (nameArr.length - i) + i);
        [nameArr[i], nameArr[random]] = [nameArr[random], nameArr[i]];
    }
    name = nameArr.join('');
    return name;
}

$("#submit-anagram").click(function() {
    let a = anagram($("#input-anagram").val());
    $("#output").append('<div class="text"><p>' + a + '</p></div>');
});
