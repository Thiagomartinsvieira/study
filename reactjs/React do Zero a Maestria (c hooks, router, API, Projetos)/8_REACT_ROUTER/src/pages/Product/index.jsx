import { useParams } from 'react-router-dom'
import './Product.css'

const Product = () => {

    const { id } = useParams()

    return <>
        <p>Id do produto: {id} </p>
    </>
}

export default Product