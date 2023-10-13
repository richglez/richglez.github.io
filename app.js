window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    const h1 = document.querySelector("h1");

    // Oculta el elemento de carga
    loader.style.display = "none";

    // Muestra el título con una transición
    h1.style.opacity = 1;
});