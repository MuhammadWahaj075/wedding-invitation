'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function WaxSeal({ onClick }) {
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    setIsPressed(true)
    setTimeout(() => {
      onClick()
    }, 300)
  }

  return (
    <motion.button
      className="wax-seal relative group"
      onClick={handleClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      animate={isPressed ? {
        scale: [1, 1.2, 0],
        rotate: [0, 15, -15, 0],
        opacity: [1, 1, 0],
      } : {}}
      transition={isPressed ? { duration: 0.4 } : { duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute inset-2 rounded-full border border-white/10" />
      
      <div className="absolute inset-0 rounded-full opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="seal-gradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#seal-gradient)"/>
        </svg>
      </div>

      <span className="wax-seal-text relative z-10">
        L<span className="text-2xl">&</span>A
      </span>

      <motion.div
        className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
      />

      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  )
}
