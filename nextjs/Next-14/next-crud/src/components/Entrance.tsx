import React from 'react'

interface EntranceProps {
  type: 'text' | 'number'
  text: string
  value: any
  onlyReading?: boolean
  className: string
  Onchange?: (value: any) => void
}

const Entrance = (props: EntranceProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.onlyReading}
        onChange={(e) => props.Onchange?.(e.target.value)}
        className={`
            border border-purple-500 rounded-lg
            focus:outline-none bg-gray-100
            px-4 py-2 ${props.onlyReading ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}

export default Entrance
