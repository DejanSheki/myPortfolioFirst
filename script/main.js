//hamburger

$(function() {

    $('.bars').on('click', function() {
        $(".bars").toggleClass('bars-open');
        $('.menu').slideToggle(700);
    });

    $('.menu a').on('click', function() {
        var ww = $(window).width();
        if (ww < 768) {
            $('.menu').slideToggle(700);
            $('.bars-open').toggleClass('bars-open');
        }
    });
    $('.theme-switch input[type="checkbox"]').on('click', function() {
        var ww = $(window).width();
        if (ww < 768) {
            $('.menu').slideToggle(700);
            $('.bars-open').toggleClass('bars-open');
        }
    });

});


//dark/light
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

let docStyle = getComputedStyle(document.documentElement);

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;

    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

//green sock
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.text', {
    y: '0%',
    duration: 1.1,
    stagger: 1,
    ease: 'back'
});
tl.to('.slider', {
    y: '-100%',
    duration: 1.5,
    delay: 1
});
tl.to('.intro', {
        y: '-100%',
        duration: 1
    },
    '-=1');
tl.fromTo('nav', {
    opacity: 0
}, {
    opacity: 1,
    duration: 0.8
});


/* media Query */

installMediaQueryWatcher("(min-width: 768px)", function(matches) {

    if (matches) {
        tl.to('.welcome-text', {
                x: '0%',
                y: '-15px',
                duration: 1.5,
                stagger: 1,
                ease: 'back',
            },
            '-=1');
        tl.to('.welcome-text-d', {
                x: '59%',
                y: '-25px',
                duration: 1.5,
                stagger: 1,
                ease: 'back.out(1.2)'
            },
            '-=1');
    } else {
        tl.to('.welcome-text', {
                x: '0%',
                y: '0px',
                duration: 1.5,
                stagger: 1,
                ease: 'back',
            },
            '-=1');
        tl.to('.welcome-text-d', {
                x: '50%',
                y: '-7px',
                duration: 1.5,
                stagger: 1,
                ease: 'back.out(1.2)'
            },
            '-=1');
    }
});

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function(e) { return layoutChangedCallback(e.matches); });
    layoutChangedCallback(mql.matches);
}


/* scrollTrigger */

gsap.registerPlugin(ScrollTrigger);

gsap.to('.jump', {
    scrollTrigger: {
        trigger: '.jump',
        toggleActions: 'play complete pause reset',
    },
    opacity: 1,
    y: '0%',
    duration: 2,
    ease: 'back.out(4)'
});
gsap.to('.jump-2', {
    scrollTrigger: {
        trigger: '.jump-2',
        toggleActions: 'play complete pause reset'
    },
    opacity: 1,
    y: '0%',
    duration: 2,
    ease: 'back.out(4)'
});
gsap.to('.jump-3', {
    scrollTrigger: {
        trigger: '.jump-3',
        start: 'top bottom-=80px',
        toggleActions: 'play complete pause reset'
    },
    opacity: 1,
    y: '0%',
    duration: 2,
    ease: 'back.out(4)'
});


/* sticky nav */

$(document).ready(function() {

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.sticky').addClass('stickyAdd');
        } else {
            $('.sticky').removeClass('stickyAdd');
        }
    });
});