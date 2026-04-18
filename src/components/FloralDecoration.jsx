'use client'

import { motion } from 'framer-motion'

export default function FloralDecoration({ position }) {
  const getRotation = () => {
    switch (position) {
      case 'corner-top-right':
        return 'rotate-90'
      case 'corner-bottom-left':
        return '-rotate-90'
      case 'corner-bottom-right':
        return 'rotate-180'
      default:
        return ''
    }
  }

  if (position === 'top') {
    return (
      <motion.svg
        viewBox="0 0 400 120"
        className="w-full h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="blueGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#2c5282" />
          </linearGradient>
          <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a7c9b" />
            <stop offset="100%" stopColor="#6b9bb8" />
          </linearGradient>
          <linearGradient id="blueGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8c5d8" />
            <stop offset="100%" stopColor="#c5dae8" />
          </linearGradient>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a7c9b" />
            <stop offset="100%" stopColor="#6b9bb8" />
          </linearGradient>
        </defs>

        <g transform="translate(50, 60)">
          <circle cx="0" cy="0" r="20" fill="url(#blueGradient1)" opacity="0.9"/>
          <circle cx="0" cy="0" r="12" fill="url(#blueGradient2)" opacity="0.8"/>
          <circle cx="0" cy="0" r="5" fill="#c9a962"/>
          
          <circle cx="35" cy="-15" r="15" fill="url(#blueGradient2)" opacity="0.85"/>
          <circle cx="35" cy="-15" r="8" fill="url(#blueGradient3)"/>
          <circle cx="35" cy="-15" r="3" fill="#c9a962"/>
          
          <circle cx="55" cy="5" r="8" fill="url(#blueGradient3)" opacity="0.7"/>
          <circle cx="20" cy="20" r="10" fill="url(#blueGradient2)" opacity="0.6"/>
        </g>

        <g transform="translate(200, 50)">
          <ellipse cx="0" cy="0" rx="25" ry="22" fill="#f5f5f5" opacity="0.95"/>
          <ellipse cx="0" cy="0" rx="15" ry="13" fill="#fdfbf7"/>
          <circle cx="0" cy="0" r="5" fill="#c9a962"/>
          
          <ellipse cx="-20" cy="15" rx="12" ry="10" fill="#f0f0f0" opacity="0.8"/>
          <ellipse cx="20" cy="15" rx="12" ry="10" fill="#f0f0f0" opacity="0.8"/>
        </g>

        <g transform="translate(350, 60)">
          <circle cx="0" cy="0" r="20" fill="url(#blueGradient1)" opacity="0.9"/>
          <circle cx="0" cy="0" r="12" fill="url(#blueGradient2)" opacity="0.8"/>
          <circle cx="0" cy="0" r="5" fill="#c9a962"/>
          
          <circle cx="-35" cy="-15" r="15" fill="url(#blueGradient2)" opacity="0.85"/>
          <circle cx="-35" cy="-15" r="8" fill="url(#blueGradient3)"/>
          <circle cx="-35" cy="-15" r="3" fill="#c9a962"/>
          
          <circle cx="-55" cy="5" r="8" fill="url(#blueGradient3)" opacity="0.7"/>
          <circle cx="-20" cy="20" r="10" fill="url(#blueGradient2)" opacity="0.6"/>
        </g>

        <g fill="url(#leafGradient)" opacity="0.7">
          <ellipse cx="80" cy="80" rx="20" ry="8" transform="rotate(-30 80 80)"/>
          <ellipse cx="30" cy="90" rx="18" ry="6" transform="rotate(-45 30 90)"/>
          <ellipse cx="100" cy="95" rx="15" ry="5" transform="rotate(15 100 95)"/>
          
          <ellipse cx="320" cy="80" rx="20" ry="8" transform="rotate(30 320 80)"/>
          <ellipse cx="370" cy="90" rx="18" ry="6" transform="rotate(45 370 90)"/>
          <ellipse cx="300" cy="95" rx="15" ry="5" transform="rotate(-15 300 95)"/>
          
          <ellipse cx="160" cy="85" rx="15" ry="5" transform="rotate(-20 160 85)"/>
          <ellipse cx="240" cy="85" rx="15" ry="5" transform="rotate(20 240 85)"/>
        </g>

        <g fill="url(#blueGradient3)" opacity="0.5">
          <circle cx="120" cy="70" r="4"/>
          <circle cx="280" cy="70" r="4"/>
          <circle cx="150" cy="100" r="3"/>
          <circle cx="250" cy="100" r="3"/>
        </g>
      </motion.svg>
    )
  }

  return (
    <motion.svg
      viewBox="0 0 150 150"
      className={`w-full h-full ${getRotation()}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <defs>
        <linearGradient id="cornerBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#2c5282" />
        </linearGradient>
        <linearGradient id="cornerBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a7c9b" />
          <stop offset="100%" stopColor="#6b9bb8" />
        </linearGradient>
        <linearGradient id="cornerBlue3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8c5d8" />
          <stop offset="100%" stopColor="#c5dae8" />
        </linearGradient>
        <linearGradient id="cornerLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a7c9b" />
          <stop offset="100%" stopColor="#6b9bb8" />
        </linearGradient>
      </defs>

      <g transform="translate(20, 20)">
        <circle cx="25" cy="25" r="22" fill="url(#cornerBlue1)" opacity="0.9"/>
        <circle cx="25" cy="25" r="14" fill="url(#cornerBlue2)" opacity="0.85"/>
        <circle cx="25" cy="25" r="6" fill="#c9a962"/>
        
        <ellipse cx="60" cy="15" rx="18" ry="16" fill="#f5f5f5" opacity="0.95"/>
        <ellipse cx="60" cy="15" rx="10" ry="9" fill="#fdfbf7"/>
        <circle cx="60" cy="15" r="4" fill="#c9a962"/>
        
        <circle cx="50" cy="50" r="15" fill="url(#cornerBlue2)" opacity="0.8"/>
        <circle cx="50" cy="50" r="8" fill="url(#cornerBlue3)"/>
        <circle cx="50" cy="50" r="3" fill="#c9a962"/>
        
        <circle cx="80" cy="40" r="10" fill="url(#cornerBlue3)" opacity="0.7"/>
        <circle cx="35" cy="70" r="8" fill="url(#cornerBlue2)" opacity="0.6"/>
        <circle cx="70" cy="65" r="6" fill="url(#cornerBlue3)" opacity="0.5"/>
      </g>

      <g fill="url(#cornerLeaf)" opacity="0.6">
        <ellipse cx="90" cy="90" rx="25" ry="8" transform="rotate(-45 90 90)"/>
        <ellipse cx="110" cy="70" rx="20" ry="6" transform="rotate(-30 110 70)"/>
        <ellipse cx="70" cy="110" rx="20" ry="6" transform="rotate(-60 70 110)"/>
        <ellipse cx="120" cy="100" rx="18" ry="5" transform="rotate(-20 120 100)"/>
        <ellipse cx="100" cy="120" rx="18" ry="5" transform="rotate(-70 100 120)"/>
      </g>

      <g fill="url(#cornerBlue3)" opacity="0.4">
        <circle cx="130" cy="50" r="4"/>
        <circle cx="50" cy="130" r="4"/>
        <circle cx="125" cy="80" r="3"/>
        <circle cx="80" cy="125" r="3"/>
      </g>
    </motion.svg>
  )
}
