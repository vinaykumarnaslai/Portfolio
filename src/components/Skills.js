"use client"

import { useEffect, useRef, useState } from "react"

const Skills = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const skills = [

    { name: "React", level: 60, icon: "⚛️", color: "#61DBFB" },         // Atomic and dynamic
    { name: "Node.js", level: 20, icon: "🌿", color: "#3C873A" },        // Leaf for backend
    { name: "C programming", level: 90, icon: "🧠", color: "#004482" },  // Brain for logic
    { name: "Python", level: 95, icon: "🐍", color: "#306998" },         // Snake = classic
    { name: "JavaScript", level: 82, icon: "🟨", color: "#F0DB4F" },     // JS color and square
    { name: "HTML", level: 100, icon: "🌐", color: "#E44D26" },          // Web globe
    { name: "CSS", level: 95, icon: "🎨", color: "#264DE4" },            // Paint palette
    { name: "Figma", level: 70, icon: "🎯", color: "#A259FF" },          // Target/design
    { name: "UI/UX", level: 70, icon: "🧩", color: "#FF6F61" },          // Puzzle for UI/UX fitting
    { name: "Flask", level: 80, icon: "⚗️", color: "#000000" },          // Flask chemistry
    { name: "OpenCV", level: 40, icon: "👁️", color: "#5C3EE8" },         // Eye for vision
    { name: "Ollama", level: 30, icon: "🦙", color: "#FF7043" }          // Llama + unique orange


  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Skills</span>
          <div className="title-slash"></div>
        </h2>

        <div className="skills-intro">
          <p>Each skill sharpened through real-world challenges and countless lines of code.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item interactive" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>

              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`,
                      background: `linear-gradient(90deg, #B3001B, ${skill.color})`,
                    }}
                  >
                    <div className="progress-glow"></div>
                  </div>
                </div>
              </div>

              <div className="skill-level-text">
                {skill.level >= 90
                  ? "Master"
                  : skill.level >= 80
                    ? "Expert"
                    : skill.level >= 70
                      ? "Advanced"
                      : "Intermediate"}
              </div>

              <div className="skill-bg-glow"></div>
            </div>
          ))}
        </div>

        {/* Floating Skill Icons */}
        <div className="floating-skills">
          <div className="floating-skill skill-float-1">⚔️</div>
          <div className="floating-skill skill-float-2">🗡️</div>
          <div className="floating-skill skill-float-3">⚡</div>
          <div className="floating-skill skill-float-4">🔥</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
