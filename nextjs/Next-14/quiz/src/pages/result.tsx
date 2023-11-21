import Statistic from '@/components/Statistic'
import style from '../styles/Result.module.css'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '@/components/Button'

const Result = () => {
  const router = useRouter()

  const total = +router.query.total
  const certain = +router.query.certain
  const percentage = Math.round((certain / total)) * 100

  return (
    <div className={style.result}>
        <h1>Final Result</h1>
        <div style={{display: 'flex'}}>
          <Statistic text='Questions' value={total} />
          <Statistic text='Certains' value={certain} 
            backgroundColor='#9cd2a4' />
          <Statistic text='Percentage' value={`${percentage}%`}
            backgroundColor='#de6a33' />
        </div>
        <Button href='/' text='Try Again' />
    </div>
  )
}

export default Result