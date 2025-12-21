"use client"
import { useContext, useEffect, useRef } from "react"
import { UserContext } from "@/contextapi/contextAPI"
import { motion } from "framer-motion"
import Image from "next/image"

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
      className="relative w-full h-screen flex flex-col items-center  overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}>
      {/* Audio */}
      <audio ref={audioRef} src="/audio/toofan.mp3" />

      {/* Video */}
      <video
        src="Images/card/bg3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-80 h-25 bg-gray-300/40 mt-25 z-25 flex flex-col items-center rounded-[9px]">
        <div className="relative w-25 h-28">
          <div><Image src="/Images/logo.png" alt="logo" fill></Image></div>
        </div>
        <div className="font-semibold">P.P Savani Vidhyamandir</div>
      </div>
      <div className="relative z-10 text-white">
        <h2>{name}</h2>
      </div>
    </motion.div>
  )
}

export default MainCard
