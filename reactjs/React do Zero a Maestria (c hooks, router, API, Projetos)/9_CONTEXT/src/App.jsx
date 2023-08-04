import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from '../../8_REACT_ROUTER/src/pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
