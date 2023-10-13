// Función para verificar si un elemento está en el viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Función para animar elementos al hacer scroll
function animateOnScroll() {
  var elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Agregar un event listener para el evento "scroll"
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Animar elementos cuando se carga la página

// Llama a la función para animar elementos al cargar la página
animateOnScroll();

console.log("Hola");