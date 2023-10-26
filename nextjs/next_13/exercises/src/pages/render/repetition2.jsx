import productsList from '../../data/productsList'

export default function repetition2() {

    const renderLines = () => {
        return productsList.map(product => {
            return (
                <tr key={product.id}>
                    <td style={withBorder}>{product.id}</td>
                    <td style={withBorder}>{product.name}</td>
                    <td style={withBorder}>{product.price}</td>
                </tr>
            )
        })
    }

    const withBorder = {
        border: '1px solid #000',
    }

    return (
        <div>
            <table style={withBorder}>
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {renderLines()}
                </tbody>
            </table>
        </div>
    )
}