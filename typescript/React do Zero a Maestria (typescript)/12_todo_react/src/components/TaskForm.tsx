import styles from './TaskForm.module.css'
import React, { ChangeEvent, useState } from 'react'

type Props = {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {

  const  [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficult, setDifficult] = useState<number>(0)

  const addTaskHandler = () => {

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    } else {
      setDifficult(parseInt(e.target.value))
    }
    console.log(title)
    console.log(difficult)
  }

  return <form onSubmit={addTaskHandler} className={styles.form}>
    <div className={styles.input_container}>
      <label htmlFor='title'>Title: </label>
      <input type="text" name='title' placeholder='task title' onChange={handleChange} />
    </div>
    <div className={styles.input_container}>
      <label htmlFor='difficult'>Difficult: </label>
      <input type="number" name='difficult' placeholder='task difficult' onChange={handleChange} />
    </div>
    <input type="submit" value={btnText} />
  </form>
}

export default TaskForm