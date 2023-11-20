import React from 'react'

export function getStaticProps(){
    return {
      props: {
        number: Math.random()
      }
    }
}

const static2 = (props) => {
  return (
    <div>
        <h1>static #02</h1>
        <h2>{props.number}</h2>
    </div>
  )
}

export default static2