"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { RxDividerVertical } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

export default function Hero(){

     const words = [
            {
              text: "A ",
              className: "text-white"
            },
            {
              text: "Solution-Oriented ",
              className: "text-white"
            },
            {
              text: "Software ",
              className: "text-white"
            },
            {
              text: "Engineer ",
              className: "text-white"
            }
          ];

    return(
        <div className="relative flex flex-col justify-center items-center w-full h-screen border-b border-gray-700">
            <div className="text-white text-center font-sans font-semibold">
                <h2 className="text-4xl">Hey, This is</h2>
                <h1 className="text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Kunwar Muhammad Haris</h1>
                <h1 className="text-5xl">I'm <AuroraText>Software Engineer</AuroraText></h1> 
                <TypewriterEffectSmooth words={words}/>
                <div className="flex items-center justify-center gap-3">
                  <a 
                    href="/resume.pdf"
                    download
                  >
                  <InteractiveHoverButton>Get in touch | Download Resume</InteractiveHoverButton>
                  </a>
                  <span className="text-3xl"><RxDividerVertical/></span>
                  <a href="https://www.linkedin.com/in/kunwar-muhammad-haris-20054422b/" className="text-2xl p-2 rounded-full bg-zinc-700"><FaLinkedinIn/></a>
                  <a href="https://github.com/Haris-21" className="text-2xl p-2 rounded-full bg-zinc-600"><TbBrandGithubFilled/></a>
                  <a href="mailto:kunwarharis2004@gmail.com" className="text-2xl p-2 rounded-full bg-zinc-600"><SiGmail/></a>
                </div>                
            </div>
            <BackgroundBeams />
        </div>
    );
}