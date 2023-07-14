const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue para a proxima interação 
// Break Sai do Laço

let i = 0;
 do{
    let numero = numeros[i];

    if (numero === 2) {
        console.log("Pulei o numero 2");
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
          console.log("7 encontrado, Saindo....");
          i++;
        break;
    } 

    i++;
} while (i < numeros.length)