/*
&& -> false && true -> false "O valor mesmo"
|| -> true && false -> Vai retornar "o valor verdadeiro"
FALSY
*false 
0
'' "" `` 
null / undefined
NaN 
*/ 

const a = 0;
const b = null;
const c = 'false'; // Aqui 
const d = false;
const e = NaN;

console.log(a || b || c || d || e);




/*
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/


//console.log(0 || false || null || 'Thiago' || true);


//console.log('Thiago' && NaN && 'Agatha');

//console.log('Thiago Martins' && true && NaN);










/*
function falaoi() {
    return'oi';
}

let vaiExecutar = 'Thiago';

console.log(vaiExecutar && falaoi());
*/
