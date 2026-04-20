'use client'

import { motion } from 'framer-motion'

export default function FloralDecoration({ position }) {
  const getImageConfig = () => {
    switch (position) {
      case 'corner-top-left':
        return {
          src: '/flowers/flower-top.png',
          className: 'absolute -top-6 -left-6 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48',
          style: {}
        }
      case 'corner-top-right':
        return {
          src: '/flowers/flower-top.png',
          className: 'absolute -top-6 -right-6 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48',
          style: { transform: 'scaleX(-1)' }
        }
      case 'corner-bottom-left':
        return {
          src: '/flowers/flower-bottom.png',
          className: 'absolute -bottom-8 -left-8 w-44 h-56 md:w-52 md:h-64 lg:w-56 lg:h-72',
          style: { transform: 'scaleX(-1)' }
        }
      case 'corner-bottom-right':
        return {
          src: '/flowers/flower-bottom.png',
          className: 'absolute -bottom-8 -right-8 w-44 h-56 md:w-52 md:h-64 lg:w-56 lg:h-72',
          style: {}
        }
      case 'top':
        return {
          src: '/flowers/flower-top.png',
          className: 'w-32 h-32',
          style: {}
        }
      case 'envelope-top-right':
        return {
          src: '/flowers/flower-top.png',
          className: 'w-full h-full',
          style: { transform: 'scaleX(-1)' }
        }
      case 'envelope-bottom-left':
        return {
          src: '/flowers/flower-bottom.png',
          className: 'w-full h-full',
          style: { transform: 'scaleX(-1)' }
        }
      default:
        return {
          src: '/flowers/flower-top.png',
          className: 'w-full h-full',
          style: {}
        }
    }
  }

  const config = getImageConfig()

  return (
    <motion.img
      src={config.src}
      alt="Floral decoration"
      className={`object-contain pointer-events-none select-none ${config.className}`}
      style={{
        ...config.style,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      draggable={false}
    />
  )
}
