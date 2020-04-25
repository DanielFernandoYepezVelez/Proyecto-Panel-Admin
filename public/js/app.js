const barra = document.getElementById('lateral');

const ocultarMenu = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('left')) {
        barra.classList.toggle('lateral-menu');
        console.log('flecha izquierda');
    } else if (e.target.classList.contains('right')) {
        console.log('flecha derecha');
    }
}

document.addEventListener('click', ocultarMenu);