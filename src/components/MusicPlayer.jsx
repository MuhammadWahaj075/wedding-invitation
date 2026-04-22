'use client'

import { useRef, useEffect } from 'react'

export default function MusicPlayer({ play = false, startAt = 42 }) {
  const audioRef = useRef(null)
  const hasSeekedRef = useRef(false)

  useEffect(() => {
    if (play && audioRef.current) {
      const playAudio = async () => {
        try {
          if (!hasSeekedRef.current) {
            audioRef.current.currentTime = startAt
            hasSeekedRef.current = true
          }
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
          if (!hasSeekedRef.current) {
            audioRef.current.currentTime = startAt
            hasSeekedRef.current = true
          }
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
  }, [play, startAt])

  return (
    <audio
      ref={audioRef}
      src="/music/Ordinary.mp3"
      loop
      preload="auto"
    />
  )
}
