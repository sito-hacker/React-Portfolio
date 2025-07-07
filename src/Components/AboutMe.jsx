import React from 'react'

const AboutMe = () => {
  return (
    <section class="About-me" id="About-me">
            <div class="container">
                <h2 class="section-heading">About Me</h2>
                <div class="about-me-content" >
                    <div class="left">
                        <div class="about-me-img">
                            <img src="./assets/thomas.jpg" alt=""/>
                        </div> 
                    </div>
                    <div class="right">
                        <p class="text-color">Hello! my name is Thomas Abasiodiong, i am a Computer  engineer/ self-taught web developer. I enjoy learning new technologies and utilizing them to solve real-world problems.</p>
                        <p class="text-color">I have had the priviledge of building tons of digital experiences, and i keep on learning new technologies to make more cooler projects.</p>
                        <p class="text-color"> I am also very enthusiatic about Blockchain Development. When i am not coding, i enjoy playing football for fun.</p>
                        <div class="btn-con">
                            <a target="_blank" href="Blue and Gray Simple Professional CV Resume.pdf" class="btn btn-primary">Download CV</a>
                        </div> 
                    </div>
                    
                </div>                    
            </div>
        </section>
  )
}

export default AboutMe;