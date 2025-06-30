"use client";
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
import { TiCode } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
   
const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav 
    className="w-full fixed top-0 left-0 z-50 bg-black/60 border-b font-sans border-gray-700 p-4 flex justify-center items-center gap-4 backdrop-blur-lg shadow-lg">
        <div className='2xl:w-[80%] lg:w-[90%] xl:w-[90%] md:w-[95%] sm:w-[95%] flex items-center justify-between'>
            <Link href="#hero" className='flex items-center gap-1 text-3xl font-semibold font-sans'>
              <h1 className='text-white'>Dev</h1>
              <span className='text-gray-700 text-3xl'>
                <GoDotFill/>
              </span>
              <h1 className='text-white'>Haris</h1>
            </Link>
            <div className='hidden md:flex items-center gap-3 text-white'>
                <Link href="#services" className='p-1 pl-2 pr-2 hover:bg-zinc-700 transition-all duration-[0.3s] rounded-full'>Services</Link>
                <Link href="#experience" className='p-1 pl-2 pr-2 hover:bg-zinc-700 transition-all duration-[0.3s] rounded-full'>Experience</Link>
                <Link href="#projects" className='p-1 pl-2 pr-2 hover:bg-zinc-700 transition-all duration-[0.3s] rounded-full'>Projects</Link>
                <a 
                  href="https://wa.me/923331321400?text=Hi%20Haris%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ShimmerButton className="pl-4 pr-4 p-2">
                    Contact Me
                  </ShimmerButton>
                </a>
            </div>

            <div className="md:hidden text-white text-3xl" onClick={() => setIsOpen(true)}>
                <GiHamburgerMenu />
            </div>

             {/* Mobile menu */}
         <div className={`fixed top-0 right-0 h-screen w-[60%] bg-black border-l border-zinc-700 z-50 p-6 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-end mb-6">
              <button className="text-white text-3xl" onClick={() => setIsOpen(false)}>
                <IoMdClose />
              </button>
            </div>
            <div className='flex flex-col space-y-4 text-white'>
              <Link href="#services" onClick={() => setIsOpen(false)} className='hover:bg-zinc-700 rounded px-4 py-2'>Services</Link>
              <Link href="#experience" onClick={() => setIsOpen(false)} className='hover:bg-zinc-700 rounded px-4 py-2'>Experience</Link>
              <Link href="#projects" onClick={() => setIsOpen(false)} className='hover:bg-zinc-700 rounded px-4 py-2'>Projects</Link>
              <a 
                href="https://wa.me/923331321400?text=Hi%20Haris%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-zinc-700 rounded px-4 py-2"
              >
              <ShimmerButton className="pl-4 pr-4 p-2">
                Contact Me
              </ShimmerButton>
              </a>
            </div>
          </div>



        </div>

        

    </nav>

    
    </>
  );
}