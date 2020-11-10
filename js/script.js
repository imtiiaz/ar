$(function () {

"use strict";


// Menufix

var navoff = $(".main_menu").offset().top;

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
        $(".main_menu").addClass("menu_fix");
    } else {
        $(".main_menu").removeClass("menu_fix");
    }
});

// Smooth Scroll

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

// scroll top 


$(".scroll_top").on('click', function () {
    $("html,body").animate({
        scrollTop: 0,
    }, 800);
});
$(window).on('scroll', function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
        $(".scroll_top").fadeIn();
    } else {
        $(".scroll_top").fadeOut();
    }
});

// Closes responsive menu when a scroll link is clicked

$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Wow js

new WOW().init();


// Venobox

$(document).ready(function () {
    $('.venobox').venobox();
});

// Parallax


});
