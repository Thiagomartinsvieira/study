function teste() {
    console.log(this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
//  Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }
//  Metodo estatico
    static soma(x, y) {
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();
