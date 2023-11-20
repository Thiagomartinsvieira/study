import React from 'react'

export function getStaticProps(){
    return {
      revalidate: 7,
      props: {
        number: Math.random()
      }
    }
}

const static3 = (props) => {
  return (
    <div>
        <h1>static #03</h1>
        <h2>{props.number}</h2>
    </div>
  )
}

export default static2