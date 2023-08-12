import { useDebugValue, useEffect, useRef } from "react"

export const usePrevius = (value) => {
    const ref = useRef

    useDebugValue('--- CUSTOM HOOK E USEDEBUGVALUE---')
    useDebugValue('O numero abterior é: ' + value)

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}