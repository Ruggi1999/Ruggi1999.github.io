// Funzione di callback per l'Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Una volta che l'elemento è visibile, possiamo smettere di osservare
            observer.unobserve(entry.target);
        }
    });
}

// Configurazione dell'Observer
var options = {
    root: null, // Il viewport è il root
    rootMargin: '0px', // Nessun margine aggiunto
    threshold: 0.5 // 50% dell'elemento deve essere visibile
};

// Creazione dell'Observer con la funzione di callback
var observer = new IntersectionObserver(handleIntersection, options);

// Ottieni gli elementi che devono avere l'effetto di comparsa
var elementsToFadeIn = document.querySelectorAll('.fadeIn');

// Aggiungi ciascun elemento all'Observer
elementsToFadeIn.forEach(element => {
    observer.observe(element);
});