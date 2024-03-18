document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    modules: [EffectCarousel],
    effect: 'carousel',
    carouselEffect: {
      opacityStep: 0.33,
      scaleStep: 0.2,
      sideSlides: 2,
    },
    grabCursor: true,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: false,
  });

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const titleElement = document.querySelector('.slider-title');
  const descriptionElement = document.querySelector('.slider-description');

  const titles = [
    'Title 1', 
    'Title 2', 
    'Title 3', 
    'Title 4', 
    'Title 5',
    'Title 6',
    'Title 7',
  ];
  const descriptions = [
    'Description 1', 
    'Description 2', 
    'Description 3', 
    'Description 4', 
    'Description 5',
    'Description 6',
    'Description 7',
  ]; 

  updateContent();

  // Aggiungi un gestore di eventi per il pulsante precedente personalizzato
  prevBtn.addEventListener('click', function () {
    swiper.slidePrev();
    swiper.autoplay.stop(); // Ferma il timer quando l'utente interagisce
    updateContent();
  });

  // Aggiungi un gestore di eventi per il pulsante successivo personalizzato
  nextBtn.addEventListener('click', function () {
    swiper.slideNext();
    swiper.autoplay.stop(); // Ferma il timer quando l'utente interagisce
    updateContent();
  });

  // Aggiungi un gestore di eventi per quando l'utente inizia a trascinare lo slider
  swiper.on('touchStart', function () {
    swiper.autoplay.stop(); // Ferma il timer quando l'utente inizia a trascinare
    updateContent();
  });

  // Aggiungi un gestore di eventi per quando l'utente smette di trascinare lo slider
  swiper.on('touchEnd', function () {
    swiper.autoplay.start(); // Riprendi il timer quando l'utente smette di trascinare
    updateContent();
  });

  // Aggiungi un gestore di eventi per quando lo slider cambia diapositiva
  swiper.on('slideChange', function () {
    swiper.autoplay.start(); // Riprendi il timer quando lo slider cambia diapositiva automaticamente
    updateContent();
  });

  function updateContent() {
    const activeIndex = swiper.realIndex;
    titleElement.textContent = titles[activeIndex];
    descriptionElement.textContent = descriptions[activeIndex];
  }
});






