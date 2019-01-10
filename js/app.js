$(".project").hover3d({
    selector: ".project__card",
    shine: false,
  });
  
  $(".project").hover3d({

    // selector for element
    selector      : null,
  
    // Perspective value for 3d space
    perspective   : 10000,
  
    // Mouse movement sensitivity
    sensitivity   : 10,
  
    // Default behavior is the element will follow the mouse, look like it facing the mouse
    invert        : false,
  
    // Add shining layer
    shine       : false,
  
    // Helper class when mouse hover in the element
    hoverInClass  : "hover-in",
  
    // Helper class when mouse hover Out the element
    hoverOutClass : "hover-out",
  
    // Helper class when the mouse is hovering the element
    hoverClass    : "hover-3d"
    
  });

//   var listMenu = document.querySelectorAll('.list_item');

//   listMenu[0].addEventListener('click', function(){
//     window.scrollTo(300, 500); 
//   })
  $('.list_item:nth-child(1)').on('click', function(event) {
    var target = $('.sec_2');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$('.list_item:nth-child(2)').on('click', function(event) {
    var target = $('.sec_3');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$('.list_item:nth-child(3)').on('click', function(event) {
    var target = $('.sec_5');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});