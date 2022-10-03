const btnMobile = document.getElementById('botaozinho'); //declara a constante como sendo o botao
function expandirMenu(event){
    if(event.type === 'touchstart') event.preventDefault() //para touchs de celulares
    const menu = document.getElementById('navgation');
    menu.classList.toggle('active'); //da o atributo de ativado para o nav do site
}
btnMobile.addEventListener('click', expandirMenu) // adiciona o evento a função com click
btnMobile.addEventListener('touchstart', expandirMenu) // mesma coisa da de cima para celular
