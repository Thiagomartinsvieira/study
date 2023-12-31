import './App.css'
import ManageData from './components/ManageData';
import Dev from './assets/img2.jpg';
import ListRender from './components/ListRender';
import ConditionalRandom from './components/ConditionalRandom';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = 'Lucas'
  const [userName] = useState('Maria')

  const cars = [
    { id: 1, brand: 'ferrari', color: 'Yellow', newCar: true, km: 0 },
    { id: 2, brand: 'Renault', color: 'black', newCar: false, km: 1300 },
    { id: 3, brand: 'Chrevrolet', color: 'cian', newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log('Evento do componet')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    { id: 1, name: 'Lucas', age: 19, job: 'student' },
    { id: 2, name: 'Thiago', age: 23, job: 'programer' },
    { id: 3, name: 'Giovana', age: 17, job: 'student' },
  ];

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
          key={car.id}
          brand={car.brand}
          color={color.brand}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      <Fragments propFragmentTest='test' />
      <Container myValue='testing'>
        <p>This is a content</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>

  )
}

export default App
