"use client"
import { useContext } from 'react'
import { UserContext } from '@/contextapi/contextAPI'
import { motion } from 'framer-motion'
const MainCard = () => {
  const {name,gender}=useContext(UserContext)
  return (
    <motion.div className="bg-[url('/Images/card/bg2.jpg')] bg-center bg-cover min-h-screen w-full flex flex-col items-center"
    initial={{y:-800,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:3, ease:'easeOut'}}
    >
      <h2>{name}</h2>
      <h2>{gender}</h2>
    </motion.div>
  )
}

export default MainCard