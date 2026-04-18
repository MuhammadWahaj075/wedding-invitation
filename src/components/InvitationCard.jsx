'use client'

import { motion } from 'framer-motion'
import FloralDecoration from './FloralDecoration'

export default function InvitationCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="relative max-w-lg w-full mx-4"
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="invitation-card bg-wedding-cream p-8 md:p-12 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40">
          <FloralDecoration position="corner-top-left" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40">
          <FloralDecoration position="corner-top-right" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40">
          <FloralDecoration position="corner-bottom-left" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40">
          <FloralDecoration position="corner-bottom-right" />
        </div>

        <div className="absolute inset-4 md:inset-6 border-2 border-wedding-blue/20 rounded-lg pointer-events-none" />
        
        <div className="relative z-10 text-center py-4">
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="couple-names">
              Alessandro
            </h1>
            <div className="flex items-center justify-center gap-2 -mt-2">
              <span className="couple-names text-3xl md:text-4xl">&</span>
            </div>
            <h1 className="couple-names -mt-2">
              Laura
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="wedding-text text-lg md:text-xl mb-6 italic"
          >
            Annunciano con gioia il loro matrimonio
          </motion.p>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-6 space-y-3">
            <div className="wedding-detail">
              <span className="wedding-detail-icon">📅</span>
              <span className="wedding-text text-xl md:text-2xl font-semibold">
                5 giugno 2027
              </span>
            </div>
            <div className="wedding-detail">
              <span className="wedding-detail-icon">🕐</span>
              <span className="wedding-text text-lg md:text-xl">
                alle ore 15:00
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="my-6">
            <p className="wedding-text text-base md:text-lg mb-2">Presso la chiesa:</p>
            <div className="wedding-detail">
              <span className="wedding-detail-icon">⛪</span>
              <span className="wedding-text text-lg md:text-xl font-semibold">
                Santa Teresa alla Kalsa
              </span>
            </div>
          </motion.div>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-6">
            <p className="wedding-text text-base md:text-lg italic mb-2">
              Dopo la cerimonia gli sposi sono lieti di ricevere parenti ed amici
            </p>
            <p className="wedding-text text-base mb-2">Presso:</p>
            <div className="wedding-detail">
              <span className="wedding-detail-icon">📍</span>
              <span className="wedding-text text-lg md:text-xl font-semibold">
                Tenuta Principe Mirto, Villafrati
              </span>
            </div>
          </motion.div>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-6">
            <p className="wedding-text text-lg md:text-xl flex items-center justify-center gap-2">
              È gradita cortese conferma! 
              <span className="text-2xl">😊</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="my-8">
            <p className="font-script text-3xl md:text-4xl text-wedding-blue mb-5">
              Parteciperai?
            </p>
            <div className="flex flex-row gap-2 justify-center items-center">
              <motion.button
                className="rsvp-button rsvp-yes"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/?text=Sì, parteciperò con piacere al vostro matrimonio! 🎉', '_blank')}
              >
                <span className="mr-1.5 text-sm">✓</span>
                Sì, con piacere
              </motion.button>
              <motion.button
                className="rsvp-button rsvp-no"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/?text=Mi dispiace, purtroppo non potrò partecipare. Vi auguro ogni felicità! 💕', '_blank')}
              >
                <span className="mr-1.5 text-sm">✗</span>
                No, mi dispiace
              </motion.button>
            </div>
          </motion.div>

          <div className="decorative-line" />
          <motion.div 
            variants={itemVariants} 
            className="my-6 bg-wedding-blue/5 rounded-lg p-4 md:p-6"
          >
            <p className="wedding-text text-sm md:text-base italic leading-relaxed">
              Conviviamo già da anni in una casa, per questo non abbiamo creato una lista nozze.
              Il pensiero più bello che possiate farci è essere con noi nel nostro grande giorno!
            </p>
            <p className="wedding-text text-sm md:text-base italic mt-3 leading-relaxed">
              Se gradite farci un regalo, preferiamo metterlo nel salvadanaio e quando lo useremo,
              avrete contribuito alla nostra felicità!
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="my-4">
            <p className="wedding-text text-base md:text-lg flex items-center justify-center gap-2">
              È gradito regalo in busta!
              <span className="text-xl">💝</span>
            </p>
          </motion.div>

          <div className="decorative-line" />

          <motion.div 
            variants={itemVariants}
            className="mt-6"
          >
            <p className="wedding-text text-xl md:text-2xl font-semibold flex items-center justify-center gap-2">
              Grazie di cuore
              <motion.span 
                className="text-2xl heart-icon"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ❤️
              </motion.span>
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-4 flex justify-center"
          >
            <span className="text-3xl">💍</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
