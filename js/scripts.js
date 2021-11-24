/*!
* Start Bootstrap - New Age v6.0.4 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Thank you feedback 
const form = document.querySelector('form');
form.addEventListener('submit', function (){
    event.preventDefault
});
function onButtonClick(){
    $(#submitButton).on("click", hideButton);
}
function hideButton(){
    $("#submitButton").hide();
    $("#email").prop("disabled", true);
    $("#name").prop("disabled", true); 
    $("#comments").prop("disabled", true);

    $("#message").show();
    let inputValue = $("#name").val();
    let copyMessage = $("#message"); 
    copyMessage.text("Thank you " + inputValue + ", for your feedback!");
}
onButtonClick();