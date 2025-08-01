"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { RxDividerVertical } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { IconBrandGithub } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Dock, DockIcon } from "@/components/magicui/dock";

export default function Hero(){

      const words = [
      {
        text: "A ",
        className: "text-white",
      },
      {
        text: "Solution-Oriented ",
        className: "text-white",
      },
      {
        text: "Software ",
        className: "text-white",
      },
      {
        text: "Engineer",
        className: "text-white",
      },
  
  ];

   const links = [
    
    {
      title: "GitHub",
      icon: (
        <TbBrandGithubFilled className="h-full w-full text-zinc-700 " />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedinIn/>
      ),
      href: "#"
    },
    {
      title: "Gmail",
      icon: (
        <SiGmail/>
      ),
      href: "#"

    }
  ];

    return(
        <div className="relative flex flex-col justify-center items-center w-full h-screen border-b border-gray-700">
            <div className="2xl:w-[80%] lg:w-[95%] xl:w-[90%] md:w-[90%] sm:w-[90%] xs:w-[90%] 2xs:w-[90%] 3xs:w-[90%] text-white text-center font-sans font-semibold flex flex-col items-center">
                <h2 className="text-4xl">Hey, This is</h2>
                <h1 className="2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-4xl xs:text-4xl 2xs:text-4xl 3xs:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Kunwar Muhammad Haris</h1>
                <h1 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-4xl 2xs:text-4xl 3xs:text-4xl">I'm <AuroraText>Software Engineer</AuroraText></h1> 
                 <TypewriterEffectSmooth words={words} />
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col 2xs:flex-col 3xs:flex-col items-center justify-center gap-3">
                  <a 
                    href="/resume.pdf"
                    download
                  >
                  <InteractiveHoverButton>Get in touch | Download Resume</InteractiveHoverButton>
                  </a>
                  
                </div>                
            </div>
            <BackgroundBeams />
        </div>
    );
}