// import { useContext } from "react"
// import { CounterContext } from "../../context/CounterContext"

import useCounterContext from "../../hooks/UseCounterContext/useCounterContext"

const About = () => {
    // const {counter} = useContext(CounterContext)
    const { counter } = useCounterContext()

    return (
        <div>
            <h1>About page</h1>
            <p>this is my About</p>
            <p>Value of conter: {counter}</p>
        </div>
    )
}

export default About