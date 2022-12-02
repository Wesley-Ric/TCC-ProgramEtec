const target = document.querySelectorAll('[data-anime]'); //seleciona todos que estão com data-anime
const classeAnime = 'animate'; //da o valor de animate para classAnime


function animeScroll() {
    const topJanela = window.pageYOffset + ((window.innerHeight * 3) / 4); //seta onde a animação vai começar
    target.forEach(function (element) {
        if ((topJanela) > element.offsetTop) {
            element.classList.add(classeAnime); //se o elemento estiver no topo da janela ele da o status de animate pata elemento
        }
    })
}

window.addEventListener('scroll', function () {
    animeScroll();
}) //chama o evento de scroll para função