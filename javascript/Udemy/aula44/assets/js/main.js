// try {
//     //É executada quando não há erros 
//     //console.log(a);
//     console.log('abri um arquivo');
//     console.log('Manipulei um arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     } catch {
//         console.log('Deu erro');
//     }   finally {
//         console.log('Tambem sou FINALLY');
//     }
// } catch(e){
//     // É executada quando da erros
//     console.log('Tratando erro');

// } finally {
//     // Sempre

//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if(data &&!(data instanceof Date)){
        throw new TypeError("esperando instancia de Date.");
    }

if(!data){
    data = new Date();
}

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('08-01-2000 12:55:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    //Tratar erro
    console.log(e);
} finally{
    console.log('Tenha um bom dia');
}


