import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    { id: 1, name: 'Saveiro', KM: 190, brand: 'VW' },
    { id: 2, name: 'Fusca', KM: 2300, brand: 'VW' },
    { id: 3, name: 'Kombi', KM: 170, brand: 'VW' },
    { id: 4, name: 'Mobi', KM: 17000, brand: 'Fiat' },
    { id: 5, name: 'Kadet', KM: 17000, brand: 'GM' },
  ]

  return (

    <div className='App'>
      <h1>Car Details</h1>
      <hr />
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          name={car.name}
          KM={car.KM}
          brand={car.brand}
        />
      ))}
    </div>


  )
}

export default App
