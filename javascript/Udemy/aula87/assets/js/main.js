function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no ERRO');
                return;
            }

          resolve(msg.toUpperCase() + ' - Passei na promise');
          return;
      }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
    return Promise.resolve('Pagina em cache');
    } else {
       return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO:', e));