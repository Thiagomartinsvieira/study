import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  console.log(name)
  console.log(email)

  return (
    <div>
      {/* 1 - criacao de form */}
      <form>
        <div>
          <label htmlFor=""></label>
          <input
            type="text"
            name="text"
            placeholder="Insert your name"
            onChange={handleName}
          />
        </div>
        {/* 2 - Label involving input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Insert your email addres"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}

export default MyForm
