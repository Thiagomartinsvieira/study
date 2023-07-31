const CarDetails = ({ brand, KM, name }) => {
    return (
        <div>
            <h1>Cars</h1>
            <p>name: {name}</p>
            <p>Brand: {brand}</p>
            <p>Km: {KM}</p>
        </div>
    )
}

export default CarDetails