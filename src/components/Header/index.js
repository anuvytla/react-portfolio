import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faFile, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <h1>LAV</h1>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                    <FontAwesomeIcon icon={faTasks} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='resume-link' to='/resume'>
                    <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
                </NavLink>

                
            </nav>


        </div>
    )
}

export default Header;