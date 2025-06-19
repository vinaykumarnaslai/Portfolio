"use client"

import { useState, useEffect, useRef } from "react"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState("all")
  const sectionRef = useRef(null)

  const projects = [
      {
        id: 1,
        title: "Tobi AI Assistant",
        description: "A voice-controlled desktop assistant built using Python, capable of speech recognition, smart responses, and real-time app control.",
        image: "/projects/tobi.png",
        tech: ["Python", "SpeechRecognition", "LLMs", "Flask"],
        category: "AI",
        github: "#",
        demo: "#",
        featured: true,
    },
    {
      id: 2,
      title: "AI Blur Tool",
      description: "A privacy-focused web tool that auto-detects and blurs faces, QR codes, and sensitive text in images and documents.",
      image: "/projects/blur.png",
      tech: ["Flask", "OpenCV", "Tesseract", "HTML/CSS"],
      category: "AI",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Sign Language Detector",
      description: "An AI model that detects hand gestures and translates them into readable text — promoting accessibility with tech.",
      image: "/projects/sign.png",
      tech: ["Python", "TensorFlow", "OpenCV"],
      category: "AI",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Virtual AI Painter",
      description: "Draw in the air with color markers using hand-tracking and OpenCV — a fun real-time computer vision project.",
      image: "/projects/painter.png",
      tech: ["Python", "OpenCV"],
      category: "vision",
      github: "#",
      demo: "#",
      featured: false,
    },
      {
    id: 15,
    title: "Text-to-Speech Converter",
    description: "A basic GUI tool that converts typed text into audio using Python’s pyttsx3.",
    image: "/projects/tts.png",
    tech: ["Python", "pyttsx3", "Tkinter"],
    category: "AI",
    github: "#",
    demo: "#",
    featured: false,
  },
    {
    id: 6,
    title: "Marvel React Movie App",
    description: "A Marvel-themed movie search and detail app using React and movie APIs, with a dynamic interface.",
    image: "/projects/marvel-react.png",
    tech: ["React", "JavaScript", "API"],
    category: "frontend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Marvel UI/UX Concept",
    description: "UI/UX design prototype for a Marvel streaming app — focused on interaction, layout, and color balance.",
    image: "/projects/marvel-uiux.png",
    tech: ["Figma", "UI/UX"],
    category: "design",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Login Page UI/UX",
    description: "Minimal and modern login screen design with smooth animations and responsive layout.",
    image: "/projects/login-uiux.png",
    tech: ["Figma", "HTML", "CSS"],
    category: "design",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Shoe Store UI/UX",
    description: "Creative and sleek landing page design for a shoe e-commerce brand with strong typography and layout.",
    image: "/projects/shoe-uiux.png",
    tech: ["Figma", "UI/UX"],
    category: "design",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 10,
    title: "HTML E-Commerce Site",
    description: "Basic but functional e-commerce site built using just HTML and CSS for educational purposes.",
    image: "/projects/html-ecom.png",
    tech: ["HTML", "CSS"],
    category: "frontend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 11,
    title: "Netflix Clone Website",
    description: "A static clone of Netflix's homepage UI built using HTML, CSS, and basic JS effects.",
    image: "/projects/netflix-clone.png",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 12,
    title: "Marvel Landing Page",
    description: "HTML/CSS landing page inspired by Marvel — responsive and themed for fan engagement.",
    image: "/projects/marvel-landing.png",
    tech: ["HTML", "CSS"],
    category: "frontend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 13,
    title: "Exam AI Assistant",
    description: "An offline AI-based question-answer tool using local LLMs (Ollama) with a clean popup UI.",
    image: "/projects/exam-ai.png",
    tech: ["Python", "LLMs", "Tkinter", "Ollama"],
    category: "AI",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 14,
    title: "Iris Flower Detection",
    description: "ML model to classify iris flower species using scikit-learn — a beginner-level ML classification project.",
    image: "/projects/iris.png",
    tech: ["Python", "Scikit-learn", "Matplotlib"],
    category: "ML",
    github: "#",
    demo: "#",
    featured: false,
  },
  ]

  const categories = [
    { id: "all", name: "All Projects", icon: "⚔️" },
    { id: "fullstack", name: "Full Stack", icon: "🗡️" },
    { id: "frontend", name: "Frontend", icon: "⚡" },
    { id: "backend", name: "Backend", icon: "🔥" },
    { id: "ai", name: "AI/ML", icon: "🧠" },
    { id: "mobile", name: "UI/UX", icon: "📱" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">My Projects</span>
          <div className="title-slash"></div>
        </h2>

        <p className="section-subtitle">Each project forged in the fires of determination and skill</p>

        {/* Filter Buttons */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn interactive ${filter === category.id ? "active" : ""}`}
              onClick={() => setFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
              <div className="filter-slash"></div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card interactive ${project.featured ? "featured" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {project.featured && <div className="featured-badge">⭐ Featured</div>}

              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.github} className="btn-icon interactive" onClick={(e) => e.stopPropagation()}>
                      <span>GitHub</span>
                      <div className="btn-glow"></div>
                    </a>
                    <a href={project.demo} className="btn-icon interactive" onClick={(e) => e.stopPropagation()}>
                      <span>Demo</span>
                      <div className="btn-glow"></div>
                    </a>
                  </div>
                  <div className="overlay-slash"></div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close interactive" onClick={() => setSelectedProject(null)}>
              ×
            </button>

            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-category">{selectedProject.category}</div>
            </div>

            <div className="modal-body">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="modal-image"
              />
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a href={selectedProject.github} className="btn-primary interactive">
                  View Code
                </a>
                <a href={selectedProject.demo} className="btn-secondary interactive">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
