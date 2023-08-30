import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> Movies Lib
        </Link>
      </h2>
      <h2>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Find a movie"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </h2>
    </nav>
  )
}

export default Nav
