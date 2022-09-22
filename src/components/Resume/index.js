import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

import React from 'react'
import {Container, Header, Grid,} from 'semantic-ui-react'
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import JRResume from '../assets/Jose Romero - Resume.pdf'

const Resume = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    return(
        <>
            <div className='container resume-page' >
                <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={['R','e','s','u','m','e']}
                                    idx={15} 
                             />
                        </h1>
                </div>
            <Link to='/contact' className='flat-button'>Download</Link>  
            </div>
            <Loader type='pacman'/>
        </>
    )
}


export default Resume;