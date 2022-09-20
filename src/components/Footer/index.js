import './index.scss';
import LinkedInImg from '../../assets/images/linkedin-logo.jpeg';
import GithubImg from '../../assets/images/github-logo.png';
import EmailImg from '../../assets/images/email-logo.jpeg';
import TwitterImg from '../../assets/images/twitter-logo.jpeg';

const Footer = () => {
    return (
        <div className='footer'>
            <a className='linkedin' alt='linkdein-logo' href='https://www.linkedin.com/in/lakshmi-anusha-vytla/'>
                
                <img src={LinkedInImg}/>
            </a>

            <a className='github' alt='github-logo' href='https://github.com/anuvytla'>
                
                <img src={GithubImg}/>
            </a>

            <a className='email' alt='email-logo' href='mailto:reachinganusha@gmail.com'>
                
                <img src={EmailImg}/>
            </a>

            <a className='twitter' alt='twitter-logo' href='#'>
                
                <img src={TwitterImg}/>
            </a>
            
        </div>
    )
}

export default Footer;