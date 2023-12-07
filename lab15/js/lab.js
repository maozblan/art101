/**
 * just getting some good old fun.
 *
 * @link   https://maozblan.github.io/art101/lab15/index.html
 * @file   using the XKCD API to get some fun comics.
 * @author Lyssa.
 * @since  04.12.2023
 */

let jsonData;  // store the newest comic data for later use
$(document).ready(function() {
    // get most recent comic for later use
    $.ajax({
        url : "https://xkcd.com/info.0.json",
        type : "GET",
        dataType : "json",
        success : function(data) {
            jsonData = JSON.parse(JSON.stringify(data));
            console.log(`successfully got: ${JSON.stringify(data)}`);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

/*
// making the button clickable
$('#get-comic').click(function() {
    // pick a random number from 1 to newest
    let randomNum = Math.floor(Math.random() * (jsonData.num - 1) + 1);
    console.log(randomNum);
    // use ajax to fetch the randomly selected comic
    let comicPicked;
    $.ajax({
        url : `https://xkcd.com/${randomNum}/info.0.json`,
        type : "GET",
        dataType : "json",
        success : function(data) {
            comicPicked = JSON.parse(JSON.stringify(data));
            console.log(`successfully got: ${JSON.stringify(data)}`);
            displayComic(comicPicked);  // need to wait for success callback
        },
        error : function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

$('#get-newest-comic').click(function() {
    // newest comic already fetched on load
    displayComic(jsonData);
});

function displayComic(comicJSON) {
    console.log(comicJSON);
    $('#output').empty()   // clear out old data
        .append(`<h2>${comicJSON.safe_title}`)                              // append title
        .append(`<img src="${comicJSON.img}" alt="${comicJSON.alt}">`);     // append img
}
*/