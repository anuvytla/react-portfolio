import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import { faAngular,
    faCss3, 
    faGithub, 
    faHtml5, 
    faJsSquare, 
    faReact }
     from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                        <p>You can download my Resume By clicking download button</p>
                        <Link className='flat-button' to='/files/Anusha_Vytla_Resume.pdf' target='_blank' download>
                            Download
                        </Link>

                </div>
            </div>
            <div className='stage-cube-cont'>
            <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="DD0031"/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="F06529"/>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="28A4D9"/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="5ED4F4"/>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="EFD81D"/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="EC4D28"/>
                    </div>


                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}


export default Resume;