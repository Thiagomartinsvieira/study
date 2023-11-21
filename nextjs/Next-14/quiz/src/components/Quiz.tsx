import styles from '../styles/Quiz.module.css'
import QuestionModel from "@/model/question"
import Question from './Question'
import Button from './Button'

interface QuizProps {
    question: QuestionModel
    lastQuestion: boolean
    questionAnswered: (question: QuestionModel) => void
    goToNextQuestion: () => void
}

const Quiz = (props: QuizProps) => {

    const responseProvided = (indice: number) => {
        if(props.question.notAnswered) {
            props.questionAnswered(props.question.respondWith(indice))
        }
    }

  return (
    <div className={styles.quiz}>
        {props.question ? 
        <Question 
        value={props.question}
        timeToResponse={6}
        responseProvided={responseProvided}
        timeIsOver={props.goToNextQuestion}/>
        
        : false
    }
        
            <Button onclick={props.goToNextQuestion}
                text={props.lastQuestion ? 'Finish' : 'Next'} />
    </div>
  )
}

export default Quiz