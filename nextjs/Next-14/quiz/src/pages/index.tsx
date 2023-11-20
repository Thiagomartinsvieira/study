import Image from 'next/image'
import { Inter } from 'next/font/google'
import Question from '@/components/Question'
import QuestionModel from '@/model/question'
import ResponseModel from '@/model/response'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const questionTest = new QuestionModel(1, 'Best color?', [
    ResponseModel.wrong('green'),
    ResponseModel.wrong('red'),
    ResponseModel.wrong('white'),
    ResponseModel.certain('black'),  
  ])
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Question value={questionTest} />
    </div>
  )
}
