window.addEventListener("DOMContentLoaded", (event) => {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const showOverlayButton = document.getElementById('showOverlay');
const overlay = document.getElementById('overlay');
const closeOverlayButton = document.getElementById('closeOverlay');

showOverlayButton.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

closeOverlayButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

})