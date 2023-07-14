// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave 
        value: estoque,   // Valor
        writable: true,  //Pode alterar o Valor 
        configurable: true // configuravel
    });
    
}

const p1 = new Produto('camiseta', 20, 5);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}