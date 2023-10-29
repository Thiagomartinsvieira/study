import CounterDisplay from "@/components/CounterDisplay"
import { useState } from "react"

export default function counter() {

    const [counter, setCounter] = useState(0)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>Counter</h1>
            <CounterDisplay number={counter} />
            <div>
                <button onClick={() => setCounter(counter + 1)} style={{ padding: '2px' }}>+</button>
                <button onClick={() => setCounter(counter - 1)} style={{ padding: '2px' }}>-</button>
            </div>

        </div>
    )
}