'use client'

import { motion } from 'framer-motion'

export default function FloralDecoration({ position }) {

  // ── TOP-LEFT CORNER ── white rose + blue leaves (flower-top.png)
  if (position === 'corner-top-left') {
    return (
      <motion.img
        src="/flowers/flower-top.png"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          top: 0,
          left: 0,
          width: 'clamp(130px, 35vw, 220px)',
          height: 'clamp(130px, 35vw, 220px)',
          objectFit: 'contain',
          objectPosition: 'top left',
          zIndex: 20,
          transform: 'translate(-8%, -8%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        draggable={false}
      />
    )
  }

  // ── TOP-RIGHT CORNER ── flower-top-right.png
  if (position === 'corner-top-right') {
    return (
      <motion.img
        src="/flowers/flower-top-right.png"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          top: 0,
          right: 0,
          width: 'clamp(130px, 35vw, 220px)',
          height: 'clamp(130px, 35vw, 220px)',
          objectFit: 'contain',
          objectPosition: 'top right',
          zIndex: 20,
          transform: 'translate(8%, -8%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        draggable={false}
      />
    )
  }

  if (position === 'corner-bottom-right') {
    return (
      <motion.img
        src="/flowers/flower-bottom.png"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          bottom: 0,
          right: 0,
          width: 'clamp(140px, 38vw, 210px)',
          height: 'clamp(155px, 41vw, 230px)',
          objectFit: 'contain',
          objectPosition: 'bottom right',
          zIndex: 18,
          transform: 'translate(8%, 18%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        draggable={false}
      />
    )
  }

  if (position === 'bottom-ribbon') {
    return (
      <motion.img
        src="/flowers/ribbon.png"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          bottom: 0,
          left: '50%',
          width: 'clamp(180px, 50vw, 260px)',
          objectFit: 'contain',
          zIndex: 12,
          transform: 'translateX(-50%) translateY(50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        draggable={false}
      />
    )
  }

  // ── BOTTOM LAYER 2 ── horizontal flowers spanning full bottom
  if (position === 'bottom-horizontal') {
    return (
      <motion.img
        src="/flowers/flowers-horizontal.png"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          bottom: 0,
          left: '50%',
          width: '100%',
          objectFit: 'contain',
          zIndex: 14,
          transform: 'translateX(-50%) translateY(30%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        draggable={false}
      />
    )
  }

  // ── BOTTOM LAYER 3 ── bow (front center)
  if (position === 'bottom-bow') {
    return (
      <motion.img
        src="/flowers/bow.png"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          bottom: 0,
          left: '50%',
          width: 'clamp(90px, 28vw, 130px)',
          objectFit: 'contain',
          zIndex: 16,
          transform: 'translateX(-50%) translateY(20%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        draggable={false}
      />
    )
  }

  // ── ENVELOPE decorations ──
  if (position === 'envelope-top-right') {
    return (
      <motion.img
        src="/flowers/flower-top.png"
        alt=""
        className="absolute pointer-events-none select-none object-contain"
        style={{
          top: '-15px',
          right: '-15px',
          width: '130px',
          height: '130px',
          transform: 'scaleX(-1)',
          zIndex: 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        draggable={false}
      />
    )
  }

  if (position === 'envelope-bottom-left') {
    return (
      <motion.img
        src="/flowers/flower-bottom.png"
        alt=""
        className="absolute pointer-events-none select-none object-contain"
        style={{
          bottom: '-20px',
          left: '-20px',
          width: '140px',
          height: '140px',
          transform: 'scaleX(-1)',
          zIndex: 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        draggable={false}
      />
    )
  }

  return null
}
