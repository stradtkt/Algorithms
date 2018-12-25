$(document).ready(function() {
    var emailField = $('#email');
    if(emailField.is('input') && emailField.prop('type') === 'email') {
        emailField.on('change', function(e) {
            if(!e.target.validity.valid) {
                $(this).removeClass("success").addClass("error");
            } else {
                $(this).removeClass("error").addClass("success");
            }
        });
        emailField.on('invalid', function(e) {
            e.target.setCustomValidity("");
            if(!e.target.validity.valid) {
                e.target.setCustomValidity("You need to make this an email address!");
            } else {
                e.target.setCustomValidity("");
            }
        })
    }
});