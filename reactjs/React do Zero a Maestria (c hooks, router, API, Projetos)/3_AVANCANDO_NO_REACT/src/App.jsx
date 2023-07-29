import './App.css'
import ManageData from './components/ManageData';
import Dev from './assets/img2.jpg';
import ListRender from './components/ListRender';
import ConditionalRandom from './components/ConditionalRandom';

function App() {

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
    </div>

  )
}

export default App
