import React from 'react'

const ProjectCard = ({title, technologies, imgUrl}) => {
  return (
    <div class="portfolio-item">                            
        <div class="image">
            <img src={`./Images/${imgUrl}`} alt=""/>
        </div>
        <h3 class="h3">{title}</h3>
        <p class="blog-text">{technologies}</p>
        <div class="hover-items">
            <h3>Project Source</h3>
            <div class="icons">                                    
                <a href="#" class="icon">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" class="icon">                                            
                    
                    <i class="fa-solid fa-link"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;

{/* <i class="fa fa-external-link" aria-hidden="true"></i> */}