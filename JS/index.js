








document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    const indicators = document.querySelector(".slider-indicators");
    let currentSlide = 0;
  
    // Creare indicatori per ciascuna immagine
    imageContainers.forEach((_, index) => {
      const indicator = document.createElement("span");
      indicator.classList.add("indicator");
      indicator.addEventListener("click", () => showSlide(index));
      indicators.appendChild(indicator);
    });
  
    // Mostra la prima immagine all'avvio
    showSlide(0);
  
    // Funzione per mostrare una specifica immagine
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = imageContainers.length - 1;
      } else if (slideIndex >= imageContainers.length) {
        slideIndex = 0;
      }
  
      // Nascondi tutte le immagini
      imageContainers.forEach((imageContainer) => {
        imageContainer.style.display = "none";
      });
  
      // Rimuovi la classe "active" da tutti gli indicatori
      const indicators = document.querySelectorAll(".indicator");
      indicators.forEach((indicator) => {
        indicator.classList.remove("active");
      });
  
      // Mostra l'immagine corrente
      imageContainers[slideIndex].style.display = "block";
      // Aggiungi la classe "active" all'indicatore corrispondente
      indicators[slideIndex].classList.add("active");
      currentSlide = slideIndex;
    }
  
    // Funzione per scorrere automaticamente le immagini

  

  });
  