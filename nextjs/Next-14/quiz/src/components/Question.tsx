import QuestionModel from "@/model/question"
import styles from '../styles/Question.module.css'
import Statement from "./Statement"

interface QuestionProps {
    value: QuestionModel
}

const Question = (props: QuestionProps) => {
    const question = props.value
  return (
    <div className={styles.question}>
        <Statement text={question.statement} />
    </div>
  )
}

export default Question