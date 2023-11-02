import React, { useState } from 'react'

const form = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])
    const [age, setAge] = useState(0)

    const  saveUser = async () => {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({
                name, age
            })
        })

        setName('')
        setAge(0)

        const resp = await fetch('/api/form')
        const users = await resp.json()
        setUsers(users)
    }

    const renderUsers = () => {
        return users.map((user, i) => {
            return <li key={user.i}>{user.name} have {user.age} Years</li>
        })
    }

    return (
        <div>
            <h1>Integrating with API #02</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" value={age} onChange={e => setAge(+e.target.value)} />
            <button onClick={saveUser}>Submit</button>
            
            <ul> 
                {renderUsers()}
            </ul>
        </div>
    )
}

export default form