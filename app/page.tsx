"use client"
import Image from "next/image";
import Link from "next/link";
import { useContext, useState} from "react";
import { UserContext } from "@/contextapi/contextAPI";
import { useRouter } from "next/navigation";
export default function Home() {
  const[localName,setLocalName]=useState("")
  const[localGender,setLocalGender]=useState("")
  const {setName,setGender}=useContext(UserContext)
  const router = useRouter();
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    setName(localName)
    setGender(localGender)
    router.push("/maincard");
  }
  return (
    <div className="w-full h-screen flex flex-col items-center">

        <div className="w-full flex flex-col justify-center items-center gap-15">

             <div className="bg-gray-200 w-full h-30 p-5 flex items-center gap-2">
                <Image src="/Images/logo.png" alt="logo" width={80} height={100}></Image>
                <div className=" flex flex-col justify-center items-center">
                  <span className=" flex flex-col text-[1.2rem] font-semibold">P.P SAVANI VIDHYAMANDIR</span>
                  <span className=" flex flex-col text-[0.6rem]">AT POST KATHGADH VYARA.DIST.TAPI </span>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="relative w-95 h-70">
                <Image src="/Images/frontP_image.jpg" 
                fill
                alt="front_image"
                className="rounded-[5px]" ></Image>
              </div>
{/* ----------------------------Form------------------------------------------------- */}
              <form onSubmit={handleSubmit} action="" className=" flex flex-col gap-2 items-center">
                  <input type="text" placeholder="Enter you full Name"
                  value={localName}
                  onChange={(e)=>setLocalName(e.target.value)}
                  className="border-2 border-b-cyan-600 p-1" />

                  <label>Gender</label>
                  <label>Male
                    <input type="radio"
                    value="Male"
                    checked={localGender==="Male"}
                    onChange={(e)=>setLocalGender(e.target.value)}
                    className="border-2 border-b-cyan-600 p-1"/>
                  </label>
                  <label>Female 
                    <input type="radio" 
                    value="Female"
                    checked={localGender==="Female"}
                    onChange={(e)=>setLocalGender(e.target.value)}
                    className="border-2 border-b-cyan-600 p-1"/>
                  </label>

                  <button type="submit" 
                  className="w-35 bg-amber-700 px-5 rounded-[7px] text-amber-50 text-[1.5rem]">open</button>
              </form>
{/* -------------------------------------------------------------------------------------------- */}
            </div>

        </div>

    </div>
  );
}
