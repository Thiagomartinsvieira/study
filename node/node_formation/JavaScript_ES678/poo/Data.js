// Casino system
// various types of data
// Roll dice

class Dice{
    constructor(faces){
        this.faces = faces
    }

    toRoll(){
        console.log('Dice result: ' + this.GetRandomIntInclusive(1, this.faces))
    }

    GetRandomIntInclusive(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max  - min + 1)) + min
    }
}

var d6 = new Dice(6)
var d12 = new Dice(12)
var d18 = new Dice(18)
var d100 = new Dice(100)

d6.toRoll();
d12.toRoll();
d18.toRoll();
d100.toRoll();