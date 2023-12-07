/**
 * pokemon pokemon pokemon.
 *
 * @link   https://maozblan.github.io/art101/lab16/index.html
 * @file   about file.
 * @author Lyssa.
 * @since  07.12.2023
 */

let score = 0;
let total = 0;
let currentPokemon = [];
let seen = [];  // helper to have no duplicates in pokemon
let pokemonData, totalPokemon;

// it would be nice to have a total count of pokemon that updates when the api gets updated :(
let pokemonCount = 1017;


// play another round
$("#reload-button").click(function() {
    console.log("reloading pokemon...");
    // get number of pokemon per round and select them at random
    selectPokemon(getPokemonCount());
});

$("#submit-button").click(function() {
    console.log("submitting guesses...");
    // show pokemon
    $(".hide").toggleClass("hide");
    // disable further guessing
    $(".guess").prop("disabled", true);
    // count score
    for (let i = 0; i < currentPokemon.length; ++i) {
        if ($(`.pokemon${i} input`).val().toLowerCase() == currentPokemon[i].name) {
            score++;
            $(`.pokemon${i} .result`).html("yay!");
        } else {
            $(`.pokemon${i} .result`).html(currentPokemon[i].name);
        }
    }
    // display updated score
    total += currentPokemon.length;
    updateScore();
});

$("#reset-button").click(function() {
    console.log("resetting score...");
    // reset and update the score
    score = 0;
    total = 0;
    updateScore();
});

// functions ///////////////////////////////////////////////////////////////////

function updateScore() {
    if (total) {
        $(".score").html(`current score : ${score}/${total}   ${(100*score/total).toFixed(2)}%`);
    } else {
        $(".score").html(`current score : ${score}/${total}   N/A`);
    }
}

function getPokemonCount() {
    let c = $("#pokemon-count").val();
    console.log("pokemon count", c);
    if (c == "") {
        c = 1;
    }
    return c;
}

function displayPokemon() {
    // display all fetched pokemons
    console.log("displaying pokemon...");
    $("#output").empty();
    for (let i = 0; i < currentPokemon.length; ++i) {
        let pokemon = $(`<div class="pokemon pokemon${i}">`)
            .append(`<img src="${currentPokemon[i].sprites.front_default}" class="hide">`)
            .append(`<input class="guess" type="text" placeholder="guess?">`)
            .append(`<div class="result">`);
        $("#output").append(pokemon);
    }
}

// needs to be async so the while loop doesn't continue execution BEFORE ajax success finishes
// with help from google bard
async function selectPokemon(num) {
    console.log("pokemon count received", num);
    currentPokemon = []; // reset current pokemon to get new ones
    seen = [];
    while (1) {
        let pokemonNum = Math.floor(Math.random() * (pokemonCount-1) + 1);
        try {
            let data = await $.ajax({
                url : `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`,
                method : "GET",
                dataType : "json"
            });
            if (!seen.includes(data.name)) {
                currentPokemon.push(data);
                seen.push(data.name);
            }
            if (currentPokemon.length >= num) { // enough pokemon fetched
                displayPokemon();
                break;
            }
        } catch (error) {
            console.log(error);
        }   
    }
}
