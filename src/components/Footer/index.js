import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons';
  

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/lakshmi-anusha-vytla/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#ffd700"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/anuvytla"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#ffd700"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
     
            
        </div>
    )
}

export default Footer;