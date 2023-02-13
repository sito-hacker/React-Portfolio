import React, { useState } from 'react'

const Header = ({toggleTheme, isDark}) => {

  const [navOpen, setNavOpen] = useState(false)

  const navToggle = () => {
    if(!navOpen){
      setNavOpen(true)
    }else{
      setNavOpen(false)
    }
  }

  return (
     <header class="primary-header">
        
        <div class="container">
            <div class="logo">
                <a href=""><h1>N.A</h1></a>
            </div> 
            
            <div class="btn-group">                
                <button class={`theme-btn theme-btn-mobile ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
                  <ion-icon name="moon" class="moon"></ion-icon>
                  <ion-icon name="sunny" class="sun"></ion-icon>
                </button>
      
                <button class="nav-menu-btn" onClick={navToggle}>
                  <ion-icon name="menu-outline"></ion-icon>
                </button>      
            </div>
             
             <nav class={`mobile-nav ${navOpen ? "active" : ""}`} id="mobile-nav" onClick={navToggle}>
                <button class="nav-close-btn">
                  <ion-icon name="close-outline"></ion-icon>
                </button>
      
                <div class="wrapper">
                  <ul>
                    <li class="nav-item">
                      <a href="#About-me" class="nav-link">About Me</a>
                    </li>      
                    <li class="nav-item">
                      <a href="#skills" class="nav-link">Skills</a>
                    </li>                    
                    <li class="nav-item">
                        <a href="#portfolio-section" class="nav-link">Projects</a>
                      </li>      
                    <li class="nav-item">
                      <a href="#contact-me" class="nav-link">Contact</a>
                    </li>
                  </ul>      
                </div>
            </nav>            
            
            <nav class="primary-nav">
                <ul>
                    <li><a href="#About-me" class="nav-link">About Me</a></li>
                    <li><a href="#skills" class="nav-link">Skills</a></li>
                    <li><a href="#portfolio-section" class="nav-link">Projects</a></li>
                    <li><a href="#contact-me" class="nav-link">Contact</a></li>                    
                </ul>                
                
                <button class={`theme-btn theme-btn-desktop ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
                    <ion-icon name="moon" class="moon"></ion-icon>
                    <ion-icon name="sunny" class="sun"></ion-icon>
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header;