const celular = {
    marcaCelular: "ASUS",
    tamanhoTela: {
        Vertical: 155,
        Horizontal: 75
    },
    CapacidadeBateria: 5000,
    ligar : function(){
        console.log('Fazendo ligação...')
    }
}

//JavaScrippt Aula 34 - Factory Functions (Função de fabrica)

function criarCelular(marcaCelular, tamanhoTela, CapacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        CapacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}

const celular1 = criarCelular("Zefone", 5.5, 5000);
console.log(celular1);