"use client"

import { useEffect, useRef, useState } from "react"

const About = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const timeline = [
    {
      year: "2022",
      title: "The First Step (1st Year)",
      desc: "Started engineering with C programming and HTML — built my foundation in coding and logic.",
      icon: "🎓",
    },
    {
      year: "2023",
      title: "Building the Base (2nd Year)",
      desc: "Mastered frontend development (HTML, CSS, JavaScript). Built UI projects and gained interest in full-stack.",
      icon: "🛠️",
    },
    {
      year: "2024",
      title: "AI Awakening (5th Semester, Start of 3rd Year)",
      desc: "Explored Python and AI tools. Created projects like AI Virtual Painter and Sign Language Detection.",
      icon: "🤖",
    },
    {
      year: "2025",
      title: "Real-World Projects (End of 3rd Year)",
      desc: "Built advanced tools like Tobi AI Assistant, AI Blur Tool, and LLM-integrated apps using Flask, React, OpenCV, and Ollama.",
      icon: "🧠",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">About the Vinaykumar</span>
          <div className="title-slash"></div>
        </h2>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block animate-slide-right">
              <h3 className="about-heading">The Way of the Code</h3>
              <p className="about-description">
                Hi, I'm Vinnu — an engineering student and passionate developer with a love for building smart, interactive tools. I specialize in creating AI-powered applications, full-stack web apps, and automation projects. I enjoy solving real-world problems with clean code, creative interfaces, and a touch of innovation.

              </p>
            </div>

            <div className="text-block animate-slide-right">
              <h3 className="about-heading">Philosophy</h3>
              <p className="about-description">
                Power lies in the code you write, precision lies in the mind you train.
                I believe technology should be creative, intelligent, and purposeful. I aim to build tools that solve real-world problems while reflecting originality and sharp thinking — like a well-forged weapon.
              </p>
            </div>

            <div className="skills-preview">
              <div className="skill-badge">React ⚔️</div>
              <div className="skill-badge">Node.js 🗡️</div>
              <div className="skill-badge">MongoDB 🏴‍☠️</div>
              <div className="skill-badge">TypeScript ⚡</div>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-line"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${isVisible ? "animate-timeline" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="marker-glow"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
