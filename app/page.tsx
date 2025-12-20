import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">

        <div className="w-full flex flex-col justify-center items-center gap-25">

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
              <button className="w-35 bg-amber-700 px-5 rounded-[7px] text-amber-50 text-[1.5rem]"><Link href="/maincard">OPEN</Link></button>
            </div>

        </div>

    </div>
  );
}
