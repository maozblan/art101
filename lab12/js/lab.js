/**
 * a small sorting function.
 *
 * @link   https://maozblan.github.io/art101/lab12/index.html
 * @file   implementation for the "major sorting".
 * @author Lyssa.
 * @since  21.11.2023
 */

$("#submit").click(function() {
    let [division, major] = sortingHat($("#input").val());
    let div = $("#major");
    div.empty();
    div.append(`<p>Your major is: ${major}!</p>`);
    div.append(`<p>${data[division][major]}</p>`);
    div.append(`<p>Please note that these are all for fun, do not take any of the descriptions seriously. Thank you!</p>`);
});

function sortingHat(name) {
    const divisions = Object.keys(data);
    const division = data[divisions[name.length % divisions.length]];
    // for some extra spice
    let ASCIIval;
    if (name.length % 2 == 0) {
        ASCIIval = 0;
    } else {
        ASCIIval = 5;
    }
    for (let i = 0; i < name.length; ++i) {
        ASCIIval += name.charCodeAt(i);
    }
    const majors = Object.keys(division);
    return [divisions[name.length % divisions.length], majors[ASCIIval % majors.length]];
}

const data = {
    "arts" : {
        "Art" : "It's a nice day at UCSC and the perfect inspirational mood to create something fun! Heading down to the studio at Eleana Baskin again. Have fun! Don't get too toasty under the sun. May all the deer, turkeys, and rabbits follow you on your merry way, praying that your art project will look as good as you had imagined it to be.",
        "Film" : "Another day, another wish for the film to develop. Please. If it develops, we'd love to show you our negatives! Or our designs or our projects or anything. They're quite fun to make and even more fun to look at or to watch!"
    },
    "humanities" : {
        "History" : "There is so much powerful knowing how far and wide history runs, since things tend to happen and happen again. It's a study of looking into the past and through the past, look into the future. And also how to write 15-page, analytical essays in a week.",
        "Literature" : "Now tell me please, why the curtains on page 253 are blue and what they represent about the character. Haha, just kidding, it's much more than that. Although it would be nice to learn how to read between the lines before you get here, but it's never too late to start analyzing every other word."
    },
    "phys & bio sciences" : {
        "Physics" : "A simple study of how the world just works so much that nothing can seem like magic anymore. Sometimes the fun in life gets taken out when everything slowly devolves into a mathematical equation or someone somewhere's law. But then again, knowledge.",
        "Chemistry" : "Welcome, welcome. There's plenty of things to learn. Now please just put on your protective equipment before heading into the lab. Don't want to set yourself on fire during the experiments today. Oh and a word of warning. Good luck on the rite of passage... ochem. Hexagons will haunt you in your dreams."
    },
    "baskin" : {
        "Computer Science" : "Welcome to the grand majority of everyone crying over their laptops on the 5th hour of debugging. Please sort yourself into the group that knows what they are doing somehow and breezing through or the group that is going to every section begging for clarification.",
        "Engineering" : "Hello! Do you have another group of problems we never knew existed? Great, would you add that to the stack of paperwork right over there. Everything is good and jolly when you get what you're learning... and to those who don't get it? Just hope that it isn't you."
    },
    "social science" : {
        "Economics" : "No, we do not all know how the stock market works like the back of our hands... there's much more to economics than finance you know. We study the choices of individuals up to the choices of governments and how the world comes together. There's a lot more than just shiny little rocks.",
        "Psychology" : "Somewhere there must be a limit of how much you can read about learning how to read minds without actually learning how to read minds. How many times have we tried to read someone and be totally off because everyone is so different? Just read the book and try harder to match cases there instead."
    }
}
