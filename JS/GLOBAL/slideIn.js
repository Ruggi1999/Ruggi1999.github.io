function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Intersecting:', entry.target);
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

// Configurazione dell'Observer
var options = {
    root: null, // Il viewport è il root
    rootMargin: '0px', // Nessun margine aggiunto
    threshold: 0.1 // 50% dell'elemento deve essere visibile
};

// Creazione dell'Observer con la funzione di callback
var observer = new IntersectionObserver(handleIntersection, options);

// Ottieni gli elementi che devono avere l'effetto di comparsa
var elementsToSlideInRight = document.querySelectorAll('.slideInRight');

// Aggiungi ciascun elemento all'Observer
elementsToSlideInRight.forEach(element => {
    observer.observe(element);
});





function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Intersecting:', entry.target);
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

// Configurazione dell'Observer
var options = {
    root: null, // Il viewport è il root
    rootMargin: '0px', // Nessun margine aggiunto
    threshold: 0.1 // 50% dell'elemento deve essere visibile
};

// Creazione dell'Observer con la funzione di callback
var observer = new IntersectionObserver(handleIntersection, options);

// Ottieni gli elementi che devono avere l'effetto di comparsa
var elementsToSlideInLeft = document.querySelectorAll('.slideInLeft');

// Aggiungi ciascun elemento all'Observer
elementsToSlideInLeft.forEach(element => {
    observer.observe(element);
});


