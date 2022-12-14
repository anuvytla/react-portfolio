import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faFile, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';



const Header = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    return (
        <div className='nav-bar'>
            <div className='text-zone'>
                <Link className='logo' to='/react-portfolio/'>
                    <h1>
                        <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['L','A','V']}
                                idx={15} 
                        />
                    </h1>
            
                
                </Link>
            </div>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/react-portfolio/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='about-link' to='/react-portfolio/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/react-portfolio/portfolio'>
                    <FontAwesomeIcon icon={faTasks} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='contact-link' to='/react-portfolio/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='resume-link' to='/react-portfolio/resume'>
                    <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
                </NavLink>

                
            </nav>


        </div>
    )
}

export default Header;