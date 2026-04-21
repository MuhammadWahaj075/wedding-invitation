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
      className="relative w-full mx-auto"
      style={{ maxWidth: 'min(448px, calc(100vw - 24px))' }}
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="invitation-card bg-wedding-cream px-6 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <div className="absolute inset-3 border border-wedding-blue/30 pointer-events-none" style={{zIndex:1}} />
        <div className="absolute inset-5 border border-wedding-blue/15 pointer-events-none" style={{zIndex:1}} />
        
        <div className="relative z-10 text-center pt-2 pb-0">
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
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.open('https://maps.app.goo.gl/HYGVmfJs6dhR1jYQ9', '_blank') }}
              rel="noopener noreferrer"
              className="wedding-detail inline-flex hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span className="wedding-detail-icon">⛪</span>
              <span className="wedding-text text-lg md:text-xl font-semibold underline underline-offset-2 decoration-wedding-blue/40">
                Santa Teresa alla Kalsa
              </span>
            </a>
          </motion.div>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-6">
            <p className="wedding-text text-base md:text-lg italic mb-2">
              Dopo la cerimonia gli sposi sono lieti di ricevere parenti ed amici
            </p>
            <p className="wedding-text text-base mb-2">Presso:</p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.open('https://maps.app.goo.gl/kbdSdZuG1vzEFGsHA', '_blank') }}
              rel="noopener noreferrer"
              className="wedding-detail inline-flex hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span className="wedding-detail-icon">📍</span>
              <span className="wedding-text text-lg md:text-xl font-semibold underline underline-offset-2 decoration-wedding-blue/40">
                Tenuta Principe Mirto, Villafrati
              </span>
            </a>
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
                onClick={() => window.open('https://wa.me/923022838789?text=' + encodeURIComponent('Ciao! Grazie per l\'invito, verrò con piacere al vostro matrimonio! 🎉'), '_blank')}
              >
                <span className="mr-1.5 text-sm">✓</span>
                Sì, con piacere
              </motion.button>
              <motion.button
                className="rsvp-button rsvp-no"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/923022838789?text=' + encodeURIComponent('Ciao! Grazie per l\'invito, purtroppo non potrò partecipare. Vi auguro ogni felicità! 💕'), '_blank')}
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
            <p className="wedding-text text-xl md:text-2xl font-semibold text-center">
              Grazie di cuore&nbsp;
              <motion.span 
                className="text-2xl heart-icon inline-block"
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

          {/* Spacer so content doesn't hide behind bottom flowers */}
          <div className="h-20 sm:h-16" />
        </div>
      </motion.div>

      {/* All decorations rendered AFTER card so they appear on top */}
      <FloralDecoration position="corner-top-left" />
      <FloralDecoration position="corner-top-right" />
      <FloralDecoration position="corner-bottom-right" />
      <FloralDecoration position="bottom-ribbon" />
      <FloralDecoration position="bottom-horizontal" />
      <FloralDecoration position="bottom-bow" />
    </motion.div>
  )
}
