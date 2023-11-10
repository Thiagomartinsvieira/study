import styles from '../styles/Card.module.css'
import React from 'react'

interface CardProps {
  bgcolor: string
  children?: any
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}
    style={{backgroundColor: props.bgcolor ?? '#fff'}}
    >
      {props.children}
    </div>
  )
}

export default Card