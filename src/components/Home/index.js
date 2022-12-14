import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','A','n','u','s','h','a'];
    const jobArray = ['W','e','b',' ','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    });
    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass}_12`}>i,</span>
                         <br /> 
                        <span className={`${letterClass}_13`}>I</span>
                        <span className={`${letterClass}_14`}>'m</span> 
                        <AnimatedLetters letterClass={letterClass}
                                        strArray={nameArray}
                                        idx={15}/> 
                        <br /> 
                        <AnimatedLetters letterClass={letterClass}
                                        strArray={jobArray}
                                        idx={22}/>
                    </h1>
                
                    <h2>Fullstack Developer / Javascript Expert / Python Expert</h2>
                    <Link to='/react-portfolio/contact' className='flat-button'>CONATCT ME</Link>
                    <Loader type='pacman'/>
            </div>
            </div>
        </>
    )
}

export default Home;