import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

// css
import styles from './App.module.css'

// components
import Header from "./components/Header"
import Footer from "./components/Footer"
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// interfaces
import { ITask } from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  
  return (
   <div>
     <Header />
      <main className={styles.main}>
        <div>
          <h2>what will you do?</h2>
          <TaskForm 
          btnText='Create task'  
          taskList={taskList}
          setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Your tasks:</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
    <Footer />
   </div>
  )
}

export default App
