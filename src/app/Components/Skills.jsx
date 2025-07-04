import { HoverEffect } from "@/components/ui/card-hover-effect";






export default function Skills(){

  const projects = [
  {
    title: "React.js",
    description:
      "A JavaScript library for building user interfaces, maintained by Meta and a community of developers.",
    link: "https://reactjs.org",
  },
  {
    title: "Next.js",
    description:
      "A React framework that enables server-side rendering and static site generation for fast and scalable web applications.",
    link: "https://nextjs.org",
  },
  {
    title: "JavaScript",
    description:
      "A high-level, dynamic programming language used to create interactive effects within web browsers.",
    link: "https://www.javascript.com/",
  },
  {
    title: "GitHub",
    description:
      "A platform for version control and collaboration, allowing developers to host and review code, manage projects, and build software together.",
    link: "https://github.com",
  },
  {
    title: "Vercel",
    description:
      "A platform for frontend frameworks and static sites, built to integrate with headless content, commerce, or databases.",
    link: "https://vercel.com",
  },
  {
    title: "Postman",
    description:
      "An API platform for building and using APIs, providing tools to simplify each step of the API lifecycle.",
    link: "https://postman.com",
  },
];

    return(
        <>
        <div className="w-full flex justify-center items-center pt-[4rem] pb-[4rem]">
                    <div className="2xl:w-[80%] lg:w-[95%] xl:w-[90%] md:w-[90%] sm:w-[90%] xs:w-[90%] 2xs:w-[90%] 3xs:w-[90%] font-sans flex flex-col items-center">
                        <h1 className="2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-7xl xs:text-5xl 2xs:text-5xl 3xs:text-5xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Skills</h1>
                        <div className="w-full">
                            <HoverEffect items={projects} />
                        </div>
                        
        
                    </div>
        </div>
        </>
    )
}