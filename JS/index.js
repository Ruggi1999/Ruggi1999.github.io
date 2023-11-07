document.addEventListener('DOMContentLoaded', function() {
    const background1 = document.getElementById('background-image');
    const background2 = document.getElementById('background-image-2');
    const logo1 = document.querySelector('.img-header-section');
    const logo2 = document.querySelector('.img-header-section-2');

    document.querySelector('.img-header-section').addEventListener('click', function() {
        if (background1.style.transform === 'translateX(0%)' || background1.style.transform === '') {
            background1.style.transform = 'translateX(-100%)';
            background2.style.transform = 'translateX(0%)';
        } else {
            background1.style.transform = 'translateX(0%)';
            background2.style.transform = 'translateX(100%)';
        }

        if (logo1.style.opacity === '1' || logo1.style.opacity === '') {
            logo1.style.opacity = '0';
            logo2.style.opacity = '1';
        } else {
            logo1.style.opacity = '0';
            logo2.style.opacity = '1';
        }
    });

    document.querySelector('.img-header-section-2').addEventListener('click', function() {
        if (background1.style.transform === 'translateX(0%)' || background1.style.transform === '') {
            background1.style.transform = 'translateX(0%)';
            background2.style.transform = 'translateX(100%)';
        } else {
            background1.style.transform = 'translateX(0%)';
            background2.style.transform = 'translateX(100%)';
        }

        if (logo1.style.opacity === '1' || logo1.style.opacity === '') {
            logo1.style.opacity = '1';
            logo2.style.opacity = '0';
        } else {
            logo1.style.opacity = '1';
            logo2.style.opacity = '0';
        }
    });
});











