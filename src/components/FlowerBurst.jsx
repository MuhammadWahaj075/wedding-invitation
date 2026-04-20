'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FlowerBurst({ onComplete }) {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    const flowerTypes = ['rose', 'petal', 'leaf', 'bud']
    const newFlowers = []

    for (let i = 0; i < 25; i++) {
      newFlowers.push({
        id: i,
        type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        x: Math.random() * 200 - 100,
        y: Math.random() * -300 - 100,
        rotation: Math.random() * 720 - 360,
        scale: 0.5 + Math.random() * 0.8,
        delay: Math.random() * 0.3,
        duration: 2 + Math.random() * 1.5,
      })
    }
    setFlowers(newFlowers)

    const timer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 3500)

    return () => clearTimeout(timer)
  }, [onComplete])

  const renderFlower = (flower) => {
    switch (flower.type) {
      case 'rose':
        return (
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <defs>
              <linearGradient id={`rose-${flower.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a7c9b" />
                <stop offset="100%" stopColor="#2c5282" />
              </linearGradient>
              <radialGradient id={`roseCenter-${flower.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e8e4dc" />
              </radialGradient>
            </defs>
            <ellipse cx="25" cy="25" rx="22" ry="20" fill={`url(#rose-${flower.id})`} opacity="0.9"/>
            <ellipse cx="22" cy="22" rx="15" ry="13" fill="#6b9bb8" opacity="0.85"/>
            <ellipse cx="27" cy="27" rx="12" ry="10" fill="#a8c5d8" opacity="0.9"/>
            <circle cx="25" cy="25" r="5" fill={`url(#roseCenter-${flower.id})`}/>
          </svg>
        )
      case 'petal':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <ellipse cx="20" cy="20" rx="18" ry="12" fill="#a8c5d8" opacity="0.85" transform="rotate(45 20 20)"/>
          </svg>
        )
      case 'leaf':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <ellipse cx="20" cy="20" rx="16" ry="6" fill="#5a8a9a" opacity="0.8" transform="rotate(-30 20 20)"/>
          </svg>
        )
      case 'bud':
        return (
          <svg viewBox="0 0 30 30" className="w-full h-full">
            <circle cx="15" cy="15" r="12" fill="#6b9bb8" opacity="0.8"/>
            <circle cx="15" cy="15" r="7" fill="#a8c5d8" opacity="0.9"/>
            <circle cx="15" cy="15" r="3" fill="#fdfbf7"/>
          </svg>
        )
      default:
        return null
    }
  }

  const getSize = (type) => {
    switch (type) {
      case 'rose': return 'w-12 h-12 md:w-16 md:h-16'
      case 'petal': return 'w-8 h-8 md:w-10 md:h-10'
      case 'leaf': return 'w-10 h-10 md:w-12 md:h-12'
      case 'bud': return 'w-6 h-6 md:w-8 md:h-8'
      default: return 'w-8 h-8'
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            className={`absolute ${getSize(flower.type)}`}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0, 
              opacity: 0,
              rotate: 0 
            }}
            animate={{ 
              x: flower.x * 3,
              y: flower.y,
              scale: flower.scale,
              opacity: [0, 1, 1, 0],
              rotate: flower.rotation
            }}
            transition={{
              duration: flower.duration,
              delay: flower.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: {
                times: [0, 0.1, 0.7, 1],
                duration: flower.duration,
              }
            }}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-20px',
              marginTop: '-20px',
            }}
          >
            {renderFlower(flower)}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
        initial={{ scale: 0, opacity: 0.6 }}
        animate={{ scale: 8, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          background: 'radial-gradient(circle, rgba(168,197,216,0.4) 0%, transparent 70%)'
        }}
      />
    </div>
  )
}
