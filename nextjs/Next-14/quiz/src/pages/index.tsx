import { Inter } from 'next/font/google'
import QuestionModel from '@/model/question'
import { useEffect, useState } from 'react'
import Quiz from '@/components/Quiz'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [questionIds, setQuestionIds] = useState([])
  const [question, setQuestion] = useState<QuestionModel>() 
  const [rightAnswers, setRightAnswers] = useState<number>(0) 

  async function loadingQuestionsId() {
      const resp = await fetch(`${BASE_URL}/quiz`)
      const questionIds = await resp.json()
      setQuestionIds(questionIds)
  }

  async function loadingQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
}

  useEffect(() => {
    loadingQuestionsId()
  }, [])

  useEffect(() => {
    questionIds.length > 0 && loadingQuestion(questionIds[0])
  }, [questionIds])

  const questionAnswered = (questionAnswered: QuestionModel) => {
    setQuestion(questionAnswered)
    const gotItRight = questionAnswered.gotItRight
    setRightAnswers (rightAnswers + (gotItRight ? 1 : 0))
    console.log(rightAnswers + (gotItRight ? 1 : 0))
  }

  const idNextQuestion = () => {
    if(question) {
      const nextIndice = questionIds.indexOf(question.id) + 1
      return questionIds[nextIndice]
    }
  }

  const idNextStep = () => {
    const nextId = idNextQuestion()
    nextId ? goToNextQuestion(nextId): finish()
  }

  const goToNextQuestion = (nextId: number) => {
    loadingQuestion(nextId)
  }

  const finish = () => {
    router.push({
      pathname: '/result',
      query: {
        total: questionIds.length,
        certain: rightAnswers
      }
    })
  }


  return (
    
      <Quiz 
        question={question}
        lastQuestion={idNextQuestion() === undefined}
        questionAnswered={questionAnswered}
        goToNextQuestion={goToNextQuestion}
      />
      
  )
}
