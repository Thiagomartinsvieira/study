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
                <input type='text' placeholder='pesquisar' />
            </form>
            <ul id='nav-links'>
                <li>
                    <NavLink to='/'>
                        <BsHouseDoorFill />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login'>
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/register'>
                        Cadastrar
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav