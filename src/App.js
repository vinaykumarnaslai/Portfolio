"use client"

import { useEffect, useState } from "react"
import CustomCursor from "./components/CustomCursor"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import ParticleBackground from "./components/ParticleBackground"
import LoadingScreen from "./components/LoadingScreen"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsLoaded(true), 100)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`app-container ${isLoaded ? "loaded" : ""}`}>
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-sword floating-1">⚔️</div>
        <div className="floating-sword floating-2">🗡️</div>
        <div className="floating-sword floating-3">⚔️</div>
      </div>

      {/* Background Glow Effects */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="bg-glow glow-3"></div>
    </div>
  )
}

export default App
