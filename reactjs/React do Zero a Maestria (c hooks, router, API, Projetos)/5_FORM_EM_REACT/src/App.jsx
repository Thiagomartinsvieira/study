import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: 'Thiago', email: 'thiago@email.com' }} />
    </div>
  )
}

export default App
