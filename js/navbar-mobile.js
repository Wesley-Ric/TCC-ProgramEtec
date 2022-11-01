const btnMobile = document.getElementById('btn'); //declara a constante como sendo o botao
function expandirMenu(event) {
    if (event.type === 'touchstart') event.preventDefault() //para touchs de celulares
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); //da o atributo de ativado para o nav do site
}
btnMobile.addEventListener('click', expandirMenu) // adiciona o evento a função com click
btnMobile.addEventListener('touchstart', expandirMenu) // mesma coisa da de cima para celular



//-=-=-=-=-=-=-faz a mesma coisa que o de cima so que com o ling para aticar o submenu
const ativarMenu = document.getElementById('ling')

function expandirSubmenu() {
    const submenu = document.getElementById('ling')
    submenu.classList.toggle('active')
}
ativarMenu.addEventListener('click', expandirSubmenu)