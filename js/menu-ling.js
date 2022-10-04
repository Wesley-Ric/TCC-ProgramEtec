const btnmen = document.getElementById('botaozinho'); //declara a constante como sendo o botao
function menuExp(event){
    if(event.type === 'touchstart') event.preventDefault() //para touchs de celulares
    const menuzin = document.getElementById('navgation');
    menuzin.classList.toggle('active'); //da o atributo de ativado para o nav do site
}
btnmen.addEventListener('click', menuExp) // adiciona o evento a função com click
btnmen.addEventListener('touchstart', menuExp) // mesma coisa da de cima para celular


const btn2 = document.getElementById('btn2'); //declara a constante como sendo o botao
function menuEx(event){
    if(event.type === 'touchstart') event.preventDefault() //para touchs de celulares
    const menu2 = document.getElementById('navgation');
    menu2.classList.toggle('active'); //da o atributo de ativado para o nav do site
}
btn2.addEventListener('click', menuEx) // adiciona o evento a função com click
btn2.addEventListener('touchstart', menuEx) // mesma coisa da de cima para celular