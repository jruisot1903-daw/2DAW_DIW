// ---------------- Header ---------------- 
const bt = document.querySelector('.ediciones');
const lista = document.querySelector('.lista-desple');
const menu = document.querySelector('.menu-icono');

bt.addEventListener('click', () => {
    bt.classList.toggle('activo');
    lista.classList.toggle('activo');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('activo');
});

// ---------------- Panel Lateral ----------------

