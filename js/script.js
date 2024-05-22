document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.querySelector('.search-form');
  const searchBox = document.getElementById('search-box');
  const searchResults = document.getElementById('search-results');
  const loginForm = document.querySelector('.login-form-container');
  const headerSection = document.querySelector('.header .header-2');
  const loaderContainer = document.querySelector('.loader-container');

  // MADE BY EREN ONAK ANIL TOKLU EREN YARDIMCI  SEMİH ARTAN
  document.getElementById('search-btn').onclick = () => {
    console.log('Search button clicked'); // Debugging line
    searchForm.classList.toggle('active');
    // Optional: Clear results when closing the search form
    if (!searchForm.classList.contains('active')) {
      searchResults.innerHTML = '';
    }
  };

  // Toggle login form visibility
  document.getElementById('login-btn').onclick = () => {
    loginForm.classList.toggle('active');
  };

  document.getElementById('close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
  };

  // Handle scrolling to adjust header visibility
  window.onscroll = () => {
    searchForm.classList.remove('active');
    searchResults.innerHTML = ''; // Clear search results on scroll

    if (window.scrollY > 80) {
      headerSection.classList.add('active');
    } else {
      headerSection.classList.remove('active');
    }
  };

  // Fade out the loader
  function loader() {
    loaderContainer.classList.add('active');
  }

  function fadeOut() {
    setTimeout(loader, 100);
  }

  window.onload = () => {
    if (window.scrollY > 80) {
      headerSection.classList.add('active');
    } else {
      headerSection.classList.remove('active');
    }

    fadeOut();
  };

  // Initialize Swiper sliders for different sections
  var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
