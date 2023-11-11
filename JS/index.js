function changeBackground() {
  var backgroundImg = document.getElementById('background-image');
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (windowWidth < 600) {
    backgroundImg.src = "IMG/sfondo2.jpg";
  } else {
    backgroundImg.src = "IMG/sfondo.png";
  }
}

changeBackground();
window.addEventListener('resize', changeBackground);