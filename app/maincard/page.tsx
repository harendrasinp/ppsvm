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
        <h1 className="text-2xl font-semibold cursive-text text-amber-200">
          {prefix} {name},
        </h1>

        <p className="mt-2 text-sm text-center text-amber-200">
          P.P Savani Vidhyamandir cordially invites you
          to celebrate the Annual Function with us.
          The evening will showcase vibrant cultural performances
          and the remarkable talents of our students.
          Your esteemed presence will add grace to the occasion.
        </p>
        <p className="font-semibold cursive-text">Annual Function 2025-2026</p>
      </div>
      <div className="mt-5 z-100  w-80 h-60 flex flex-col justify-center items-center gap-5">
        <div className="bg-cyan-950/60 text-amber-50 flex flex-col justify-center items-center px-8 rounded-2xl">
          <div className="cursive-text text-amber-200 text-2xl">:: Date ::</div>
          <div>2,3,4-Jan-2026, Saturday</div>
          <div>Time: 4:30pm To 9:00 pm</div>
        </div>
        <div className="bg-cyan-950/60 text-amber-50 flex flex-col justify-center items-center rounded-2xl map-wrappe p-5">
          <div className="cursive-text text-amber-200 text-2xl">:: Venue ::</div>
          {/* <div>P.P. Savani Vidhyamandir</div>
          <div>Katgadh Vyara,Dist.Tapi</div> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.550873808928!2d73.42929867429254!3d21.130464684279506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be078ce451f1b81%3A0xcb2a8caaa4bde2d8!2sP%20P%20Savani%20Vidhyamandir%20-%20Vyara!5e0!3m2!1sen!2sin!4v1766897572254!5m2!1sen!2sin"
            width={220}
            height={100}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default MainCard

