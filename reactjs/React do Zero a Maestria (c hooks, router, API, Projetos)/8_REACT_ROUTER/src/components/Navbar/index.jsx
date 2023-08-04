import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <nav>
                {/* <Link to="/">Home</Link>
                <Link to='/about'>About</Link> */}
                <NavLink to='/'
                // </nav>className={({ isActive }) => (isActive ? 'isActive' : 'isNotActive')}
                >
                    Home
                </NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    )
}

export default Navbar