"use client";
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
import { TiCode } from "react-icons/ti";

export default function Navbar() {
   

  return (
    <>
    <nav className="fixed top-0 left-0 z-50 bg-black/60 border-b font-sans border-gray-700 p-4 flex justify-center items-center gap-4 w-full backdrop-blur-lg shadow-lg">
        <div className='2xl:w-[80%] lg:w-[90%] flex items-center justify-between'>
            <Link href="/" className='flex items-center gap-1 text-3xl font-semibold font-sans'>
              <h1 className='text-white'>Dev</h1>
              <span className='text-gray-700 text-5xl'>
                <TiCode/>
              </span>
              <h1 className='text-white'>Haris</h1>
            </Link>
            <div className='flex items-center gap-3 text-white'>
                <Link href="/projects" className='p-1 pl-2 pr-2 hover:bg-zinc-700 transition-all duration-[0.3s] rounded-full'>Projects</Link>
                <Link href="/about" className='p-1 pl-2 pr-2 hover:bg-zinc-700 transition-all duration-[0.3s] rounded-full'>About</Link>
                <Link href="/pricing" className='p-1 pl-2 pr-2 hover:bg-zinc-700 transition-all duration-[0.3s] rounded-full'>Skills</Link>
                <ShimmerButton className='pl-4 pr-4 p-2'>Contact Me</ShimmerButton> 
            </div>
        </div>
        

    </nav>

    
    </>
  );
}