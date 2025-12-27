"use client"
import { useContext, useEffect, useRef } from "react"
import { UserContext } from "@/contextapi/contextAPI"
import { motion } from "framer-motion"
import Image from "next/image"
import { guestList } from "@/data/data"
const MainCard = () => {
  const { name, gender } = useContext(UserContext)
  const prefix = gender === "Male" ? "Mr." : "Ms."
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
        <div className="font-semibold text-amber-50">P.P Savani Vidhyamandir</div>
      </div>

      <div className="relative z-10 text-white text-center mt-6 px-4">
        <h1 className="text-2xl font-semibold">
          {prefix} {name},
        </h1>

        <p className="mt-3 text-sm leading-relaxed">
          P. P. Savani Vidya Mandir cordially welcomes you and takes great pleasure
          in inviting you to our <span className="font-bold"> Annual Function 2025-2026</span>.
        </p>
      </div>
      <div className="mt-5 z-100  w-80 h-60 flex flex-col justify-center items-center gap-5">
        <div className="bg-cyan-950/60 text-amber-50 flex flex-col justify-center items-center p-5 rounded-2xl">
          <div>:: Date ::</div>
          <div>2,3,4-Jan-2026, Saturday</div>
          <div>Time: 4:30pm To 9:00 pm</div>
        </div>
        <div className="bg-cyan-950/60 text-amber-50 flex flex-col justify-center items-center p-5 rounded-2xl">
          <div>:: Venue ::</div>
          <div>P.P. Savani Vidhyamandir</div>
          <div>Katgadh Vyara,Dist.Tapi</div>
        </div>
      </div>
    </motion.div>
  )
}

export default MainCard
