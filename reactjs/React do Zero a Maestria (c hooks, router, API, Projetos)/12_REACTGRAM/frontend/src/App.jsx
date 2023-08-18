import './App.css'
// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// components
import Footer from './components/Footer'
import Nav from './components/Nav'

// Pages
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
