'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloralBackground() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-100/30" />
      
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 opacity-30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="bgBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a7c9b" />
              <stop offset="100%" stopColor="#6b9bb8" />
            </linearGradient>
          </defs>
          <g fill="url(#bgBlue1)" opacity="0.5">
            <circle cx="40" cy="40" r="30"/>
            <circle cx="80" cy="60" r="25"/>
            <circle cx="50" cy="90" r="20"/>
            <ellipse cx="100" cy="40" rx="35" ry="15" transform="rotate(-30 100 40)"/>
            <ellipse cx="30" cy="100" rx="30" ry="12" transform="rotate(-60 30 100)"/>
            <ellipse cx="90" cy="100" rx="25" ry="10" transform="rotate(-45 90 100)"/>
          </g>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 opacity-30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full transform scale-x-[-1]">
          <defs>
            <linearGradient id="bgBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a7c9b" />
              <stop offset="100%" stopColor="#6b9bb8" />
            </linearGradient>
          </defs>
          <g fill="url(#bgBlue2)" opacity="0.5">
            <circle cx="40" cy="40" r="30"/>
            <circle cx="80" cy="60" r="25"/>
            <circle cx="50" cy="90" r="20"/>
            <ellipse cx="100" cy="40" rx="35" ry="15" transform="rotate(-30 100 40)"/>
            <ellipse cx="30" cy="100" rx="30" ry="12" transform="rotate(-60 30 100)"/>
            <ellipse cx="90" cy="100" rx="25" ry="10" transform="rotate(-45 90 100)"/>
          </g>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 opacity-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 800 100" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="bgBlue3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#4a7c9b" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path 
            d="M0,100 Q200,50 400,80 T800,100 L800,100 L0,100 Z" 
            fill="url(#bgBlue3)" 
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-wedding-blue/20"
          style={{ left: `${particle.x}%`, bottom: '-10px' }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="bg-pattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <circle cx="30" cy="30" r="1.5" fill="#4a7c9b"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-pattern)"/>
        </svg>
      </div>
    </div>
  )
}
