import { Timeline } from "@/components/ui/timeline"
import nuerocom from '../images/Project4.PNG'
import Image from "next/image"


export default function Experience(){

     const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-sans text-white"> 
              Building the AI-Powered Business Automation System using Next.js and Python with Firebase. The work is ongoing on this Project. 
          </p>
          <p className="mb-8 text-xs font-sans text-white"> 
            Developed and deployed my personal portfolio using Next.js, Tailwind CSS, and Magic-UI with Aceternity components. Integrated animations and responsive design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.postimg.cc/KzRYDc6D/Project4.png"
              alt="NueroCom"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/LXBxvRjh/Project4b.png"
              alt="NueroCom"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/x89nF07Z/portfolio.png"
              alt="Portfolio"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/Prc0CXyk/portfoliob.png"
              alt="Portfolio"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h1 className="text-xl font-bold font-sans text-zinc-600 mb-8">LoudlyDev Global Solution</h1>   
          <p className="mb-8 text-xs font-sans text-white">
            Completed multiple projects as a frontend developer. 
            Worked on real-world applications such as a carsforsalenearme and valenciaautotraders using React.js and JavaScript.
          </p>
          <p className="mb-8 text-xs font-sans text-white">
             Collaborated in teams, converted UI wireframes to code, 
             and learned cross-browser compatibility and performance optimization.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.postimg.cc/T3MC8pQh/Project2.png"
              alt="BoatForSaleNearMe"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/RhCQCHyL/Project2b.png"
              alt="BoatForSaleNearMe"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/XJHQtLD0/Project1.png"
              alt="ValenciaAutoTrader"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/TPrrr0Xc/Project3.png"
              alt="ItechStudio"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center border border-zinc-800 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
     ]





    return(
        <>
        <div className="w-full flex justify-center items-center pt-[4rem] pb-[4rem]">
            <div className="2xl:w-[80%] lg:w-[95%] xl:w-[90%] md:w-[90%] sm:w-[90%] xs:w-[90%] 2xs:w-[90%] 3xs:w-[90%] font-sans flex flex-col items-center">
                <h1 className="2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-7xl xs:text-5xl 2xs:text-5xl 3xs:text-5xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Experience</h1>
                <p className="text-zinc-400 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-md 2xs:text-md 3xs:text-md">I've been working on Software Development for these years. Here's a timeline of my journey.</p>
                <div className="relative w-full overflow-clip">
                  <Timeline data={data} />
                </div>
                

            </div>
        </div>

        </>
    )
}