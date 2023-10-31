/**
 * a couple of variables to print.
 *
 * @link   https://maozblan.github.io/art101/lab7/index.html
 * @file   This file asks for your name and then sorts it.
 * @author Lyssa.
 * @since  03.11.2023
 */

function sortUserName() {
    console.log("function is called");

    // obtain name from user input
    let name = window.prompt("Hello! Please give me your name so I can fix it :)");
    console.log(name);

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

document.writeln(sortUserName());
