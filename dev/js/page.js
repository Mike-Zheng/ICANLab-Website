$(document).ready(function() {
    // $('.esoe-search').on('click', function() {
    //     $('.esoe-search').css('padding', '10px 50px');
    // });


    $('.esoe-search').focus(function() {
        $('.esoe-search').css('padding', '10px 50px');
    });
    $('.esoe-search').blur(function() {
        $('.esoe-search').css('padding', '10px 10px 10px 40px');
    });

$('.right-panel-rwd').on('click', function() {
    $('.dropdown-rwd').slideToggle();
});



});
