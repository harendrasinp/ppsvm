"use client"
import { useContext } from "react"
import { UserContext } from "@/contextapi/contextAPI"
import { motion } from "framer-motion"

const MainCard = () => {
  const { name, gender } = useContext(UserContext)

  return (
    <motion.div
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* 🎥 Background Video */}
      <video
        src="Images/card/bg3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌑 Overlay (text clear dikhane ke liye) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 📝 Content */}
      <div className="relative z-10 text-white text-center">
        <h2 className="text-5xl font-bold mb-4">{name}</h2>
        <h2 className="text-2xl">{gender}</h2>
      </div>
    </motion.div>
  )
}

export default MainCard
