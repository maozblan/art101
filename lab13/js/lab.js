/**
 * fizzbuzz.
 *
 * @link   https://maozblan.github.io/art101/lab13/index.html
 * @file   implementation of dynamic fizzbuzz.
 * @author Lyssa.
 * @since  27.11.2023
 */


$("#submit").click(function() {
    // get input values
    let num0 = $("#num0").val();
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    let num3 = $("#num3").val();
    console.log(num0, num1, num2, num3);
    let word0 = $("#word0").val();
    let word1 = $("#word1").val();
    let word2 = $("#word2").val();
    let word3 = $("#word3").val();
    console.log(word0, word1, word2, word3);
    // empty output
    $("#output").empty();
    // refill output
    for (let i = 1; i <= 200; ++i) {
        let val = "";
        if (i % num0 == 0) {
            val += word0;
        }
        if (i % num1 == 0) {
            val += word1;
        }
        if (i % num2 == 0) {
            val += word2;
        }
        if (i % num3 == 0) {
            val += word3;
        }
        // last check
        if (val == "") {
            val = i;
        } else {
            val += "!";
        }
        $("#output").append("<p>" + val + "</p>");
    }
});
