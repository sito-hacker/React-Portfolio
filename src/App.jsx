import { useState, useEffect } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import BackgroundEffect from './Components/BackgroundEffect'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'
import ScrollUp from './Components/ScrollUp'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color")
    if(currentThemeColor === "dark"){
      setIsDark(true)
    }else{
      setIsDark(false)
    }
  },[])

  const toggleTheme = () => {
    if(isDark){
      localStorage.setItem("theme-color", "light")
      setIsDark(false)
    }else{
      localStorage.setItem("theme-color", "dark")
      setIsDark(true)
    }
  }

  return (
    <div className={`App ${isDark ? "dark-theme" : "light-theme"}`}>
      <BackgroundEffect/>
      <Header toggleTheme={toggleTheme} isDark={isDark}/>
      <main>
        <HeroSection/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  )
}

export default App
