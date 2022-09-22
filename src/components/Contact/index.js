import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                                idx={15} 
                        />
                    </h1>
                    <p>
                        I am open for freelancing project for details contact me via upwork.
                        Experties in Javascript,Jquery,HTML5,CSS, React,Node,Express,MongoDB,SQL,GraphQL,React Dev Tools,JWT,
                    </p>

                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required />
                                </li>
                                <li >
                                    <input type="submit" className='flat-button' value='SEND' required />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>

            </div>
            <Loader type='pacman'/>
        </>
    )
}


export default Contact;