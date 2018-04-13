//mobile menu
function burgerToggle() {
    var nav_icon = document.getElementById("nav-icon");

    if (nav_icon.classList.contains("open")) {
        console.log("remove");
        nav_icon.classList.remove("open")
    } else {
        console.log("add");
        nav_icon.classList.add("open")
    }
}

// scroll to the element-block
$('a[href^="#"]').click(function(e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        //this script works only on tablet or more devices
        if (window.innerWidth >= 768) {
            //to solve a problem with 'fixed menu' 
            if(window.scrollY < 113) {
                $('html,body').stop().animate({
                    scrollTop:target.offset().top -123
                }, 1000);
            } else {
                $('html,body').stop().animate({
                    scrollTop:target.offset().top -61
                }, 1000);
            }
                
        } else {
            $('html,body').stop().animate({
                scrollTop:target.offset().top
            }, 1000);
        }
    }
});

//button to the top
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');

    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "670") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "670") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
    $("#go-top").scrollToTop();
});

//accordion
$(".item__head").click(function(){
    $('.active').removeClass('active');
    if(false == $(this).next().is(':visible')) {
        $('.item__body').slideUp(600);
        $(this).addClass('active');
    }
    $(this).next().slideToggle(600);
});

window.onreset = function (ev) {

}


//make fixed positioned menu on scroll
window.onscroll = function(){
    menu = document.getElementById('menu');
    // toMenu = menu.offsetTop;
    if (window.innerWidth >= 768) {

        if (window.scrollY >= 113 ) {
            menu.classList.add('fixed')
            menu.style.width = document.body.clientWidth - 2 + 'px';

        } else {
            menu.classList.remove('fixed')
            menu.style.width = '100%'
        }
    } else {
        menu.classList.remove('fixed')
        menu.style.width = '100%'
    }
}


//script for 'counts' section
$(document).ready(function(){

    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){

        if(!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();

        if(w_top + 455 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 3000
            });

            show = false;
        }
    });
});


// type it for welcome section
new TypeIt('h1.title', {
    startDelay: 1000,
    speed: 100,
    cursorSpeed: 1000,
    cursor: true,
    loop: false,
    autoStart: false
});

new TypeIt('h2.name', {
    strings: ['Ирины Лучистой',
              'Мы рады каждому клиенту!',
              'Мы не делаем Вас красивыми, а лишь подчеркиваем то, что дала вам природа.'],
    startDelay: 5000,
    speed: 100,
    cursorSpeed: 1000,
    cursor: true,
    breakLines: false,
    nextStringDelay: 3000,
    loop: true,
    loopDelay: 5000,
    autoStart: true
});


//scrollReveal

window.sr = ScrollReveal();
sr.reveal('.header', { duration: 1000, origin: 'top', distance: '100px', });
sr.reveal('.welcome button', { duration: 3000, origin: 'right', distance: '200px', rotate: { x: 0, y: 0, z: 0 }});
sr.reveal('.certificate .container__text', { duration: 2000, origin: 'bottom', distance: '100px' });
sr.reveal('.questions button', { duration: 2000, origin: 'bottom', distance: '200px', rotate: { x: 0, y: 0, z: 0 }});
sr.reveal('.item', { duration: 2000, origin: 'left', distance: '200px' });
sr.reveal('.accordion', { duration: 2000, origin: 'top', distance: '100px' });
sr.reveal('.galary__content>.content__item:nth-of-type(even)', { duration: 2000, origin: 'top', distance: '100px' });
sr.reveal('.galary__content>.content__item:nth-of-type(odd)', { duration: 2000, origin: 'bottom', distance: '100px' });
sr.reveal('.footer', { duration: 1000, origin: 'bottom', distance: '200px'});
sr.reveal('.nets', { duration: 2500, origin: 'right', distance: '100px'});
