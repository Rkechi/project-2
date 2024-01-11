//FOR THE FADE ANIMATION
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function checkFadeUp() {
    const fadeUpElements = document.querySelectorAll(".fadebox-up");
    fadeUpElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener(
    "scroll",
    debounce(() => {
      const mainDiv = document.querySelector(".fademain-div");
      const mainDivTop = mainDiv.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (mainDivTop < windowHeight) {
        mainDiv.style.opacity = "1";
        mainDiv.style.transform = "translateY(0)";
      }
      checkFadeUp();
    })
  );


// FOR THE BEGINNING BLUR EFFECT
  document.addEventListener("DOMContentLoaded", function() {
    // Remove blur effect after a delay
    setTimeout(function() {
      document.getElementById("blur-container").style.filter = "none";
    }, 3000); // Change 3000 to the desired duration in milliseconds (e.g., 5000 for 5 seconds)
  });
  


// SCROLL TO TOP
$(window).scroll(function(){
  if($(this).scrollTop()  > 20){
      $('#mybtn').fadeIn('slow')        
  }else{
      $('#mybtn').fadeOut('slow')
  }
})

// move to top
$('#mybtn').click(function(){
  $('html, body').animate({ scrollTop: 0}, 'slow')
  return false
})


// FOR THE ABOUT PAGE SLIDER
// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  autoplay: {
    delay: 2000, // Autoplay every 2 seconds
  },
});

// FADE IN ANIMATION
$(document).ready(function() {
  $('.fade-in').animate({ opacity: 1 }, 2000); // Adjust the duration as needed (in milliseconds)
});


// PRELOADER

function openLoader() {
  // Open the loader page
  window.open('loader.html', '_blank');

  // After a delay of 5 seconds (5000 milliseconds), redirect to the user dashboard page
 
}

