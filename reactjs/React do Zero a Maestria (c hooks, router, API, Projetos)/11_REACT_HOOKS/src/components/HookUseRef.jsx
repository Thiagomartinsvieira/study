import { useEffect, useRef, useState } from "react"

const HookUseRef = () => {
  const numberRef = useRef()
  const [counter, setCounter] = useState(0)
  const [counterB, setCounterB] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
   
  })

  return (
    <div>
        <h2>useRef</h2>
        <p>O component renderizou: {numberRef.current} vezes. </p>
        <p>counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Counter A</button>
        <p>counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Counter B</button>
        <hr />
    </div>
  )
}

export default HookUseRef