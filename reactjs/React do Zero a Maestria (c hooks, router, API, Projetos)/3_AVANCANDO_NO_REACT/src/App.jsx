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
      <CarDetails brand='VW' km={10000} color='Blue' />
    </div>

  )
}

export default App
