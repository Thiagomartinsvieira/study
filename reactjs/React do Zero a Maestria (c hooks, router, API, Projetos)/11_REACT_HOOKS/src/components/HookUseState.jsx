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

  return (
    <div>
        <h2>useState</h2>
        <p>Variable: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
        <hr />
    </div>
  )
}

export default HookUseState