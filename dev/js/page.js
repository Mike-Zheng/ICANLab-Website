$(document).ready(function() {
    // $('.search').on('click', function() {
    //     $('.search').css('padding', '10px 50px');
    // });


    $('.search').focus(function() {
        $('.search').css('padding', '10px 50px');
    });
    $('.search').blur(function() {
        $('.search').css('padding', '10px 10px 10px 40px');
    });

});
