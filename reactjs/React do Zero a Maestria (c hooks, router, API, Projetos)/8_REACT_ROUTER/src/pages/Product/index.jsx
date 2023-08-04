import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Product.css'

const Product = () => {

    const { id } = useParams()

    const url = 'http://localhost:3000/products' + id

    const { data: product, loading, error } = useFetch(url)

    console.log(product)

    return
    <>
        <p>Id do produto: {id} </p>
        {error && <P>Ocorreu um erro...</P>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R$: {product.price}</p>
            </div>
        )}
    </>
}

export default Product