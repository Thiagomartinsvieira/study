const celular = {
    marcaCelular: "SAMSUNG",
    tamanhoTela: {
        Vertical: 155,
        Horizontal:75
    },
    ligar: function(){
        console.log("Fazendo Ligações...");
    }
}

const novoObejto = Object.assign({
    bateria: 5000
},celular);

console.log(novoObejto);

const Objeto2 = {...celular};
comnsole.log(Objeto2);