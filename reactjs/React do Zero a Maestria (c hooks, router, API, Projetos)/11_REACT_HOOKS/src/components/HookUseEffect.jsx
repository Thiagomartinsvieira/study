import { useEffect, useState } from "react"


const HookUseEffect = () => {
    useEffect(() => {
        console.log('Estou sendo Executado')
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    useEffect(() =>{
        console.log('serei executado apenas uma vez!')
    })

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <hr />
        </div>
    )
}

export default HookUseEffect