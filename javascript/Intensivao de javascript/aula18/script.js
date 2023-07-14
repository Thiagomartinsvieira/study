// Criar um metodo para ler propriedades de um obejeto e 
// Exibir somente as propriedades do tipo de string que estão nesse obejto 

const filme = {
    titulo: "Vingadores",
    ano: 2018,
    diretor: "Caio",
    Personagem: "Thor"
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] === "string")
            console.log(prop, obj[prop])
}