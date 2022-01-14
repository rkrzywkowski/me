/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 




window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// // carousel
// const slide = document.querySelector(`.carousel-container`)
// const navigation = document.querySelector(`.navigation`)
// const prev = document.querySelector(`.prev`)
// const next = document.querySelector(`.next`)
// let allOrbs
// let currentSlide = 0

// class image {
//   constructor(imagePath, imageName) {
//     this.imagePath = imagePath
//     this.imageName = imageName    }}

// const images = [  new image(`../img/first/alan-watts.jpg`, `First Image`),
//                   new image(`../../img/first/de-mello.jpg`, `Second Image`),
//                   new image(`../img/first/emerson.jpg`, `Third Image`),   ]

// const direction = (dir) => {
//   if (slide.classList.contains(`transition`)) {
//     slide.classList.remove(`transition`)      }

//   const refreshImage = () => {
//     setTimeout(() => {
//       slide.style.backgroundImage = `url(${images[currentSlide].imagePath})`
//     }, 0.001)

//     setTimeout(() => {
//       slide.classList.add(`transition`)
//       slide.ariaLabel = images[currentSlide].imageName
//     }, 0.002)           }

//   const refreshOrb = (state) => {
//     state
//     allOrbs[currentSlide].style.backgroundImage = `url(https://i.postimg.cc/k4QjG18h/active.png)`    }

//   if (dir === `right`) {
//     if (currentSlide < images.length - 1) {
//       allOrbs[currentSlide].style.backgroundImage = `url(https://i.postimg.cc/d3J5y2jQ/inactive.png)`
//       refreshOrb(currentSlide++)
//       refreshImage()
//       return           }

//     allOrbs[currentSlide].style.backgroundImage = `url(https://i.postimg.cc/d3J5y2jQ/inactive.png)`
//     refreshOrb(currentSlide = 0)
//     refreshImage()          } 
  
//   else if (dir === `left`) {
//     if (currentSlide > 0) {
//       allOrbs[currentSlide].style.backgroundImage = `url(https://i.postimg.cc/d3J5y2jQ/inactive.png)`
//       refreshOrb(currentSlide--)
//       refreshImage()
//       return           }

//     allOrbs[currentSlide].style.backgroundImage = `url(https://i.postimg.cc/d3J5y2jQ/inactive.png)`
//     refreshOrb(currentSlide = images.length - 1)
//     refreshImage()         }}

// const key = (e) => {
//   switch (e.key) {
//     case `ArrowLeft`:
//       direction(`left`)
//       break
//     case `ArrowRight`:
//       direction(`right`)
//       break           }}

// const nav = () => {
//   for (image of images) {
//     const nav = document.createElement(`div`)
//     nav.setAttribute(`class`, `orb`)
//     navigation.append(nav)    }
//   allOrbs = document.querySelectorAll(`.orb`)   }

// const orbChecker = () => {
//   allOrbs[currentSlide].style.backgroundImage = `url(https://i.postimg.cc/k4QjG18h/active.png)`    }

// document.addEventListener("keyup", key)
// next.addEventListener("click", () => {
//   direction(`right`)    })
// prev.addEventListener("click", () => {
//   direction(`left`)     })

// nav()
// orbChecker()

// $('#carousel-1').carousel({
//   interval: 4000,
//   wrap: true,
//   keyboard: true
// });

// $(document).ready(function() {
//     $('#carousel-1, #carousel-2').carousel();
// })

// $(document).ready(function(){
// 	$('#carousel-1').carousel({
// 		interval: 2000,
// 		keyboard: false,
// 		pause: hover
// 	});
// })

