
// Toggle menu ad hamburger

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Script che rende il link della navbar active on scroll

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

                });
        };

    // Rimuovi il menu ad hamburger on scroll della page

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    });

    // Sticky navbar

    let header = document-querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};

    // Scroll reveal

    // ScrollReveal({
    //     // reset: true,
    //     distance: '80px',
    //     duration: 2000,
    //     delay: 200
    // });

    // ScrollReveal().reveal('.home-img img, .home-content, .heading', { origin: 'top' });
    // ScrollReveal().reveal('.home-content h1, .services-container, .portfolio-box, .contact form ', { origin: 'bottom' });
    // ScrollReveal().reveal('.about-img', { origin: 'left' });
    // ScrollReveal().reveal('.about-content', { origin: 'right' });

    // Typed js

    const typed = new Typed('.multiple-text', {
        strings: ['Sviluppatore Web', 'Musicista'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 3000,
        loop: true
    });

    //Calcola l' età

    function calculate_age(dob) {
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let current_age = Math.abs(age_dt.getUTCFullYear() - 1970);

        return document.getElementById("age").innerHTML = current_age;

    }

     calculate_age(new Date(2002, 2, 15));


