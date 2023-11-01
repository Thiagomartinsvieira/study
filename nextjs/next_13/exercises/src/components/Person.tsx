import React from 'react'

interface PersonProps {
    name: string
    age: number
}

const Person = (props: PersonProps) => {
  return (
    <div>
        <div>Nome: {props.name}</div>
        <div>Age: {props.age ?? 'not informed'}</div>
    </div>
  )
}

export default Person