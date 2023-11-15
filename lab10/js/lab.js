/**
 * the conversation generator.
 *
 * @link   https://maozblan.github.io/art101/lab10/index.html
 * @file   it summons conversations from a whole list.
 * @author Lyssa.
 * @since  17.11.2023
 */

let conversationBank = [
    ["L", "heyyyyy", "R", "haiii", "L", "you wanna hear a silly pickup line?", "R", "fs", "L", "ahem", "L", "all these places to go, yet i just want to 'cd' to where you are", "R", "AWWWWWWWW", "L", "IKR"],
    ["L", "hello", "R", "hi!", "R", "how are you?", "L", "pretty good. you?", "R", "midtermsssss", "L", "good luckkkkk", "R", "thank you!"],
    ["L", "you down for dinner tonight?", "R", "whatcha cooking?", "L", "dunno... curry noodles?", "R", "i'm so down", "L", "haha ok, come at 18:30", "R", "i'll be there at 6 lol"],
    ["R", "question", "L", "yeah?", "R", "did you do the homework yet?", "R", "i'm stuck on question 8.4-2", "L", "shii there was homework?", "R", "yeah...", "L", "NOOOOOOOOOOO", "R", "good luck man"],
    ["R", "you free?", "R", "hello?", "R", "i guess not", "R", "bro?", "R", "????", "L", "sorry i was showering", "R", "bro it's been 3 hours"],
    ["R", "you need anything from trader joe's?", "L", "don't think so", "R", "cheese?", "L", "what they got", "R", "your favorite", "L", "damnnnnnnn", "L", "aight get me 30 dollars worth", "R", "...you're only getting a block", "L", ":("],
    ["L", "what do you think is the meaning of life?", "R", "42", "L", "no i'm being serious", "R", "...", "R", "we are nothing but specks of dust in the grand timeline of the univserse wo why does it matter that we live anyway? isn't it just something we give meaning to? if we saw no meaning in life, then there would be no point to wake up tomorrow or the day after or the day after that. we would simply just come to a standstill. yet each one of us, knowingly or unknowingly gave a meaning to our own life and we all unconsiouly live by that.", "L", "so after all these years of searching, the answer wasn't a real thing all along but rather whoever's perspective that we are looking through. haha imagine searching all your life just to realize tha answer is some intangible and abstract idea", "R", "yeah that would suck", "L", "mmhm", "R", "u happy?", "L", "nah", "R", "you wanna be?", "L", "yeah", "R", "well perhaps redefine your life so that you can be. if there's anyone in control of your happiness, it would be yourself, wouldn't it? if happiness is something you want, then you should go for it and don't be afraid of it not being enough. not only do you define your life, you also can define your 'happy'", "R", "c'mon i believe in you", "L", "damn i should ask you more phisophical questions", "R", "hahahaha... please don't"]
]
let speaker, text, i, index, convo;    // variables to be initialized later

// generator to keep getting next speaker and text
function *getNext() {
    console.log(conversationBank[index]);
    while (i != conversationBank[index].length) {
        yield conversationBank[index][i];
        i++;
    }
}

// conversation function for #make-convo
function converse() {
    $("#output").append(`<div class="${speaker.value}-text text"><p>${text.value}</p></div>`);
    // setup for next round
    speaker = convo.next();
    text = convo.next();
    if (text.done) {
        $("#make-convo").prop("disabled", true);
        $("#new-convo").toggleClass("hide");
    }
}

// inititalize conversation
function onStart() {
    // remove the conversation the user already read
    if (index != undefined) {
        console.log('y');
        conversationBank.splice(index, 1);
    } else {
        console.log('n');
    }
    if (conversationBank.length == 0) {
        $("#new-convo").addClass("hide");
        $("#make-convo").addClass("hide");
        $("#fin-button").removeClass("hide");
        $("#output").append("<p>you have already read all the conversations</p>");
        $("#output").append("<p>thank you for staying to the end :)</p>");
        return;
    }
    // set up generator and necessary values
    i = 0;
    convo = getNext();
    index = Math.floor(Math.random() * conversationBank.length);
    // set speaker and text
    speaker = convo.next();
    text = convo.next();
    console.log(speaker, text);
}

// call onStart to initialize conversation
onStart();

$("#make-convo").click(converse);
$("#new-convo").click(function() {
    $("#output").empty();
    $("#make-convo").prop("disabled", false);
    $("#new-convo").toggleClass("hide");

    // restart
    onStart();
});
