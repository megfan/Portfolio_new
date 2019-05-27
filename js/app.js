//cursor_______
$(window).mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 100);
});

$(window).on('load', function() {
    $(document).scrollTop(0);
    setTimeout(
        function() {
            $("#loader_sec").addClass("fade-up");
            $(document).scrollTop(0);
        }, 2000);
});

//scrolllll_______________

$('.menu_item:nth-child(1)').on('click', function(event) {
    console.log($(".menu_item:nth-child(1)"));
    var target = $('.sec_2');
    console.log($('.sec_2'));
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});
$('.menu_item:nth-child(2)').on('click', function(event) {
    console.log('click');
    var target = $('.sec_3');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$('.menu_item:nth-child(3)').on('click', function(event) {
    var target = $('.sec_5');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


