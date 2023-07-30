
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <div className='App'>
      <h1>React with CSS</h1>
      <MyComponent />
      <p>This paragraph is from APP.jsx</p>
      <p style={{ color: 'blue', padding: '30px', borderTop: '4px solid red' }}>Este elemento foi estilizado inline</p>
    </div>


  )
}

export default App
