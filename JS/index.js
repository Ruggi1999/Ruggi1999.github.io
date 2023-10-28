document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("a-003");
    const nav2 = document.querySelector(".nav-002");
    const nav1 = document.querySelector(".nav-001");
    const iconElement = menuIcon.querySelector(".menu");
    const a2 = document.querySelectorAll(".a-002");
    const otherIcons = document.querySelectorAll(".li-001:not(#a-003) .a-001 i");
    let menuOpen = false;

    function toggleMenu() {
        if (menuOpen) {
            iconElement.classList.remove("fa-xmark"); // Rimuovi la classe per cambiare l'icona
            iconElement.classList.add("fa-equals");
            // a2.forEach(item => item.classList.remove("open"));
            nav2.classList.remove("open");
            nav2.style.animation = "slideOut 0.7s ease";
            nav1.classList.remove("open");
            nav1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            otherIcons.forEach(item => {
                item.style.opacity = 1;
            });



            setTimeout(() => {
                nav2.style.display = "none";
            }, 700);
            iconElement.style.transform = "rotate(0deg)";
        } else {
            iconElement.classList.remove("fa-equals"); // Rimuovi la classe per l'icona iniziale
            iconElement.classList.add("fa-xmark"); 
            nav2.style.display = "block";
            nav2.style.animation = "slideIn 0.7s ease";
            nav1.classList.add("open");
            nav1.style.backgroundColor = "#161617";
            iconElement.style.transform = "rotate(90deg)";
            a2.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("show");
                }, index * 50); // Aggiungi un ritardo di 50 millisecondi tra ciascun elemento
              });
            setTimeout(() => {
                nav2.classList.add("open"); // Aggiungi la classe .open per aprire il menu con dissolvenza
                // a2.forEach(item => item.classList.add("open"));
              }, 10); 
              otherIcons.forEach(item => {
                item.style.opacity = 0;
            });
        }
        menuOpen = !menuOpen;
    }
    
    

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", function (event) {
        if (menuOpen && event.target !== menuIcon && !nav2.contains(event.target)) {
            toggleMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 1023) {
            nav2.style.display = "none";
            nav2.style.animation = "slideOut 0.7s ease";
            iconElement.style.transform = "rotate(0deg)";
            iconElement.classList.remove("fa-xmark"); // Rimuovi la classe per cambiare l'icona
            iconElement.classList.add("fa-equals");
            nav1.classList.remove("open"); // Rimuovi la classe "open" da nav-1
            nav1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                    otherIcons.forEach(item => {
            item.style.opacity = 1;
        });
            menuOpen = false;
        }
    });
});




