import React from 'react'

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/products')
  const products = await response.json()

  return {
    props: {
      products
    }
  }
}

const static4 = (props) => {
  const renderProducts = () => {
    return props.products.map(product => {
      return (
        <li key={product.id}>
        {product.id}    {product.name} costs R$ {product.price} 
        </li>
      )
    })
  }

  return (
    <div>
      <h1>static #04</h1>
      <ul>
        {renderProducts()}
      </ul>
    </div>
  )
}

export default static4