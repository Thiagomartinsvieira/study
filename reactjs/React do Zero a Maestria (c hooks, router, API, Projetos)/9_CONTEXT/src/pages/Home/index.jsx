import { useContext } from "react"
import CounterContext from "../../context/CounterContext"

const Home = () => {
    const { counter } = useContext(CounterContext)

    return (
        <div>
            <h1>Home page</h1>
            <p>this is my home</p>
        </div>
    )
}

export default Home