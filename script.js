
window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    const sticky = menu.offsetTop;

    if (window.pageYOffset > sticky) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
});

// script.js
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators(index);
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function updateIndicators(index) {
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
}

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        currentIndex = index;
        showSlide(index);
    });
});

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

setInterval(showNextSlide, 3000);

// jquery
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 600); 
        return false;
    });
});
