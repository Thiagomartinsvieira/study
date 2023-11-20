export default class QuestionModel {
    #id: number
    #statement: string
    #answers: any[]
    #gotItRight: boolean
    // #answered: boolean

    constructor(id: number, statement: string, answers: any[], gotItRight = false) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#gotItRight = gotItRight
    }

    get id() {
        return this.#id
    }
    get statement() {
        return this.#statement
    }
    get answers() {
        return this.#answers
    }
    get gotItRight() {
        return this.#gotItRight
    }

    get answered(){
        // FIXME: implement this method
        return false
    }

}