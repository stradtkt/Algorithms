$(document).ready(function() {
    $('h1, h2, h3').on('click', function(event) {
        event.preventDefault();
        $(this).slideUp();
    });
});