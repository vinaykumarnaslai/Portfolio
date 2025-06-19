"use client"

import { useState, useEffect } from "react"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const sections = ["hero", "about", "skills", "projects", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo interactive">
        <div className="logo-animation">
          <span className="logo-text">Vinaykumar</span>
          <div className="logo-slash"></div>
        </div>
      </div>

      <ul className="nav-links">
        {[
          { name: "Home", id: "hero" },
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Projects", id: "projects" },
          { name: "Contact", id: "contact" },
        ].map((item) => (
          <li key={item.id}>
            <button
              className={`nav-link interactive ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
              <div className="nav-link-slash"></div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
