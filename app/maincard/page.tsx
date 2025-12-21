"use client"
import { useContext } from 'react'
import { UserContext } from '@/contextapi/contextAPI'
const MainCard = () => {
  const {name,gender}=useContext(UserContext)
  return (
    <div>
      <h2>{name}</h2>
      <h2>{gender}</h2>
    </div>
  )
}

export default MainCard