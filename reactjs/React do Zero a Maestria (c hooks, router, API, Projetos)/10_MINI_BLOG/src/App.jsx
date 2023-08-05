import './App.css'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
