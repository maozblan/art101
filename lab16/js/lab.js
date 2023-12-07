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
    // count score and display results
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
        $(".score").html(`current score : ${score}/${total}  ${(100*score/total).toFixed(2)}%`);
    } else {
        $(".score").html("play one round first!");
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
    console.log(currentPokemon);
    for (let i = 0; i < currentPokemon.length; ++i) {
        let pokemon = $("<div>").data('index', i);
        pokemon
            .append("<img>", {
                src : currentPokemon[i].sprites.front_default
            })
            .append("<input>", {
                class : "guess",
                type : "text"
            })
            .append("<div>", {
                class : "result"
            });
        $("#output").append(pokemon);
    }
}

function selectPokemon(num) {
    console.log("pokemon count received", num);
    let seen = [];
    let i = 0;
    do {
        let pokemonNum = Math.floor(Math.random() * (pokemonCount-1) + 1);
        $.ajax({
            url : `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`,
            method : "GET",
            dataType : "json",
            success : function(data) {
                if (!seen.includes(data.name)) {
                    currentPokemon.push(data);
                    seen.push(data.name);
                }
                console.log(seen, currentPokemon.length, currentPokemon <= num);
                if (currentPokemon.length <= num) { // enough pokemon fetched
                    displayPokemon();
                }
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log(pokemonNum);
                console.log("Error:", textStatus, errorThrown);
            }
        });
        if (i > 10){
            break;
        }
        i++;
        console.log(currentPokemon.length < num);
    } while (currentPokemon.length < num);
}
