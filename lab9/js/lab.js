/**
 * this is the implmentation for the funky fancy class that is toggled on button press.
 *
 * @link   https://maozblan.github.io/art101/lab9/index.html
 * @file   '.toggle' class implementation.
 * @author Lyssa.
 * @since  09.11.2023
 */

// add a button to all minor sections and make them clickable

$(".minor-section").each(function() {
    $(this).append("<button class='toggle-button'>toggle :)</button>");
});
$('.toggle-button').click(function() {
    $(this).parent().toggleClass('toggle');
});
