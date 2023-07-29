import './App.css'
import ManageData from './components/ManageData';
import Dev from './assets/img2.jpg';
import ListRender from './components/ListRender';
import ConditionalRandom from './components/ConditionalRandom';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name = 'Lucas'
  const [userName] = useState('Maria')

  const cars = [
    { id: 1, brand: 'ferrari', color: 'Yellow', newCar: true, km: 0 },
    { id: 2, brand: 'Renault', color: 'black', newCar: false, km: 1300 },
    { id: 3, brand: 'Chrevrolet', color: 'cian', newCar: true, km: 0 },
  ]

  return (

    <div className='App'>
      <h1>AVANCANDO NO REACT</h1>
      <div>
        <img src="src/img1.jpg" alt="developer" height='500px' width='500px' />
      </div>
      <div>
        <img src={Dev} alt="developer" height='500px' width='500px' />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRandom />
      <ShowUserName name={userName} />
      <CarDetails brand='VW' km={10000} color='Blue' newCar={true} />
      <CarDetails brand='Ford' color='Red' km={203000} newCar={false} />
      <CarDetails brand='Fiat' color='White' km={21340} newCar={true} />
      {cars.map((car) => () => (
        <CarDetails
          brand={car.brand}
          color={color.brand}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </div>

  )
}

export default App
