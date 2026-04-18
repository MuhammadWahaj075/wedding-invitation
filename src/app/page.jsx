'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Envelope from '@/components/Envelope'
import InvitationCard from '@/components/InvitationCard'
import FloralBackground from '@/components/FloralBackground'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <FloralBackground />
      
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
