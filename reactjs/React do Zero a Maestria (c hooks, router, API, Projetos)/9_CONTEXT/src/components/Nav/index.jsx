import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav