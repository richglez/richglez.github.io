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




//Luego, utiliza JavaScript para detectar el evento de desplazamiento y agregar o quitar la clase .active a los elementos .valor en función del desplazamiento:
document.addEventListener('DOMContentLoaded', function() {
    const valores = document.querySelectorAll('.acerca .valores-wrapper .valor');

    window.addEventListener('scroll', function() {
        valores.forEach(function(valor) {
            const rect = valor.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                valor.classList.add('active');
            } else {
                valor.classList.remove('active');
            }
        });
    });
});




// Agregar un event listener para el evento "scroll"
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Animar elementos cuando se carga la página

// Llama a la función para animar elementos al cargar la página
animateOnScroll();

console.log("Hola");