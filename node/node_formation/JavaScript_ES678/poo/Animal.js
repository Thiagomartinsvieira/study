class Animal {
    constructor(name, age, price) {
        this.name = name;
        this.age = age;
        this.price = price;
    }

    checkStock() {
        return 10;
    }

    anyMethod() {
        console.log('This method is part of the mother class!');
    }
}

class Dog extends Animal {
    bark() {
        console.log('ROLF! ROLF!');
    }
}

class Duck extends Animal {
    constructor(name, age, price, duckType, weight) {
        super(name, age, price);
        this.duckType = duckType;
        this.weight = weight;
    }

    checkStock() {
        console.log('In the store, there are 23 ducks.');
    }

    anyMethod() {
        console.log('Here is a duck class!');
        super.anyMethod();
        console.log('Here comes more functionality!');
    }
}

var duck = new Duck('Patolino', 2, 200, 'Mallard', 1.5);

console.log(duck.checkStock());
duck.anyMethod();
console.log(duck.duckType);
console.log(duck.weight);
console.log(duck.age);
