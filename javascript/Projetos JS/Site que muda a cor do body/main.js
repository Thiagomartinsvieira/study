const botao1 = document.getElementById('red');
const botao2 = document.getElementById('blue');
const botao3 = document.getElementById('yellow');
const botao4 = document.getElementById('green');
const botao5 = document.getElementById('white');
const botao6 = document.getElementById('pink');

// -----------------------------------------------
const texto = document.querySelectorAll('.text');
const botao7 = document.getElementById('red_text');
const botao8 = document.getElementById('blue_text');
const botao9 = document.getElementById('yellow_text');
const botao10 = document.getElementById('green_text');
const botao11 = document.getElementById('white_text');
const botao12 = document.getElementById('pink_text');


function mudarTexto(textColor){
    for(let i = 0; i < texto.length; i++){
        texto[i].style.color = textColor
    }
}


function mudarCorDeFundo(cor) {
    document.body.style.backgroundColor = cor;
}

botao1.addEventListener('click', function(){
    mudarCorDeFundo('red');
});

botao2.addEventListener('click', function(){
    mudarCorDeFundo('blue');
});

botao3.addEventListener('click', function(){
    mudarCorDeFundo('yellow');
});

botao4.addEventListener('click', function(){
    mudarCorDeFundo('green');
});

botao5.addEventListener('click', function(){
    mudarCorDeFundo('white');
});

botao6.addEventListener('click', function(){
    mudarCorDeFundo('pink');
});

botao7.addEventListener('click', function(){
    mudarTexto('red');
});

botao8.addEventListener('click', function() {
    mudarTexto('blue');
});

botao9.addEventListener("click", function(){
    mudarTexto('yellow');
});

botao10.addEventListener('click', function(){
    mudarTexto('green');
});

botao11.addEventListener('click', function(){
    mudarTexto('white');
});

botao12.addEventListener('click', function(){
    mudarTexto('pink');
})