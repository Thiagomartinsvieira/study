
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>Car details</h2>
        <ul>
            <li>Brand: {brand}</li>
            <li>Km: {km} </li>
            <li>Color: {color} </li>
        </ul>
    </div>
  )
}

export default CarDetails