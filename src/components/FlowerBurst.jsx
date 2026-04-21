'use client'

import { useEffect } from 'react'

const PIECES = [
  { src: '/flowers/flower-top.png',         w: 90,  h: 90,  anim: 1,  delay: 0    },
  { src: '/flowers/flower-top-right.png',   w: 90,  h: 90,  anim: 2,  delay: 0.05 },
  { src: '/flowers/flower-bottom.png',      w: 100, h: 100, anim: 3,  delay: 0.02 },
  { src: '/flowers/flowers-horizontal.png', w: 120, h: 65,  anim: 4,  delay: 0.08 },
  { src: '/flowers/flowers-vertical.png',   w: 65,  h: 110, anim: 5,  delay: 0.04 },
  { src: '/flowers/bow.png',                w: 85,  h: 55,  anim: 6,  delay: 0.1  },
  { src: '/flowers/flower-top.png',         w: 75,  h: 75,  anim: 7,  delay: 0.06 },
  { src: '/flowers/flower-top-right.png',   w: 80,  h: 80,  anim: 8,  delay: 0.03 },
  { src: '/flowers/flower-bottom.png',      w: 90,  h: 90,  anim: 9,  delay: 0.07 },
  { src: '/flowers/flowers-horizontal.png', w: 110, h: 60,  anim: 10, delay: 0.01 },
  { src: '/flowers/flowers-vertical.png',   w: 60,  h: 100, anim: 11, delay: 0.09 },
  { src: '/flowers/bow.png',                w: 80,  h: 50,  anim: 12, delay: 0.05 },
  { src: '/flowers/flower-top.png',         w: 85,  h: 85,  anim: 13, delay: 0.03 },
  { src: '/flowers/flower-bottom.png',      w: 95,  h: 95,  anim: 14, delay: 0.08 },
  { src: '/flowers/flowers-vertical.png',   w: 55,  h: 95,  anim: 15, delay: 0.06 },
  { src: '/flowers/flower-top-right.png',   w: 85,  h: 85,  anim: 16, delay: 0.04 },
  { src: '/flowers/flowers-horizontal.png', w: 115, h: 62,  anim: 17, delay: 0.02 },
  { src: '/flowers/bow.png',                w: 75,  h: 48,  anim: 18, delay: 0.07 },
]

const DURATION = 2.6 // seconds

export default function FlowerBurst({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete()
    }, (DURATION + 0.4) * 1000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ perspective: '600px' }}
    >
      {/* Ripple ring */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 160,
          height: 160,
          marginLeft: -80,
          marginTop: -80,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,197,216,0.5) 0%, transparent 70%)',
          animation: `ripple-expand ${DURATION * 0.5}s ease-out forwards`,
        }}
      />

      {/* Flower pieces */}
      {PIECES.map((p, i) => (
        <img
          key={i}
          src={p.src}
          alt=""
          draggable={false}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: p.w,
            height: p.h,
            marginLeft: -p.w / 2,
            marginTop: -p.h / 2,
            objectFit: 'contain',
            transformOrigin: 'center center',
            opacity: 0,
            animation: `flower-fly-${p.anim} ${DURATION}s ease-out ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  )
}
