export default class Product {
    #id
    #name
    #price

    constructor(id, name,  price) {
        this.#id = id
        this.#name = name
        this.#price = price
    }

    get price() {
        return this.#price
    }

    get name() {
        return this.#name
    }

    get id() {
        return this.#id
    }
}