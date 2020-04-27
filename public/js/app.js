const containerMain = document.getElementById('app');
const nav = document.getElementById('nav');
const barra = document.getElementById('lateral');
const form = document.getElementById('form');

const ocultarMenu = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('left')) {
        app.classList.toggle('main-container-two');
        form.classList.toggle('new-form');
        barra.classList.toggle('lateral-visible');

        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'block';
        nav.style.display = 'block';

    } else if (e.target.classList.contains('right')) {
        app.classList.toggle('main-container-two');
        form.classList.toggle('new-form');
        barra.classList.toggle('lateral-visible');

        e.target.style.display = 'none';
        e.target.previousElementSibling.style.display = 'block';
        nav.style.display = 'none';
    }
}

document.addEventListener('click', ocultarMenu);