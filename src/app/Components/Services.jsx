import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import uiux from '../images/uiux.jpg'
import performance from '../images/optimization.jpg'
import browser from '../images/cross-browser.jpg'
import Image from "next/image";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { WordRotate } from "@/components/magicui/word-rotate";



export default function Services(){

    
     const words = ["responsive", "high-performance", "user-centric"];


     const services = [
        {
            title : 'UI/UX Implementation',
            description : 'I have a keen eye for detail and a deep respect for the design process. I meticulously translate UI/UX wireframes and visual designs into pixel-perfect, working code, ensuring the final product is both beautiful and highly usable.',
            image : uiux
        },
        {
            title : 'Performance Optimization',
            description : ' A fast website is a successful website. I am dedicated to making your site as fast and efficient as possible by optimizing images, minifying code, and leveraging browser caching to provide a smooth and enjoyable user experience.',
            image : performance
        },
        {
            title : 'Cross-Browser Compatibility',
            description : 'Your audience uses a variety of web browsers, and I ensure your site works consistently across all of them. I rigorously test on Chrome, Firefox, Safari, and Edge to guarantee a seamless experience for every user.',
            image : browser
        }
     ]



    return(
        <>
        <div className="w-full h-full flex justify-center items-start pt-[4rem] pb-[4rem] bg-black">
            <div className="2xl:w-[80%] lg:w-[95%] xl:w-[90%] md:w-[90%] sm:w-[90%] xs:w-[90%] 2xs:w-[90%] 3xs:w-[90%] font-sans flex flex-col items-center">
                <h1 className="2xl:text-7xl xl:text-7xl lg:text-7xl md:text-7xl sm:text-7xl xs:text-5xl 2xs:text-5xl 3xs:text-5xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Services</h1>
                <h2 className="text-zinc-500 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-md 2xs:text-md 3xs:text-md 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center xs:text-left 2xs:text-left 3xs:text-left flex items-center gap-3">
                    I specialize in building 
                      <WordRotate
                    className=" 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-md 2xs:text-md 3xs:text-md text-white"
                    words={["responsive", "user-centric","high-performance"]}
                    /><br/>
                </h2>
                <h2 
                className="text-zinc-500 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-md 2xs:text-md 3xs:text-md 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center xs:text-left 2xs:text-left 3xs:text-left mb-[3rem]"
                >
                    websites that bring your digital vision to life.</h2>
                <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 gap-4 md:grid-cols-1">
                        {
                            services.map((item, idx) => (
                               
                                  <NeonGradientCard key={idx} className="items-center justify-center text-white bg-black">
                                    <div className="flex flex-col justify-between">
                                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                        <p className="mb-4">{item.description}</p>
                                          <Image
                                                src={item.image}
                                                height={1000}
                                                width={1000}
                                                className="h-60 w-full object-cover rounded-xl"
                                                alt={item.title}
                                            />
                                    </div>  
                                  </NeonGradientCard>
                            ))
                        }
                        

                </div>

            
            </div>
        </div>  
        </>
    )
}