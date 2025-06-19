"use client"

import { useState, useEffect, useRef } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Create success animation
    const successElement = document.querySelector(".success-animation")
    if (successElement) {
      successElement.classList.add("active")
    }

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Contact Me</span>
          <div className="title-slash"></div>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-block animate-slide-right">
              <h3 className="contact-heading">Systems Ready. Challenge Me.</h3>
              <p className="contact-description">
                Whether it's building powerful interfaces, crafting intelligent AI, or solving complex problems — I'm all in. Let's innovate together.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item animate-bounce">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">vinaykumarnaslai123@gmail.com</span>
                </div>
              </div>

              <div className="contact-item animate-bounce">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 6666666666</span>
                </div>
              </div>

              <div className="contact-item animate-bounce">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">MITE College , Moodabidri</span>
                </div>
              </div>

              <div className="contact-item animate-bounce">
                <div className="contact-icon">⚔️</div>
                <div className="contact-text">
                  <span className="contact-label">Availability</span>
                  <span className="contact-value">Always Ready</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link interactive">
                <span className="social-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-link interactive">
                <span className="social-icon">🐙</span>
                <span>GitHub</span>
              </a>
              <a href="#" className="social-link interactive">
                <span className="social-icon">🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Contact</h3>
              <div className="form-slash"></div>
            </div>

            <div className="form-group bounce-in">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input interactive ${errors.name ? "error" : ""}`}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
              <div className="input-glow"></div>
            </div>

            <div className="form-group bounce-in">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input interactive ${errors.email ? "error" : ""}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
              <div className="input-glow"></div>
            </div>

            <div className="form-group bounce-in">
              <textarea
                name="message"
                placeholder="Your Challenge/Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`form-input interactive ${errors.message ? "error" : ""}`}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
              <div className="input-glow"></div>
            </div>

            <button
              type="submit"
              className={`btn-submit interactive ${isSubmitting ? "submitting" : ""} ${isSubmitted ? "submitted" : ""}`}
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? "Preparing for Battle..." : isSubmitted ? "⚔️ Challenge Accepted!" : "Send Challenge"}
              </span>
              <div className="btn-slash"></div>
              <div className="btn-glow"></div>
            </button>

            {/* Success Animation */}
            <div className="success-animation">
              <div className="success-slash"></div>
              <div className="success-particles">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`success-particle particle-${i}`}></div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact-bg-elements">
        <div className="bg-sword sword-1">⚔️</div>
        <div className="bg-sword sword-2">🗡️</div>
        <div className="contact-glow glow-1"></div>
        <div className="contact-glow glow-2"></div>
      </div>
    </section>
  )
}

export default Contact
