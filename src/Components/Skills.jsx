import React from 'react'

const Skills = () => {
  return (
    <section class="skills" id="skills">
            <div class="container">
                <h2 class="section-heading">My technology stack</h2>
                <p class="text-color text-center">
                    Here are some of some of the technologies in my arsenal.
                </p>
                <div class="skills-wrapper">
                    <div class="skill-card">
                        <img src="./Images/react_original_logo_icon_146374.svg" alt="" class="s-icons"/>
                        <h3 class="h4">REACT JS</h3>
                    </div>
                    <div class="skill-card">
                        <img src="./Images/file_type_html_icon_130541.svg" alt="" class="s-icons"/>
                        <h3 class="h4">HTML5</h3>
                    </div>
                    <div class="skill-card">
                        <img src="./Images/file_type_css_icon_130661.svg" alt="" class="s-icons"/>
                        <h3 class="h4">CSS3</h3>
                    </div>
                    <div class="skill-card">
                        <img src="./Images/javascript_icon_130900.svg" alt="" class="s-icons"/>
                        <h3 class="h4">JAVASCRIPT</h3>
                    </div>
                    <div class="skill-card">
                        <img src="./Images/file_type_sass_icon_130182.svg" alt="" class="s-icons"/>
                        <h3 class="h4">SASS</h3>
                    </div>
                    <div class="skill-card">                        
                        <img src="./Images/bootstrap.svg" alt="" class="s-icons"/>                       
                        <h3 class="h4">BOOTSTRAP</h3>
                    </div>
                    <div class="skill-card">
                        <img src="./Images/icons8-redux.svg" alt="" class="s-icons"/>
                        <h3 class="h4">REDUX</h3>
                    </div>                    
                    <div class="skill-card">
                        <i class="fa-brands fa-github fa-3x fa"></i>   
                        <h3 class="h4">GITHUB</h3>
                    </div>
                </div>                
            </div>                
        </section>
  )
}

export default Skills;