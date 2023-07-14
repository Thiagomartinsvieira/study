// defineProperty -> Getter e Setters


function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque; 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave 
        configurable: true, // configuravel
        get: function(){
            return estoquePrivado;
            },
          
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem error');
            }

            estoquePrivado = valor;
        }
    });
    
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

// const p1 = new Produto('camiseta', 20, 5);
// //console.log(p1);
// p1.estoque = "ola amigos";
// console.log(p1.estoque);

const p2 = criaProduto('camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome);