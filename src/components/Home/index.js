import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A','n','u','s','h','a'];
    const jobArray = ['W','e','b',' ','d','e','v','e','l','o','p','e','r'];
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/> <br /> <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/></h1>
                
                <h2>Fullstack Developer / Javascript Expert / Python Expert</h2>
                <Link to='/contact' className='flat-button'>CONATCT ME</Link>
            </div>
        </div>
    )
}

export default Home;