// console.log("Estou aprendendo");
// console.log("Estou aprendendo");
// console.log("Estou aprendendo");
// console.log("Estou aprendendo");
// console.log("Estou aprendendo");

// 1 - For

// for(let i = 5; i >= 1; i--){
//     if(i % 2 !==0){ //modulus
//         console.log(i);
//     }
// }


// 2 - While loop

// let i = 5 

// while(i >= 1){
//     if(i % 2 !==0){ //modulus
//         console.log(i);

// }


// 3 - Do..While

// let i = 0;
// do {
//     console.log('Thiago_Martins',i);
//     i++;
// } while(i < 10)


// 4 - For..In

const pessoa = {
    nome: 'Thiago',
    idade: 23
}; 

// Key-value
for(let chave in pessoa){
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho','Azul','Verde'];

for (let indice in cores){
    console.log(indice, cores[indice]);
}
console.log('------------------');


// 5 For..of

for (let cor of cores){
   console.log(cor); 
}

