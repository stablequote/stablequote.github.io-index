"use strict";

// cursor, follower

let
cursor = $(".cursor"),
follower = $(".follower"),
cWidth = 8, 
fWidth = 48, 
delay = 10, 
mouseX = 0, 
mouseY = 0, 
posX = 0, 
posY = 0;

TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;
    
    TweenMax.set(follower, {
        css: {    
          left: posX - (fWidth / 2),
          top: posY - (fWidth / 2)
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
    });
  }
});

$(document).on("mousemove", function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active");
    follower.addClass("is-active");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active");
    follower.removeClass("is-active");
  }
});

// fadeIn

window.onload = function() {
    scroll_effect();
  
    $(window).scroll(function(){
     scroll_effect();
    });
  
    function scroll_effect(){
     $('.fadeIn').each(function(){
      let elemPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
       $(this).addClass('view');
      }
     });
    }
};

// item

var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');

var parallax = new Parallax(item1, {
  relativeInput: true,
  clipRelativeInput: false,
  hoverOnly: false, 
  invertX: false, 
  invertY: false, 
  limitX: false, 
  limitY: false, 
  scalarX: 10, 
  scalarY: 10, 
  frictionX: .05, 
  frictionY: .05, 
  originX: .5, 
  originY: .5, 
});

var parallax = new Parallax(item2, {
  relativeInput: true,
  clipRelativeInput: false,
  hoverOnly: false, 
  invertX: false, 
  invertY: false, 
  limitX: false, 
  limitY: false, 
  scalarX: 10, 
  scalarY: 10, 
  frictionX: .05, 
  frictionY: .05, 
  originX: .5, 
  originY: .5, 
});

var parallax = new Parallax(item3, {
  relativeInput: true,
  clipRelativeInput: false,
  hoverOnly: false, 
  invertX: false, 
  invertY: false, 
  limitX: false, 
  limitY: false, 
  scalarX: 10, 
  scalarY: 10, 
  frictionX: .05, 
  frictionY: .05,  
  originX: .5, 
  originY: .5, 
});

// Barba

barba.init();