// if...Else

// Se a Hora estiver entre as 06:00 ate 12:00 - Bom dia 

// Se a Hora estiver entre as 12:00 ate 18:00 - Boa Tarde

// caso contrario - Boa Noite

var hora = 13


if (hora > 6 && hora < 12){
    console.log('Bom dia');
}
else if(hora > 12 && hora < 18){
    console.log('Boa tarde');
} else {
    console.log('Boa Noite');
}



