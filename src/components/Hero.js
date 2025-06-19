"use client"

import { useEffect, useState } from "react"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Hi, I'm vinaykumar — Developer 🧑‍💻"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      // Blink cursor after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
      return () => clearInterval(cursorInterval)
    }
  }, [currentIndex, fullText])

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-logo animate-zoom">
          <div className="logo-circle">
            <div className="sword-icon">🧑‍💻</div>
            <div className="logo-ring ring-1"></div>
            <div className="logo-ring ring-2"></div>
            <div className="logo-ring ring-3"></div>
          </div>
        </div>

        <h1 className="hero-title animate-slide-up">
          <span className="typing-text">{displayText}</span>
          <span className={`cursor-blink ${showCursor ? "visible" : ""}`}>|</span>
        </h1>

        <p className="hero-subtitle animate-fade-in">Aspiring Software Engineer | AI Tools Builder | Web Developer</p>

        <div className="hero-stats animate-fade-in">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Dedication</div>
          </div>
        </div>

        <div className="hero-buttons animate-fade-in">
          <button className="btn-primary interactive glow-button" onClick={scrollToProjects}>
            <span>View My Projects</span>
            <div className="button-slash"></div>
          </button>
          <button className="btn-secondary interactive" onClick={scrollToContact}>
            <span>Hire Me</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-slash slash-1"></div>
        <div className="bg-slash slash-2"></div>
        <div className="bg-slash slash-3"></div>
      </div>

      {/* Energy Waves */}
      <div className="energy-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
    </section>
  )
}

export default Hero
