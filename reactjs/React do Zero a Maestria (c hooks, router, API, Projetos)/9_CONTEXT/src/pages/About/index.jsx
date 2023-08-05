import { useContext } from "react"
import { CounterContext } from "../../context/CounterContext"

const About = () => {
    const {counter} = useContext(CounterContext)

    return (
        <div>
            <h1>About page</h1>
            <p>this is my About</p>
            <p>Value of conter: {counter}</p>
        </div>
    )
}

export default About