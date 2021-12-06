const menu = document.querySelector('.menu');
const menuLista = document.querySelector('.navbar');
const cerrar = document.querySelector('.cerrar')
const activardor = document.querySelector('.activar')

menu.addEventListener('click', () => {
    menuLista.classList.add('activar');
})

cerrar.addEventListener('click', () =>{
    activardor.classList.remove('activar')
})