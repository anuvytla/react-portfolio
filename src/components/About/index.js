import { faAngular,
         faCss3, 
         faGithub, 
         faHtml5, 
         faJsSquare, 
         faReact }
          from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ', 'm','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hi This is Anusha!. I'm experienced Software Engineer in a top notch companies like Verizon and Thomson Reuters. Now, i decided to  expand my knowledge and build my experience as a full stack developer in accordance to that  i have done my full stack cource in UC Berkely EXTN bootcamp.
                    As an enthusiastic and creative technologist with hands on skills in wide range of tools and programming languages. I am well positioned to leverage my abilities and qualifications as a Full stack MERN developer.
                    Throughout my career, I have been acknowledged as a solution-focussed professional with the ability to deliver clean solutions, design and develop innovatiave applications using advanced technologies.
                    In my previous employement , I have consistenly met client expectations and project milestoneswhile working effectively in deadline driven environment with clean deliverables.
                </p>
                <br/>
                <p>Few insights of me as full stack MERN developer</p>
                <br/>
                <ul>
                    <li>Designed and developed front-end   webpages using HTML5, JQUERY, Vanilla JavaScript (ES6), CSS, BOOTSTRAP,MDN BOOTSTRAP, REACT, REACT BOOTSTRAP.</li>
            
                    <li>created user-centric ecommerce sites for small business owners using various web technologies.</li>
            
                    <li>Created many ecommerce backend sites  where you can find them in my Github </li>
                </ul>
            
                <br/>
                <p>I would welcome the chance to provide further insight in to my technical abilities and personal attributes</p> 
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
        </div>
    )
}

export default About;
