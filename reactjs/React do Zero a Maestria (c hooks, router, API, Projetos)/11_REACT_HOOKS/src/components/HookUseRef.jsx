import { useEffect, useRef, useState } from "react"

const HookUseRef = () => {
  const numberRef = useRef()
  const [counter, setCounter] = useState(0)
  const [counterB, setCounterB] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  })

  const inputRef = useRef()
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setText('')

    inputRef.current.focus()
  } 

  return (
    <div>
      <h2>useRef</h2>

      <p>O component renderizou: {numberRef.current} vezes. </p>
      <p>counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter A</button>
      <p>counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Counter B</button>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  )
}

export default HookUseRef