import { useContext } from "react"
import { CounterContext } from "../../context/CounterContext"

const Contact = () => {
    const { counter } = useContext(CounterContext)

    return (
        <div>
            <h1>Contact page</h1>
            <p>this is my Contact</p>
            <p>Value of conter: {counter}</p>
        </div>
    )
}

export default Contact