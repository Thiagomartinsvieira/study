import { useState } from "react"

export default function mouse() {
    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const setY = arrayY[1]


    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#222',
        color: '#fff',
        height: '100vh'
    }

    function whenMove(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
        <div style={style} onMouseMove={whenMove}>
            <span>X axis: {x}</span>
            <span>Y axis: {y}</span>
        </div>
    )
}