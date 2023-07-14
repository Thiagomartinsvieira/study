function relogio(){
    function getTimeFromSeconds(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false, 
            timeZone: 'UTC'
        });
    }
    
    console.log(getTimeFromSeconds(10));
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    
    document.addEventListener('click', function(e){
        const elemento = e.target;
        
        if(elemento.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
            relogio.classList.remove('iniciando');
        }
    
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.add('iniciando');
        }
    
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
        relogio.classList.add('pausado');
        relogio.classList.remove('iniciando');
        }
    
    });
}

relogio();
