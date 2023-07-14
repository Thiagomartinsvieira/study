// Criar função para mostrar o snumeros primos 

//Primos 
//Compostos 

// Ex:10,11
//10 (1 ou por ele mesmo)
//10 -> -1, 4, 6, 10
// 11 -> -1,11d
exubirNumerosPrimos(15);

function exubirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        


        if (NumeroPrimo(numero)) console.log(numero);
    } 
}

function NumeroPrimo(numero){
    let ehPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
                return false;                
            }
        }
        return true;
}