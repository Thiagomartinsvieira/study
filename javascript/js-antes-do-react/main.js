import {soma} from './lib/sum';

console.log(soma(1, 2))






//Objetos 
/* 

//Desestruturação 

function mostraIdade({age, ...rest}) {
    return age;
}
 */
//Rest Operator

//const {name, idade, ...rest} = user;

// const array= [1,2,3,4,5,6,7,8,9,];

// const [first, , third, ...rest] = array;

// Short Syntax

// const name ='Thiago';
// const age = 23;

// const user = {
//     name,
//     age,
// };

// Optional Chaining

/* const user = {
    name: 'Thiago',
    nickname: 'Lucas',
    age: 23,
    address: {
        street: 'Rua qualquer',
        Number: 0,
        zip: {
            code: '0082389487',
            city: 'São Paulo'
        },
        showFullAddress() {
            return 'OK';
        }
    },
}; */
//             0  1  2  3  4  5  6
// const array = [1, 4, 2, 3, 4, 5, 6];

// // for (const i of array){
// //     document.body.innerText+=i;
// // }


// const novoArray = array.map(item => {
//     if(item % 2 === 0) {
//         return item * 10;
//     }

//     return item;
// })

// Array.map(item => {

// })

// map, filter , every, some , find, findIndex, reduce

// const novoArray = array
// .filter(item => item % 2 === 0)
// .map(item => item * 10)

// const todosItensSaoNumeros = array.every(item => {
//     return typeof item === 'number';
// });

// const peloMenosUmItemNaoEumNumero = array.some(item => {
//     return typeof item === 'number';
// })

// const par = array.findIndex(item => item % 2 === 0)

// const soma = array.reduce((acumulator, item) => {


//     return acumulator + item
// }, 0)

// document.body.innerText = JSON.stringify(soma)

// Template literal

// Promises 

//.then/.cacth

// fetch('https://github.com/Thiagomartinsvieira')
// .then(Response =>{
//     return Response.json();
// })
// .then(body =>{
//     console.log(body)
// })
// // .then(Response => {
// //     Response.json().then(body => {
// //         console.log(body)
// //     })
// // })
// .catch(err => {
//     console.log(err)
// })
// .finally(() =>{
//    console.log('DEV') 
// })

/* async function BuscaDAdosGitHub(){
    try{
    const response = await fetch('https://github.com/Thiagomartinsvieira');
    const body = await response.json();

    return body.name;

    } catch (err) {
        cpnsole.log(err)
    } finally{
        console.log('DEV');
    }

}

const name = BuscaDAdosGitHub().then(name => {
    console.log(nome)
});

 */