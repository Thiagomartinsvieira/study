import { useContext } from "react"
import CounterContext from "../../context/CounterContext"
import ChangeCounter from "../../components/ChangeCounter"

const Home = () => {
    const { counter } = useContext(CounterContext)

    return (
        <div>
            <h1>Home page</h1>
            <p>this is my home</p>
            <p>Value of conter: {counter}</p>
            <ChangeCounter />
        </div>
    )
}

export default Home