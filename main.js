/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

sr.reveal('.education__item',{interval: 200}); // Adjusted interval for education items

/*SCROLL EXPERIENCE*/
sr.reveal('.experience__item',{interval: 200});


/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*===== Smooth Scroll to Sections =====*/
const smoothScroll = document.querySelectorAll('.nav__link');

smoothScroll.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 60, // Adjusted for fixed header height
            behavior: 'smooth'
        });
    });
});

/*===== Dark Mode Toggle =====*/
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    // You can save the dark mode preference in localStorage for persistence
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check local storage for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}





