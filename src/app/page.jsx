'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Envelope from '@/components/Envelope'
import InvitationCard from '@/components/InvitationCard'
import FloralBackground from '@/components/FloralBackground'
import FlowerBurst from '@/components/FlowerBurst'
import MusicPlayer from '@/components/MusicPlayer'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBurst, setShowBurst] = useState(false)

  const handleOpen = () => {
    setShowBurst(true)
    setTimeout(() => {
      setIsOpen(true)
    }, 800)
  }

  return (
    <main className=" flex items-start sm:items-center justify-center px-2 py-8 relative overflow-y-hidden">
      <FloralBackground />
      
      <MusicPlayer play={isOpen} />
      
      {showBurst && <FlowerBurst onComplete={() => setShowBurst(false)} />}
      
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <Envelope key="envelope" onOpen={handleOpen} />
        ) : (
          <InvitationCard key="card" />
        )}
      </AnimatePresence>
    </main>
  )
}
