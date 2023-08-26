import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>My second component</p>
        <p>Your name is {props.name}</p>
    </div>
  )
}

export default SecondComponent