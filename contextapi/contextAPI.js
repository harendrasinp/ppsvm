"use client"
import { createContext, useState } from "react";
export const UserContext= createContext()
export const ContextProvider=({children})=>{
    const [name,setName]=useState("")
    const [gender,setGender]=useState("")
    return(
        <UserContext.Provider value={{name,setName,gender,setGender}}>
            {children}
        </UserContext.Provider>
    )
}

