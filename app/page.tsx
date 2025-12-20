import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">

        <div className="w-full flex flex-col justify-center items-center gap-25">

             <div className="bg-blue-950 w-full h-25">

            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="relative w-95 h-75">
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
