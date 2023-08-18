import './Nav.css'

// components
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsHouseDoor, BsFillPersonFill, BsFillCameraFill, BsHouseDoorFill } from 'react-icons/bs'

const Nav = () => {
    return (
        <nav id='nav'>
            <Link to={'/'}>ReactGram</Link>
            <form>
                <BsSearch />
                <input type='text' />
            </form>
            <ul id='nav-links'>
                <NavLink to='/'>
                    <BsHouseDoorFill />
                </NavLink>
                <NavLink to='/login'>
                    Entrar
                </NavLink>
                <NavLink to='/register'>
                    Cadastrar
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav