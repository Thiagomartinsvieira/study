import ResponseModel from "./response"

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: ResponseModel[]
    #gotItRight: boolean
    // #answered: boolean

    constructor(id: number, statement: string, answers: ResponseModel[], gotItRight = false) {
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
        for(let response of this.#answers) {
            if(response.reveled) return true
        } 
        return false
    }

    toObject(){
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(resp => resp.toObject()),
            gotItRight: this.#gotItRight,
        }
    }

}