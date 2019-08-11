/* global $*/
$(function () {
    'use strict';
    // declaration des variable 
   const ar = $('.box_slider'),
   right = $('#right'),
   left = $('#left'),
   ayman = $('.ayman');
   let i=0,
   clickFois = 0,
   vlu = ar.length - 1;
//hide the box 
   for(i=0; i < ar.length; i++) {
       ar.eq(i).css('left', -i*100 + '%');
   }
//create and insert the div and span for point 
   ayman.append('<div id="petit"></div>');
   for(i=0; i< ar.length; i++) {
       $('#petit').append('<span></span>');
   }
//    add class lie for first point 
let spaAy = $('#petit span');
spaAy.eq(vlu).addClass('lie');
//gere event click left and right 
   right.on('click', function () {
       if (clickFois < ar.length - 1) {
        for(i=0; i < ar.length; i++) {
            ar.eq(i).animate({
                left:'+=100%'
            }, 300); 
        }
        clickFois = clickFois + 1;
        vlu = vlu - 1;
        spaAy.eq(vlu).addClass('lie').siblings('span').removeClass('lie');
        
    }     
   });
   left.on('click', function () {
    if (clickFois > 0) {
     for(i=0; i < ar.length; i++) {
         ar.eq(i).animate({
             left:'-=100%'
         }, 300); 
     }
     clickFois = clickFois - 1;
     vlu = vlu + 1;
     spaAy.eq(vlu).addClass('lie').siblings('span').removeClass('lie');
 }
     
});
});