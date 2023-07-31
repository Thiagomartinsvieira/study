
import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 10;
  const [name] = useState('Thiago');

  const redTitle = true;

  return (
    <div className='App'>
      <h1>React with CSS</h1>
      <MyComponent />
      <p>This paragraph is from APP.jsx</p>
      <p style={{ color: 'blue', padding: '30px', borderTop: '4px solid red' }}>Este elemento foi estilizado inline</p>

      <h2 style={name === 'Thiago' ? ({ color: 'green', backgroundColor: 'gold' }) : null}>CSS Dinamic</h2>

      <h2 className={redTitle ? 'red-title' : 'title'}>this title will have dynamic class</h2>
    </div>


  )
}

export default App
