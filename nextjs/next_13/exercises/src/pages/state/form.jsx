import { useState } from "react"

export default function form() {
    const [value, setValue] = useState('initial value')

    const changedInput = () => {
        setValue(value + '@')
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span>{value}</span>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={changedInput}>Add @</button>
        </div>
    )
}