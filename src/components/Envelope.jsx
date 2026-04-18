'use client'

import { motion } from 'framer-motion'
import WaxSeal from './WaxSeal'
import FloralDecoration from './FloralDecoration'

export default function Envelope({ onOpen }) {
  return (
    <motion.div
      className="envelope-wrapper flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.5,
        rotateY: 180,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FloralDecoration position="top" />
        </motion.div>

        <div className="envelope relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern id="envelope-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="1" fill="#4a7c9b"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#envelope-pattern)"/>
            </svg>
          </div>

          <motion.div 
            className="absolute top-0 left-0 right-0 z-20"
            style={{
              height: '180px',
              background: 'linear-gradient(180deg, #e3eef4 0%, #d1e2eb 100%)',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-white to-gray-50 rounded-b-lg" />
          <div className="absolute inset-4 top-32 border border-gray-200 rounded opacity-30" />
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-50" />
          <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-50" />
        </div>

        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 z-30"
          style={{ top: '140px' }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <WaxSeal onClick={onOpen} />
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-8 text-wedding-blue font-script text-xl opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        clicca qui per aprire
      </motion.p>

      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-6 h-6 text-wedding-blue opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
