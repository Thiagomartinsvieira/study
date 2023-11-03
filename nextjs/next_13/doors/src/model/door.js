export default class Door {
    #number
    #haveGift
    #selected
    #open

    constructor(number, haveGift = false, open = false, selected = false) {
        this.#number = number;
        this.#haveGift = haveGift;
        this.#selected = selected;
        this.#open = open;
    }

    get number() {
        return this.#number;
    }

    get haveGift() {
        return this.#haveGift;
    }

    get selected() {
        return this.#selected;
    }

    get open() {
        return this.#open;
    }

    markOff() {
        const selected = false
        return new Door(this.number, this.haveGift, this.selected, this.open)
    }

    toogleSelection() {
        const selected = !this.#selected 
        return new Door(this.number, this.haveGift, this.selected, this.open)
    }

    open() {
        const open = true
        return new Door(this.number, this.haveGift, this.selected, open)
    }
}
