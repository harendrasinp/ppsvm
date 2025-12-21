"use client"
import { useContext, useEffect, useRef } from "react"
import { UserContext } from "@/contextapi/contextAPI"
import { motion } from "framer-motion"

const MainCard = () => {
  const { name, gender } = useContext(UserContext)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked")
      })
    }
  }, [])

  return (
    <motion.div
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* 🎵 Audio */}
      <audio ref={audioRef} src="/audio/sound.mp3" />

      {/* 🎥 Video */}
      <video
        src="Images/card/bg3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white">
        <h2>{name}</h2>
        <h2>{gender}</h2>
      </div>
    </motion.div>
  )
}

export default MainCard
