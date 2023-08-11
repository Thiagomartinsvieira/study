import { useState } from "react"

const HookUseState = () => {
    let userName = 'Lucas'

    const [name, setName] = useState('Thiago')

    const changeNames = () => {
        userName = 'Lucas Vieira'

        setName('Thiago Martins')


        console.log(userName)
    }

    console.log(name)

    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

    return (
        <div>
            <h2>useState</h2>
            <p>Variable: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar Nomes</button>
            <p>Digite sua idade</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <p>Vice tem {age} anos </p>
            <input type="submit" value='enviar'/>
            </form>
            <hr />
        </div>
    )
}

export default HookUseState