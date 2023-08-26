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
  
  return (
   <div>
     <Header />
      <main className={styles.main}>
        <div>
          <h2>what will you do?</h2>
          <TaskForm btnText='Create task' />
        </div>
        <div>
          <h2>Your tasks:</h2>
          <TaskList />
        </div>
      </main>
    <Footer />
   </div>
  )
}

export default App
