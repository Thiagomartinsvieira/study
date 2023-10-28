import { useState } from "react"

export default function counter() {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <div>Value: {counter} </div>
            <button onClick={() => setCounter(counter + 1)} style={{padding: '2px'}}>+</button>
            <button onClick={() => setCounter(counter - 1)} style={{padding: '2px'}}>-</button>
        </div>
    )
}