import QuestionModel from "@/model/question"
import styles from '../styles/Question.module.css'
import Statement from "./Statement"
import Response from "./Response"

const letters = [
    {value: 'A', color: '#f2c866'},
    {value: 'B', color: '#f266ba'},
    {value: 'C', color: '#85d4f2'},
    {value: 'D', color: '#bce596'},
]

interface QuestionProps {
    value: QuestionModel
    responseProvided: (indice: number) => void
}

const Question = (props: QuestionProps) => {
    const question = props.value

    const renderAnswers = () => {
        return question.answers.map((response, i) => {
            return (
                <Response 
                key={i}
                value={response}
                indice={i}
                letter={letters[i].value}
                colorBackgroundLetter={letters[i].color}
                responseProvided={props.responseProvided} 
            />
            )
        })
    }

  return (
    <div className={styles.question}>
        <Statement text={question.statement} />
        {renderAnswers()}
    </div>
  )
}

export default Question