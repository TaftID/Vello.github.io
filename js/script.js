// navbar

const navbar = document.querySelector('.navbar');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
  if (window.pageYOffset === 0) {
    navbar.classList.remove('scrolled');
  } else {
    navbar.classList.add('scrolled');
  }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', function() {
  navbarNav.classList.toggle('show-nav');
  hamburgerMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.navbar-nav') && !event.target.closest('.hamburger-menu')) {
    navbarNav.classList.remove('show-nav');
    hamburgerMenu.classList.remove('active');
  }
});

// increase number

const historySection = document.querySelector('.history');
const numElements = historySection.querySelectorAll('.num');

let animationDone = false;

window.addEventListener('scroll', () => {
    const historySectionPosition = historySection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (historySectionPosition < windowHeight && !animationDone) {
        let counter1 = 0;
        let counter2 = 0;
        const targetNumber1 = 47;
        const targetNumber2 = 50;

        const interval1 = setInterval(() => {
            if (counter1 === targetNumber1) {
                clearInterval(interval1);
            } else {
                counter1++;
                numElements[0].innerText = counter1 + "K";
            }
        }, 50);

        const interval2 = setInterval(() => {
            if (counter2 === targetNumber2) {
                clearInterval(interval2);
            } else {
                counter2++;
                numElements[1].innerText = counter2 + "+";
            }
        }, 50);

        animationDone = true;
    }

    if (historySectionPosition > windowHeight) {
        numElements[0].innerText = 0;
        numElements[1].innerText = 0;
        animationDone = false;
    }
});