import { useEffect, useState } from "react"


const HookUseEffect = () => {
    useEffect(() => {
        console.log('Estou sendo Executado')
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    useEffect(() => {
        console.log('serei executado apenas uma vez!')
    })

    const [anotherNumer, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anotherNumer > 0) {
            console.log("Sou executado apenas quando o another number muda")
        }
    }, [anotherNumer])

    useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('helo word')
    //     }, 2000)

    //     setAnotherNumber(anotherNumer + 1)
    //    return () => clearTimeout(timer)
    }, [anotherNumer])

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number! {anotherNumer}</p>
            <button onClick={() => setAnotherNumber(anotherNumer + 1)}>mudar another number</button>
            <hr />
        </div>
    )
}

export default HookUseEffect