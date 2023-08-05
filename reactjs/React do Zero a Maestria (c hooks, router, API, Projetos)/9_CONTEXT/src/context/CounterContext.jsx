import { createContext, useState } from "react"


const CounterContext = () => {
  return (
    <div>CounterContext</div>
  )
}

export const CounterContext = createContext();

export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.provider value={{counter, setCounter}}>
            {children}
        </CounterContext.provider>
    )
}