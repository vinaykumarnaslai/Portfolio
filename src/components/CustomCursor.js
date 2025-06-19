"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./CustomCursor.css"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [particles, setParticles] = useState([])
  const [trailPoints, setTrailPoints] = useState([])

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add to trail
      setTrailPoints((prev) => [...prev.slice(-8), { ...newPosition, id: Date.now() + Math.random() }])

      // Create particle trail with random colors
      if (Math.random() > 0.7) {
        const colors = ["#ff4136", "#ffdc00", "#001f3f"]
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 4 + 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        }

        setParticles((prev) => [...prev.slice(-15), newParticle])
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .card, .nav-link, .project-card, .skill-item")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Particle animation
    const particleInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            life: particle.life - 0.02,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            size: particle.size * 0.98,
          }))
          .filter((particle) => particle.life > 0),
      )

      setTrailPoints((prev) => prev.filter((_, index) => index > prev.length - 10))
    }, 16)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      clearInterval(particleInterval)
    }
  }, [])

  return (
    <>
      {/* Trail Effect */}
      {trailPoints.map((point, index) => (
        <motion.div
          key={point.id}
          className="cursor-trail"
          initial={{
            x: point.x - 3,
            y: point.y - 3,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.5 }}
          style={{
            background: `hsl(${index * 30}, 70%, 60%)`,
          }}
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.8 : isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isClicking ? 1.5 : isHovering ? 2.5 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      />

      {/* Outer Glow Ring */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
      />

      {/* Particle Trail */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="cursor-particle"
          initial={{
            x: particle.x - particle.size / 2,
            y: particle.y - particle.size / 2,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            x: particle.x - particle.size / 2 + particle.vx * 10,
            y: particle.y - particle.size / 2 + particle.vy * 10,
          }}
          transition={{ duration: 1 }}
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
          }}
        />
      ))}
    </>
  )
}

export default CustomCursor
