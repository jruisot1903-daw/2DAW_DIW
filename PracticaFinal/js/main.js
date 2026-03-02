// Hacer que el carrusel se mueva de forma infinita cada 3s
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: { 
        el: ".swiper-pagination",
        clickable:  true, // hacemos que la paginación (lo que sale debajo de las fotos) le podamos hacer click
    },
    navigation: { // Para la navegación que podamos pasar las fotos con las flechas
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

