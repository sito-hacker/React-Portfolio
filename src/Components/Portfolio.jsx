import React from 'react'
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <section class="portfolio-section" id="portfolio-section">
            <div class="container">                    
                <h2 class="section-heading">My Projects</h2>                    
                <p class="text-color">
                    Here are some of my work that I've done in various technologies.
                </p>
                <div class="portfolios">
                    <ProjectCard 
                        title="NASA Mission Explorer" 
                        technologies="Here are some of my work that I've done in various technologies." 
                        imgUrl="img-1.jpg"
                    />
                    <ProjectCard 
                        title="NFT Marketplace" 
                        technologies="Built using HTML, CSS, bootstrap, SASS, react JS" 
                        imgUrl="img-2.jpg"
                    />
                    <ProjectCard 
                        title="Educational Mnagement System" 
                        technologies="Built using HTML, CSS and JavaScript" 
                        imgUrl="img-6.jpg"
                    />
                    <ProjectCard 
                        title="Youtube Clone" 
                        technologies="Built using HTML, CSS and JavaScript" 
                        imgUrl="img-9.jpg"
                    />
                    <ProjectCard 
                        title="Facebook Clone" 
                        technologies="Built using HTML, CSS and JavaScript" 
                        imgUrl="img-8.jpg"
                    />
                    <ProjectCard 
                        title="Multiplayer Chess Game" 
                        technologies="Built using HTML, CSS and JavaScript" 
                        imgUrl="port4.jpg"
                    />
                    <ProjectCard 
                        title="Quiz Game" 
                        technologies="Built using HTML, CSS and JavaScript" 
                        imgUrl="port6.jpg"
                    />
                    <ProjectCard 
                        title="Solar PV sizing App" 
                        technologies="Built using HTML, CSS and JavaScript" 
                        imgUrl="port7.jpg"
                    />
                    <ProjectCard 
                        title="Restaurant App" 
                        technologies="Built using HTML, CSS and JavaScript" 
                        imgUrl="img-3.jpg"
                    />
                    
                </div> 
            </div>   
        </section>
  )
}

export default Portfolio;