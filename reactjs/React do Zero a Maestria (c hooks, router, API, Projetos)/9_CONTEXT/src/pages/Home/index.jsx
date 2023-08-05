// import { useContext } from "react"
// import CounterContext from "../../context/CounterContext"
import ChangeCounter from "../../components/ChangeCounter"
import useCounterContext from "../../hooks/UseCounterContext/useCounterContext"
import { useTitleColorContext } from "../../hooks/UseTitleColorContext/useTitleColorContext";

const Home = () => {
    // const { counter } = useContext(CounterContext)
    const { counter } = useCounterContext();

    const {color} = useTitleColorContext()

    console.log(color)

    return (
        <div>
            <h1 style={{color: color}}>Home page</h1>
            <p>this is my home</p>
            <p>Value of conter: {counter}</p>
            <ChangeCounter />
        </div>
    )
}

export default Home