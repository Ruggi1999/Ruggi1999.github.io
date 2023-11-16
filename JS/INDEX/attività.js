const slider = document.getElementById('slider');

  const dotsContainer = document.getElementById('dots-container');

  let slideIndex = 0;

  let autoSlide = true;

  let slideInterval;

  let touchStartX = 0;

  let touchEndX = 0;

  function startSlideInterval() {

    slideInterval = setInterval(() => {

      nextSlide();

    }, 3000);

  }

  function nextSlide() {

    if (slideIndex < slider.children.length - 1) {

      slideIndex++;

    } else {

      slideIndex = 0;

    }

    updateSlider();

  }

  function updateSlider() {

    const translateValue = -slideIndex * 100 + '%';

    slider.style.transform = 'translateX(' + translateValue + ')';

    updateDots();

  }

  function createDots() {

    for (let i = 0; i < slider.children.length; i++) {

      const dot = document.createElement('div');

      dot.classList.add('dot');

      dot.addEventListener('click', () => {

        slideIndex = i;

        updateSlider();

        clearInterval(slideInterval);

        startSlideInterval();

      });

      dotsContainer.appendChild(dot);

    }

    updateDots();

  }

  function updateDots() {

    const dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {

      if (index === slideIndex) {

        dot.classList.add('active');

      } else {

        dot.classList.remove('active');

      }

    });

  }

  function handleTouchStart(event) {

    touchStartX = event.touches[0].clientX;

    clearInterval(slideInterval);

  }

  function handleTouchMove(event) {

    touchEndX = event.touches[0].clientX;

  }

  function handleTouchEnd() {

    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {

      nextSlide();

    } else if (touchDiff < -50) {

      prevSlide();

    }

    startSlideInterval();
    
  }

  function prevSlide() {

    if (slideIndex > 0) {

      slideIndex--;

    } else {

      slideIndex = slider.children.length - 1;

    }

    updateSlider();

  }

  createDots();

  if (autoSlide) {

    startSlideInterval();

  }

  slider.addEventListener('touchstart', handleTouchStart);

  slider.addEventListener('touchmove', handleTouchMove);
  
  slider.addEventListener('touchend', handleTouchEnd);