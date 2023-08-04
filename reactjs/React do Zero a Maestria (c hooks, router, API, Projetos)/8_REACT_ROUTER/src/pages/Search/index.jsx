import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom"; 
const Search = () => {
    const [searchParams] = useSearchParams();

    const url = 'http://localhost:3000/products?' + searchParams;

    const { data: items, loading, error } = useFetch(url); 

    return (
        <div>
            <h1>Resultados disponíveis</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <ul className="products">
                    {items &&
                        items.map((product) => (
                            <li key={product.id}>
                                <h2>{product.name}</h2>
                                <p>R$: {product.price}</p>
                                <Link to={`/products/${product.id}`}>Detalhes</Link>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
