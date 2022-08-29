let cont = 1; //seta o contador do tipo let como 1
document.getElementById("radio1").checked = true; //o radio esta checado
setInterval(function(){
    proximaImagem();
}, 3500) //intervalo de 3500 milisegundos

function proximaImagem(){
    cont++; //soma 1 ao contador
    if(cont>5){
        cont=1; //se o contador for maior que 5 reseta pra 1
                //isso faz com que a imagem volte para primeira
    }
    document.getElementById("radio"+cont).checked = true; //deixa checado de acordo com o número do contador
}