import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import useFetch from './hooks/useFetch'

function App() {
  const [products, setProducts] = useState([])

  // 4 - custom 
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const url = 'http://localhost:3000/products'

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  // 2 - add products
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(product),
    // })


    // // 3 - carregamento dinamico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // 5 - refatorando post

    httpConfig(product, "POST")

    setName('')
    setPrice('')

  };


  return (
    <div className="App">
      <h1>List of products</h1>
      {/* 6 - Loading */}
      {loading && <P>Carregando dados...</P>}
      {error && <P>{error}</P>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text"
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input type="number"
              value={price}
              name='price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" disabled value='aguarde...' />}
          {!loading && <input type="submit" value='create' />}
        </form>
      </div>
    </div>
  )
}

export default App
