const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e) => {
    const claseMenu = e.target.classList;

    /* Variables Que Selecciones Las Flechas y la pagina */
    const contenedor = document.querySelector('.pagina'),
        flechaIzquierda = document.querySelector('.fa-arrow-left'),
        flechaDerecha = document.querySelector('.fa-arrow-right');

    if (claseMenu.contains('fa-arrow-left')) {
        // Cerrar el menu Lateral
        flechaIzquierda.style.display = 'none';
        flechaDerecha.style.display = 'block';
        contenedor.classList.add('no-menu');

    } else if (claseMenu.contains('fa-arrow-right')) {
        flechaIzquierda.style.display = 'block';
        flechaDerecha.style.display = 'none';
        contenedor.classList.remove('no-menu');
    }
})