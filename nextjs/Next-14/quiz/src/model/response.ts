export default class ResponseModel {
    #value: string
    #certain: boolean
    #reveled: boolean

    constructor(value: string, certain: boolean, reveled = false) {
        this.#value = value
        this.#certain = certain
        this.#reveled = reveled
    }

    get value() {
        return this.#value
    }
    get certain() {
        return this.#certain
    }
    get reveled() {
        return this.#reveled
    }

}