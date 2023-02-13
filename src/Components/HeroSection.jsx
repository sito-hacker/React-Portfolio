import React from 'react'

const HeroSection = () => {
  return (
    <section class="hero-section" id="hero-section">
            <div class="container">
                
                    <div class="hero-data">
                        <h1 class="h1">
                            Hi,<br/> I'm <b>Nsikak Akpan</b>.<br/>Frontend Developer
                        </h1>
                        <p class="h3">I love building (and occasionally designing) exceptional digital experiences with modern technologies.</p>
                        <div class="btn-group">
                            <a href="#contact-me" class="btn btn-primary">Contact Me</a>
                            <a href="#portfolio-section" class="btn btn-secondary">See My Projects</a>
                        </div>                        
                    </div>
                    <div class="hero-img-wrapper">
                        <div class="img-box">
                            <img class="hero-img" src="./Images/nsikak_akpan2.png" alt="this is me Nsikak Akpan"/>
                        </div>
                        <div class="shape shape-1"></div>
                        <div class="shape shape-2"></div>
                    </div>       
            </div>           
        </section>
  )
}

export default HeroSection;
