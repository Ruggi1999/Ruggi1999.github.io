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

            iconElement.classList.remove("fa-xmark");
            
            iconElement.classList.add("fa-equals");

            nav2.classList.remove("open");

            nav2.style.animation = "slideOut 0.7s ease";

            nav1.classList.remove("open");

            nav1.style.backgroundColor = "#0e0e0ef3";

            otherIcons.forEach(item => {

                item.style.opacity = 1;

            });

            setTimeout(() => {

                nav2.style.display = "none";

            }, 700);

            iconElement.style.transform = "rotate(0deg)";

        } else {

            iconElement.classList.remove("fa-equals");

            iconElement.classList.add("fa-xmark"); 

            nav2.style.display = "block";

            nav2.style.animation = "slideIn 0.7s ease";

            nav1.classList.add("open");

            nav1.style.backgroundColor = "#161617";

            iconElement.style.transform = "rotate(90deg)";

            a2.forEach((item, index) => {

                setTimeout(() => {

                  item.classList.add("show");

                }, index * 50);

              });

            setTimeout(() => {

                nav2.classList.add("open");

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

            iconElement.classList.remove("fa-xmark");

            iconElement.classList.add("fa-equals");

            nav1.classList.remove("open");

            nav1.style.backgroundColor = "#0e0e0ef3";

                    otherIcons.forEach(item => {

            item.style.opacity = 1;

        });

            menuOpen = false;

        }

    });
    
});

document.addEventListener('DOMContentLoaded', function () {

    const menuItems = document.querySelectorAll('.menu-2');

    menuItems.forEach(function (menuItem) {

        menuItem.addEventListener('click', function () {
            
            this.classList.toggle('active');

            menuItems.forEach(function (otherMenuItem) {

                if (otherMenuItem !== menuItem) {

                    otherMenuItem.classList.remove('active');

                }

            });

        });

    });

});