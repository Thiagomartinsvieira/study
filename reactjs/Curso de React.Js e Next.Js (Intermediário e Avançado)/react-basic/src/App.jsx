import { useState } from 'react'
import './App.css'

function App() {
  const peoples = [
    { id: 1, name: 'Thiago', age: 23, job: 'Developer' },
    { id: 2, name: 'Lucas', age: 19, job: 'Dev' },
    { id: 3, name: 'Sisleide', age: 59, job: 'Teacher' },
  ]

  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1 onClick={() => setCount(count + 1)}>Click here</h1>
      {count}
      <h2>Lis of People</h2>
      <ul>
        {peoples.map((people) => {
          return (
            <li key={people.id}>
              <p>Name: {people.name}</p>
              <p>Age: {people.age}</p>
            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default App
