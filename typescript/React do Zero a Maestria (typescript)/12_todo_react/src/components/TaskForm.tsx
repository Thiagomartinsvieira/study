import { ITask } from '../interfaces/Task'
import styles from './TaskForm.module.css'
import React, { ChangeEvent, FormEvent, useState } from 'react'

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const  [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficult, setDifficult] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = {id, title, difficult}

    setTaskList!([...taskList, newTask])

    setTitle('')
    setDifficult(0)

    console.log(taskList)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    } else {
      setDifficult(parseInt(e.target.value))
    }
    
  }

  return <form onSubmit={addTaskHandler} className={styles.form}>
    <div className={styles.input_container}>
      <label htmlFor='title'>Title: </label>
      <input type="text" name='title' placeholder='task title' onChange={handleChange} value={title} />
    </div>
    <div className={styles.input_container}>
      <label htmlFor='difficult'>Difficult: </label>
      <input type="number" name='difficult' placeholder='task difficult' onChange={handleChange} value={difficult} />
    </div>
    <input type="submit" value={btnText} />
  </form>
}

export default TaskForm