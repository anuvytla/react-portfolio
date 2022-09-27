import './index.scss';
import Restaurant from '../../assets/images/bon-appetit.jpeg';

const Project = () => {
    return (
        <>
        <div className='project-container'>
            <div className="image-box">
                <img 
                    src={Restaurant}
                    className="portfolio-image"
                    alt="image" 
                />
                <div className="content">
                    <a href='https://github.com/anuvytla/bon-appetit' >Bon Appetit</a>
                </div>
            </div>
        </div>
                            
        
            
        </>
    )
}


export default Project;