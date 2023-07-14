let permissao; // comum, gerente, diretor 
permissao = 'gerente';

switch(permissao) {
    case 'comum':
    console.log('Usuario comum');
    break;

    case 'gerente':
    console.log('Usuario gerente');
    break;

    case 'diretor':
    console.log('Usuario diretor');
    break;

    default:
    console.log('Usuario não reconhecido!');
}