export default class ResponseModel {
    #value: string
    #certain: boolean
    #reveled: boolean

    constructor(value: string, certain: boolean, reveled = false) {
        this.#value = value
        this.#certain = certain
        this.#reveled = reveled
    }

    static certain(value: string) {
        return new ResponseModel(value, true)
    }

    static wrong(value: string) {
        return new ResponseModel(value, false)
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

    toReveal(){
        return new ResponseModel(this.#value, this.#certain, true)
    }

    toObject() {
        return {
            value: this.#value,
            certain: this.#certain,
            reveled: this.#reveled,
        }
    }

}