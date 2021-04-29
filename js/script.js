/* Hover dropdown */
$("#Offre, .myDropdown").hover(
    function() {

        $('.myDropdown').removeClass("displayNone")


    },
    function() {

        $('.myDropdown').addClass("displayNone");

    }
);

/* Hover changement de logo de Avantage */
$("#souplesse").hover(
    function() {
        $('#souplesseImg').attr('src', 'NosAvantages/icones_blanches/souplesse_icon.png');
        $('#souplesseImg').css('background-color', '#2ea7b0');
    },
    function() {
        $('#souplesseImg').attr('src', 'NosAvantages/souplesse.png');
        $('#souplesseImg').css('background-color', 'white');

    }
);

$("#pratique").hover(
    function() {
        $('#pratiqueImg').attr('src', 'NosAvantages/icones_blanches/pratique_icon.png');
        $('#pratiqueImg').css('background-color', '#2ea7b0');
    },
    function() {
        $('#pratiqueImg').attr('src', 'NosAvantages/pratique.png');
        $('#pratiqueImg').css('background-color', 'white');

    }
);

$("#equipement").hover(
    function() {
        $('#equipementImg').attr('src', 'NosAvantages/icones_blanches/equipement_icon.png');
        $('#equipementImg').css('background-color', '#2ea7b0');
    },
    function() {
        $('#equipementImg').attr('src', 'NosAvantages/equipement.png');
        $('#equipementImg').css('background-color', 'white');

    }
);

$("#disponibilite").hover(
    function() {
        $('#disponibiliteImg').attr('src', 'NosAvantages/icones_blanches/disponibilite_icon.png');
        $('#disponibiliteImg').css('background-color', '#2ea7b0');
    },
    function() {
        $('#disponibiliteImg').attr('src', 'NosAvantages/disponibilite.png');
        $('#disponibiliteImg').css('background-color', 'white');

    }
);

$("#conventionne").hover(
    function() {
        $('#conventionneImg').attr('src', 'NosAvantages/icones_blanches/conventionne_icon.png');
        $('#conventionneImg').css('background-color', '#2ea7b0');
    },
    function() {
        $('#conventionneImg').attr('src', 'NosAvantages/conventionne.png');
        $('#conventionneImg').css('background-color', 'white');

    }
);

$("#animations").hover(
    function() {
        $('#animationsImg').attr('src', 'NosAvantages/icones_blanches/animations_icon.png');
        $('#animationsImg').css('background-color', '#2ea7b0');
    },
    function() {
        $('#animationsImg').attr('src', 'NosAvantages/animations.png');
        $('#animationsImg').css('background-color', 'white');

    }
);
/* Fin Hover changement de logo de Avantage */

/*********** Slider *******/
/* Fonction slider Slick*/
$(document).ready(function() {
    $('.slick-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 500,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),

    });
});
/* hover coeur sur les images du slider */
$(".imgSlider").hover(
    function() {

        $(this).siblings('.logoCoeur').removeClass("displayNone")


    },
    function() {

        $(this).siblings('.logoCoeur').addClass("displayNone");

    }
);


/* Hover Actualité  */
$(".boutonActu").hover(
    function() {

        $(this).siblings('h4').css('color', '#2ea7b0');
        $(this).siblings('img').css('box-shadow', '1px 1px 8px black');
        /* box-shadow: 1px 1px 8px black; */

    },
    function() {

        $(this).siblings('h4').css('color', 'black');
        $(this).siblings('img').css('box-shadow', 'none');

    }
);