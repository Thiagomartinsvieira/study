import './App.css'

import Dev from './assets/img2.jpg';

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
    </div>

  )
}

export default App
