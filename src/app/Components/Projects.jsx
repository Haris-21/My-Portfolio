"use client";

import Carousel from "@/components/ui/carousel";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Projects(){

     const slideData = [
    {
      title: "Boat For Sale Near Me",
      button: "Explore Project",
      src: "https://i.postimg.cc/T3MC8pQh/Project2.png",
       link: "https://boatsforsalenearme.vercel.app/",
    },  
    {
      title: "Valencia Auto Trader",
      button: "Explore Project",
      src: "https://i.postimg.cc/XJHQtLD0/Project1.png",
       link: "https://valenciaauto-frontend.vercel.app/",
    },
    {
      title: "NueroCom",
      button: "Explore Project",
      src: "https://i.postimg.cc/KzRYDc6D/Project4.png",
       link: "https://neurocom-client-mhm02orfe-muhammadmasoods-projects.vercel.app/",
    },
    {
      title: "ItechStudio",
      button: "Explore Project",
      src: "https://i.postimg.cc/TPrrr0Xc/Project3.png",
       link: "https://i-techstudio.vercel.app/",
    },
  ];


    return(
        <>
        <div className="w-full flex flex-col justify-center items-center pt-[4rem] pb-[4rem] relative">

            <div className="2xl:w-[80%] lg:w-[95%] xl:w-[90%] md:w-[90%] sm:w-[90%] xs:w-[90%] 2xs:w-[90%] 3xs:w-[90%] font-sans flex flex-col items-center">
                        <h1 className="2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-7xl xs:text-5xl 2xs:text-5xl 3xs:text-5xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Projects</h1>
                        <p className="text-zinc-400 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-md 2xs:text-md 3xs:text-md text-center"> I’ve worked on a variety of software development projects. From concept to code, each project reflects my growth as a developer. Explore the highlights of my development journey.</p>
                        <div className="relative overflow-hidden w-full h-full py-20">
                            <Carousel slides={slideData} />
                        </div>         
                        
        
            </div>
        </div>

        
        
        </>
    );
}