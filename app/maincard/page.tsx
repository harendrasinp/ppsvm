"use client"
import { useContext, useEffect, useRef } from "react"
import { UserContext } from "@/contextapi/contextAPI"
import { motion } from "framer-motion"
import Image from "next/image"
import Footer from "./components/footer"

const MainCard = () => {
  const { name, gender } = useContext(UserContext)
  const prefix = gender === "Male" ? "Mr." : "Ms."
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8
      audioRef.current.play().catch(() => { })
    }
  }, [])

  return (
    <motion.div
      className="relative w-full min-h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Audio */}
      <audio ref={audioRef} src="/audio/toofan.mp3" />

      {/* Background Video */}
      <video
        src="/Images/card/bg3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Logo Card */}
      <div className="w-full max-w-[320px] mt-18 bg-gray-300/40 flex flex-col items-center rounded-xl py-2 z-10">
        <div className="relative w-25 h-20">
          <Image src="/Images/logo.png" alt="logo" fill />
        </div>
        <div className="font-semibold text-amber-50 text-center mt-1 text-[1.2rem]">
          P.P. Savani Vidhyamandir
        </div>
      </div>

      {/* Invitation Text */}
      <div className="relative w-full h-47 mt-4 px-4">
        {/* Background Image */}
        <Image
          src="/images/card/letter2.png"
          alt="Banner"
          fill
          priority
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl font-semibold cursive-text text-amber-200">
            {prefix} {name},
          </h1>

          <p className="mt-1 text-sm font-semibold text-amber-200 px-6">
            You are cordially invited to attend the Annual Function of
            P. P. Savani Vidhyamandir. Your gracious presence will make
            the occasion truly special and memorable.
            <b className="block mt-1 text-amber-200">
              Annual Function 2025–2026
            </b>
          </p>
        </div>
      </div>



      {/* Info Cards */}
      <div className="mt-2 w-full max-w-90 flex flex-col gap-4 px-4 z-10">
        {/* Date Card */}
        <div className="bg-cyan-950/60 text-amber-50 rounded-2xl py-1 text-center">
          <div className="cursive-text text-amber-200 text-[1.6rem]">:: Date ::</div>
          <div className="text-sm">2, 3, 4 Jan 2026 (Saturday)</div>
          <div className="text-sm">4:30 PM – 9:00 PM</div>
        </div>

        {/* Venue Card */}
        <div className="bg-cyan-950/60 text-amber-50 rounded-2xl p-1 text-center">
          <div className="cursive-text text-amber-200 text-[1.6rem]">:: Venue ::</div>
          <div className="text-xs">P.P. Savani Vidhyamandir</div>
          <div className="text-xs">Katgadh, Vyara – Dist. Tapi</div>

          <div className="w-full h-30 mt-1 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.550873808928!2d73.42929867429254!3d21.130464684279506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be078ce451f1b81%3A0xcb2a8caaa4bde2d8!2sP%20P%20Savani%20Vidhyamandir%20-%20Vyara!5e0!3m2!1sen!2sin!4v1766897572254!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      {/* Footer (ALWAYS VISIBLE) */}
      <div className="relative z-20 w-full mt-1">
        <Footer />
      </div>
    </motion.div>
  )
}

export default MainCard
