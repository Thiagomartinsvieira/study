let tempo = 0;
let intervalo;

const botaoIniciar = document.getElementById('iniciar');
const botaoPausar = document.getElementById('pausar');
const botaoZerar = document.getElementById('zerar');

function formatarTempo(tempo){
    let horas = Math.floor(tempo/ 3600000);
    let minutos = Math.floor((tempo % 3600000) / 60000);
    let segundos = Math.floor((tempo % 60000) / 1000);

    return (
        (horas < 10 ? '0' + horas : horas) + ':' +
        (minutos < 10 ? '0' + minutos : minutos) + ':' +
        (segundos < 10 ? '0' + segundos : segundos)
    );
}

function atualizarCronometro(){
    tempo += 10;
    document.getElementById('cronometro').innerHTML = formatarTempo(tempo);
}

botaoIniciar.addEventListener('click', function() {
    intervalo = setInterval(atualizarCronometro, 10);
});

botaoPausar.addEventListener('click', function() {
    clearInterval(intervalo);
});

botaoZerar.addEventListener('click', function() {
    clearInterval(intervalo);
    tempo = 0;
    document.getElementById('cronometro').innerHTML = "00:00:00"
});