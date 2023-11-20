import { Inter } from 'next/font/google'
import Question from '@/components/Question'
import QuestionModel from '@/model/question'
import ResponseModel from '@/model/response'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const questionMock = new QuestionModel(1, 'Best color?', [
  ResponseModel.wrong('green'),
  ResponseModel.wrong('red'),
  ResponseModel.wrong('white'),
  ResponseModel.certain('black'),  
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  const  responseProvided =  (indice: number) => {
    console.log(indice)
    setQuestion(question.respondWith(indice))
  } 


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Question value={question} 
        responseProvided={responseProvided} />
    </div>
  )
}
