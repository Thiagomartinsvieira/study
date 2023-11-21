import { shuffle } from "@/functions/arrays"
import ResponseModel from "./response"

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: ResponseModel[]
    #gotItRight: boolean

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

    get unanswered() {
        return !this.answered
    }


    get notAnswered(){
        return !this.answered
    }

    get answered(){    
        for(let response of this.#answers) {
            if(response.reveled) return true
        } 
        return false
    }

    respondWith(indice: number): QuestionModel {
        const gotItRight = this.#answers[indice]?.certain
        const answers = this.#answers.map((response, i) => {
            const responseSelected = indice === i 
            const mustReveal = responseSelected || response.certain
            return mustReveal ? response.toReveal() : response
        })

        return new QuestionModel(this.id, this.statement, answers, gotItRight)
    }

    shuffleAnswers(): QuestionModel{
        let shuffleAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#statement, shuffleAnswers, this.#gotItRight)
    }   

    static createUsingObject(obj: QuestionModel):QuestionModel {
        const answers = obj.answers.map((resp => ResponseModel.createUsingObject(resp)))
        return new QuestionModel(obj.id, obj.statement, answers, obj.gotItRight)
    } 

    toObject(){
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(resp => resp.toObject()),
            answered: this.answered,
            gotItRight: this.#gotItRight,
        }
    }

}