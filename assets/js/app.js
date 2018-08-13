// $("#wrpOne", "#wrpTwo", "#wrpThree").hover(function() {
//     $("html").css("background", "linear-gradient(to top, #C1D279, #BF4040)");

// })

$("#wrpOne").hover(function() {
    $(this)
        // .toggleClass("active")
        .next()
        .stop(true, true)
        .slideToggle()
});

$("#wrpTwo").hover(function() {
    $(this)
        // .toggleClass("active")
        .next()
        .stop(true, true)
        .slideToggle();
});

$("#wrpThree").hover(function() {
    $(this)
        // .toggleClass("active")
        .next()
        .stop(true, true)
        .slideToggle();
});