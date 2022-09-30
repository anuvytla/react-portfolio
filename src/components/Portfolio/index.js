import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Project from '../Project';
import Restaurant from '../../assets/images/bon-appetit.jpeg';
import Weather from '../../assets/images/weather.png';
import Maps from '../../assets/images/B4UBOARD.png';
import Quiz from '../../assets/images/Quiz.jpeg';


const portfolio_data = [
    {
        title: 'Weather Dashboard',
        image_url: Weather,
        github_url:'https://github.com/anuvytla/weather-forecast'

    },
    {
        title:'Timed Quiz',
        image_url: Quiz,
        github_url:'https://github.com/anuvytla/timed-quiz'

    },
    {
        title:'Bon Appetit',
        image_url:Restaurant,
        github_url:'https://github.com/anuvytla/bon-appetit'
    },
    {
        title:'B4UBOARD',
        image_url: Maps,
        github_url:'https://github.com/JackYouk/B4UBoard'

    }
];

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
                    <div className='projects'>
                        {portfolio_data.map(project => (
                            <Project project_info={project}/>
                        ))};
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Portfolio;