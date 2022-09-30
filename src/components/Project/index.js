import './index.scss';


const Project = ({project_info}) => {
    return (
        <>
        <div className='project-container'>
            <div className="image-box">
                <img 
                    src={project_info.image_url}
                    className="portfolio-image"
                    alt={project_info.title} 
                />
                <div className="content">
                    <a href={project_info.github_url}>
                        {project_info.title}
                    </a>
                </div>
            </div>
        </div>
                            
        
            
        </>
    )
}


export default Project;