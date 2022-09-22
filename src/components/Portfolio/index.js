import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    return(
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                <h1>
                        <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['P','o','r','t','f','o','l','i','o']}
                                idx={15} 
                        />
                    </h1>

                <div className='projects'></div>
                </div>
            
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Portfolio;