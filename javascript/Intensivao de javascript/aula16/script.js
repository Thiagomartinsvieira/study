//Velocidade maxima de até 70 km
// A cada 5 km acima do limite voce ganha 1 ponto
// Math.floor()
// Casi pontos maior que 12 -> 'Carteira supendida'

verificarVelociade(130);

function verificarVelociade(velocidade){
    const velocidadeMaxima = 70
    const KmPorPonto = 5;
    const perdaCarteira = 12;
    if(velocidade <= velocidadeMaxima) 
        console.log('Dentro do limite');
    else{
       const pontos = Math.floor(((velocidade - velocidadeMaxima)/ KmPorPonto));
    if (pontos >= perdaCarteira)
        console.log('Carteira suspensa');
    else 
        console.log('pontos', pontos);
    }
}