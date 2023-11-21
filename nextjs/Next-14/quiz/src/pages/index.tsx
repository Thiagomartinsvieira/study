import { Inter } from 'next/font/google'
import QuestionModel from '@/model/question'
import ResponseModel from '@/model/response'
import { useState } from 'react'
import Quiz from '@/components/Quiz'

const inter = Inter({ subsets: ['latin'] })

const questionMock = new QuestionModel(1, 'Best color?', [
  ResponseModel.wrong('green'),
  ResponseModel.wrong('red'),
  ResponseModel.wrong('white'),
  ResponseModel.certain('black'),  
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock) 

  const questionAnswered = (question: QuestionModel) => {

  }

  const goToNextQuestion = () => {

  }


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Quiz 
        question={question}
        lastQuestion={false}
        questionAnswered={questionAnswered}
        goToNextQuestion={goToNextQuestion}
      />
      
    </div>
  )
}
