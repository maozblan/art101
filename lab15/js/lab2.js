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
        url : "https://yesno.wtf/api",
        type : "GET",
        dataType : "json",
        success : function(data) {
            jsonData = JSON.parse(JSON.stringify(data));
            console.log(`successfully got: ${JSON.stringify(data)}`);

            // input data
            $("#output").empty();
            let img = $("<img>").attr("src", jsonData.image);
            $("#output").append(img);
        },
        error : function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});