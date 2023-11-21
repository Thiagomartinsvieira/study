import { Inter } from 'next/font/google'
import Question from '@/components/Question'
import QuestionModel from '@/model/question'
import ResponseModel from '@/model/response'
import { useState } from 'react'
import Button from '@/components/Button'

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
    setQuestion(question.respondWith(indice))
  } 

  const  timeIsOver =  () => {
   if(question.notAnswered) {
     setQuestion(question.respondWith(-1))
   }
  } 


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Question value={question} 
      timeToResponse={5}
        responseProvided={responseProvided}
        timeIsOver={timeIsOver}/>
        <Button text='Next Question' href='/result'/>
    </div>
  )
}
