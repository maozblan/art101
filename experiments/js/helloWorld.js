// making a hello world page that steals your name again
// in class experiements 15 Nov 2023

let button = $("<button>").attr("id", "my-button").text("your name please");

$("#title").after(button);

$("#my-button").click(function() {
    $("#title").html("HELLO " + prompt("Name please: ").toUpperCase());
});
