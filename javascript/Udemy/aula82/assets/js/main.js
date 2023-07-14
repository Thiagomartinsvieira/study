class DispositivoEletronico {
    constructor(nome) {
        this.nome= nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome +' já ligado')
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome +' já Desligado')
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha Voce alterou o metodo ligar.');
    }

    falaoi() {
        console.log('oi');
    }
}

const s1 = new Smartphone('Samsumg', 'Azul', 'Galaxy A50');
console.log(s1);

const t1 = new Tablet('Galaxy Tab A7', true);
t1.ligar();
t1.ligar();
t1.falaoi();