const target = document.querySelectorAll('[data-anime]');
const classeAnime = 'animate';


function animeScroll (){
    const topJanela = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if ((topJanela) > element.offsetTop) {
            element.classList.add(classeAnime);
        }
        console.log(element.offsetTop);
    })
}

window.addEventListener('scroll', function(){
    animeScroll();
})