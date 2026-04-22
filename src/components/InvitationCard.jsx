'use client'

import { motion } from 'framer-motion'
import FloralDecoration from './FloralDecoration'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="simple-icon" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 9h16" />
      <path d="M9 13h2" />
      <path d="M13 13h2" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="simple-icon" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5" />
      <path d="M12 12l3 2" />
    </svg>
  )
}

function ChurchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="simple-icon" aria-hidden="true">
      <path d="M12 3v5" />
      <path d="M9.5 5.5h5" />
      <path d="M6 10.5L12 6l6 4.5" />
      <path d="M7 10.5V20" />
      <path d="M17 10.5V20" />
      <path d="M5 20h14" />
      <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="simple-icon" aria-hidden="true">
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export default function InvitationCard() {
  const confirmationNumber = '393296121722'

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
            <h1 className="couple-names invitation-script-title">
              Alessandro
            </h1>
            <div className="flex items-center justify-center gap-2 -mt-2">
              <span className="couple-names invitation-ampersand">&</span>
            </div>
            <h1 className="couple-names invitation-script-title -mt-2">
              Laura
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="invitation-intro mb-6"
          >
            Annunciano con gioia il loro matrimonio
          </motion.p>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-7 space-y-3 invitation-details-block">
            <div className="wedding-detail invitation-detail-row">
              <CalendarIcon />
              <span className="wedding-text invitation-highlight text-xl md:text-2xl font-semibold">
                5 giugno 2027
              </span>
            </div>
            <div className="wedding-detail invitation-detail-row">
              <ClockIcon />
              <span className="wedding-text invitation-highlight text-lg md:text-xl">
                alle ore 15
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="my-7 space-y-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.open('https://maps.app.goo.gl/HYGVmfJs6dhR1jYQ9', '_blank') }}
              rel="noopener noreferrer"
              className="wedding-detail invitation-detail-row inline-flex hover:opacity-70 transition-opacity cursor-pointer"
            >
              <ChurchIcon />
              <span className="wedding-text text-left text-lg md:text-xl leading-tight underline underline-offset-2 decoration-wedding-blue/30">
                <span className="block invitation-muted">Presso la chiesa</span>
                <span className="block invitation-highlight font-semibold">Santa Teresa alla Kalsa</span>
              </span>
            </a>
          </motion.div>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-7 space-y-3">
            <p className="invitation-copy text-base md:text-lg italic mb-1">
              Dopo la cerimonia gli sposi sono lieti di ricevere parenti ed amici
            </p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.open('https://maps.app.goo.gl/kbdSdZuG1vzEFGsHA', '_blank') }}
              rel="noopener noreferrer"
              className="wedding-detail invitation-detail-row inline-flex hover:opacity-70 transition-opacity cursor-pointer"
            >
              <PinIcon />
              <span className="wedding-text text-left text-lg md:text-xl leading-tight underline underline-offset-2 decoration-wedding-blue/30">
                <span className="block invitation-muted">Ricevimento presso</span>
                <span className="block invitation-highlight font-semibold">Tenuta Principe Mirto a Villafrati</span>
              </span>
            </a>
          </motion.div>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-7">
            <p className="invitation-highlight text-lg md:text-xl italic">
              È gradita cortese conferma!
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="my-6 invitation-message-box"
          >
            <p className="invitation-copy text-sm md:text-base italic leading-relaxed">
              Conviviamo gia da anni in una casa, per questo non abbiamo creato una lista nozze.
              Il pensiero piu bello che possiate farci e essere con noi nel nostro grande giorno.
            </p>
            <p className="invitation-copy text-sm md:text-base italic mt-4 leading-relaxed">
              Se gradite farci un regalo, preferiamo metterlo nel salvadanaio e quando lo useremo,
              avrete contribuito alla nostra felicita.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="my-5">
            <p className="invitation-highlight text-base md:text-lg italic">
              E gradito regalo in busta.
            </p>
          </motion.div>

          <div className="decorative-line" />

          <motion.div variants={itemVariants} className="my-8">
            <p className="font-script text-3xl md:text-4xl text-wedding-blue mb-5">
              Conferma la tua presenza
            </p>
            <div className="flex flex-row gap-2 justify-center items-center flex-wrap">
              <motion.button
                className="rsvp-button rsvp-yes"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/' + confirmationNumber + '?text=' + encodeURIComponent('Buonasera! Grazie per l\'invito, confermo con piacere la mia presenza al vostro matrimonio.'), '_blank')}
              >
                Sì, con piacere
              </motion.button>
              <motion.button
                className="rsvp-button rsvp-no"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/' + confirmationNumber + '?text=' + encodeURIComponent('Buonasera! Grazie per l\'invito, purtroppo non riesco a partecipare al vostro matrimonio.'), '_blank')}
              >
                No, mi dispiace
              </motion.button>
            </div>
          </motion.div>

          <div className="h-20 sm:h-16" />
        </div>
      </motion.div>

      <FloralDecoration position="corner-top-left" />
      <FloralDecoration position="corner-top-right" />
      <FloralDecoration position="corner-bottom-right" />
      <FloralDecoration position="bottom-ribbon" />
      <FloralDecoration position="bottom-horizontal" />
      <FloralDecoration position="bottom-bow" />
    </motion.div>
  )
}
