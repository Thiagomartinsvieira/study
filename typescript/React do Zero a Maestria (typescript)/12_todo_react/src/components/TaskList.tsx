import React from 'react'


// interfaces
import { ITask } from '../interfaces/Task'

// CSS
import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id} className={styles.task}>
         <div className={styles.details}>
          <h4> {task.title} </h4>
          <p>Difficult: {task.difficult}</p>
         </div>
         <div className={styles.actions}>
            <i className='bi bi-pencil'></i>
            <i className='bi bi-trash'></i>
         </div>
        </div>
      ))
    ) : (
      <p>Is not have registred tasks</p>
    )}
    </>
  )
}

export default TaskList