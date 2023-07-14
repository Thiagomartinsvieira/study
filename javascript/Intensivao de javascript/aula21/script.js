//Criar uma função que exibe a quantidade de *
// Que aquela linha possui
exibirAsteristicos(10);

function exibirAsteristicos(linhas){
    // let padrao = "";
    // for(let linha = 1; linha <= linhas; linha++){
    //     padrao += "*";
    //     console.log(padrao);
    // }
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = "";
        for(let i = 0; i < linha; i++){
             padrao += "*";
        }
        console.log(padrao);
    }
}