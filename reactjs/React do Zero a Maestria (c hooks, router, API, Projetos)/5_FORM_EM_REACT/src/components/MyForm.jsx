import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
  // 6 - controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState(user ? user.bio : '')

  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  //   console.log(name)
  //   console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Enviando o formulario')
    console.log(name, email, bio, role)

    // 7 - limpar formulario
    setName('')
    setEmail('')
  }

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - criacao de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""></label>
          <input
            type="text"
            name="text"
            placeholder="Insert your name"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label involving input */}
        <label>
          <span>E-mail</span>
          {/* 4 - somplificação de manipulacao de state */}
          <input
            type="email"
            name="email"
            placeholder="Insert your email addres"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - text area */}
        <label>
          <textarea
            name="bio"
            placeholder="you description"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          Função no sistema
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Criar usuário" />
      </form>
    </div>
  )
}

export default MyForm
