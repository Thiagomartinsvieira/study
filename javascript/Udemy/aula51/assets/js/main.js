const nome ='Thiago';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Lucas';
    falaNome();
}

usaFalaNome();