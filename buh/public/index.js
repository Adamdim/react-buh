// var zindex = 20;

// $("div.card").click(function(e){
//   e.preventDefault();

//   var isShowing = false;

//   if ($(this).hasClass("show")) {
//     isShowing = true
//   }

//   if ($("div.cards").hasClass("showing")) {
//     // a card is already in view
//     $("div.card.show")
//       .removeClass("show");

//     if (isShowing) {
//       // this card was showing - reset the grid
//       $("div.cards")
//         .removeClass("showing");
//     } else {
//       // this card isn't showing - get in with it
//       $(this)
//         .css({zIndex: zindex})
//         .addClass("show");

//     }

//     zindex++;

//   } else {
//     // no cards in view
//     $("div.cards")
//       .addClass("showing");
//     $(this)
//       .css({zIndex:zindex})
//       .addClass("show");

//     zindex++;
//   }

// });

// let pulsleft = document.getElementById("left");
// let pulsright = document.getElementById("right");
// let plustteg = document.getElementById("puls1");

// function pulsa(){
//     if(plustteg.style.height == "50px"){
//     pulsleft.style.top = pulsleft.style.top == "10px"?"35px":"10px";
//     pulsright.style.top = pulsright.style.top == "10px"?"35px":"10px";
//     }
// }

// var mypuls = setInterval(pulsa,1000);
// (function($) { // Begin jQuery
// $(function() { // DOM ready
//   // If a link has a dropdown, add sub menu toggle.
//   $('nav ul li a:not(:only-child)').click(function(e) {
//     $(this).siblings('.nav-dropdown').toggle();
//     // Close one dropdown when selecting another
//     $('.nav-dropdown').not($(this).siblings()).hide();
//     e.stopPropagation();
//   });
//   // Clicking away from dropdown will remove the dropdown class
//   $('html').click(function() {
//     $('.nav-dropdown').hide();
//   });
//   // Toggle open and close nav styles on click
//   $('#nav-toggle').click(function() {
//     $('nav ul').slideToggle();
//   });
//   // Hamburger to X toggle
//   $('#nav-toggle').on('click', function() {
//     this.classList.toggle('active');
//   });
// }); // end DOM ready
// })(jQuery);
