"use client"
import { MenuIcon, Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenueOpen, setisMenueOpen] = useState(false);
  return (
    <div>
    <div className="flex justify-between items-center bg-black py-4 px-[32px] sm:px-[60px] md:px-[120px] lg:px-[200px]">
          <div className="text-white border p-2 text-sm sm:text-md md:text-lg lg:text-xl">Logo</div>
          <ul className=" hidden text-white sm:flex justify-end  items-center sm:gap-x-[25px] md:gap-x-[30px] lg:gap-x-[50px] text-sm sm:text-md md:text-lg lg:text-xl flex-grow ">
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
          </ul>
          <button onClick={()=>setisMenueOpen(!isMenueOpen)} className="text-white sm:hidden h-6 w-6 justify-end items-center">
            {isMenueOpen ? (<X/>):(<MenuIcon/>)}
          </button>
    </div>
    {isMenueOpen && (
      <div>
        <ul className="flex flex-col gap-y-[10px] sm:flex-row gap-x-[10px] sm:gap-y-[0px] sm:gap-x-[20px] text-white sm:text-sm md:text-md lg:text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
    )}
    </div>
  );
}
