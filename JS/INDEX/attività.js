document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.SLIDER');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        sliders.forEach((slider, i) => {
            if (i === index) {
                slider.classList.add('active');
            } else {
                slider.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        clearInterval(slideInterval);
        currentSlide = (currentSlide + 1) % sliders.length;
        showSlide(currentSlide);
        startSlideInterval();
    }

    function prevSlide() {
        clearInterval(slideInterval);
        currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
        showSlide(currentSlide);
        startSlideInterval();
    }

    function startSlideInterval() {
        slideInterval = setInterval(function () {
            nextSlide();
        }, 4000);
    }

    // Aggiungi event listener per la navigazione tramite tastiera
    document.querySelector('.H2-ATTIVITÀ').addEventListener('click', function () {
        console.log('Clicked next');
        nextSlide();
    });

    document.querySelector('.H2-ATTIVITÀ').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            console.log('Enter key pressed');
            nextSlide();
        }
    });

    // Aggiungi event listener per la navigazione tramite touch
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.DIV-ATTIVITÀ').addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
    });

    document.querySelector('.DIV-ATTIVITÀ').addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].clientX;
        handleTouch();
    });

    function handleTouch() {
        const touchThreshold = 50; // Soglia per considerare un tocco come uno slide

        if (touchStartX - touchEndX > touchThreshold) {
            console.log('Swiped left');
            nextSlide();
        } else if (touchEndX - touchStartX > touchThreshold) {
            console.log('Swiped right');
            prevSlide();
        }
    }

    // Aggiungi icone cliccabili per la navigazione tra le immagini
    const prevIcon = document.createElement('i');
    prevIcon.className = 'fas fa-chevron-left';
    prevIcon.addEventListener('click', function () {
        console.log('Clicked previous');
        prevSlide();
    });
    prevIcon.style.color = '#ffffff';
    prevIcon.style.fontSize = '80px';
    document.querySelector('.DIV-ATTIVITÀ').appendChild(prevIcon);

    const nextIcon = document.createElement('i');
    nextIcon.className = 'fas fa-chevron-right';
    nextIcon.addEventListener('click', function () {
        console.log('Clicked next');
        nextSlide();
    });
    nextIcon.style.color = '#ffffff';
    nextIcon.style.fontSize = '80px';
    document.querySelector('.DIV-ATTIVITÀ').appendChild(nextIcon);

    // Posiziona le icone sopra l'immagine a sinistra e destra
    const iconContainer = document.querySelector('.DIV-ATTIVITÀ');
    iconContainer.style.position = 'relative';

    prevIcon.style.position = 'absolute';
    prevIcon.style.left = '30px';
    prevIcon.style.top = '50%';
    prevIcon.style.transform = 'translateY(-50%)';
    prevIcon.style.zIndex = '1';

    nextIcon.style.position = 'absolute';
    nextIcon.style.right = '30px';
    nextIcon.style.top = '50%';
    nextIcon.style.transform = 'translateY(-50%)';

    // Inizia mostrando la prima immagine
    showSlide(currentSlide);
    startSlideInterval();
});
