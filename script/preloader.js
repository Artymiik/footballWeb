let containerPreloader = document.getElementById('container-preloader');
window.addEventListener('load', () => {
  containerPreloader.classList.add('hide');
  setTimeout(() => {
    containerPreloader.remove();
  }, 900);
});