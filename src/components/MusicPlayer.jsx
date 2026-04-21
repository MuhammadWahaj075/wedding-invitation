'use client'

import { useRef, useEffect } from 'react'

export default function MusicPlayer({ play = false }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (play && audioRef.current) {
      const playAudio = async () => {
        try {
          audioRef.current.volume = 0.5
          await audioRef.current.play()
        } catch (error) {
          console.log('Autoplay blocked, waiting for user interaction')
        }
      }
      playAudio()
    }
  }, [play])

  useEffect(() => {
    const handleFirstInteraction = async () => {
      if (audioRef.current && play) {
        try {
          audioRef.current.volume = 0.5
          await audioRef.current.play()
        } catch (error) {
          console.log('Still waiting for interaction')
        }
      }
    }

    document.addEventListener('click', handleFirstInteraction, { once: true })
    document.addEventListener('touchstart', handleFirstInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [play])

  return (
    <audio
      ref={audioRef}
      src="/music/Ordinary.mp3"
      loop
      preload="auto"
    />
  )
}
