import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import uiux from '../images/uiux.jpg'
import performance from '../images/optimization.jpg'
import browser from '../images/cross-browser.jpg'
import Image from "next/image";



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
            <div className="w-[80%] font-sans flex flex-col items-center">
                <h1 className="text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Services</h1>
                <h2 className="text-zinc-500 text-3xl mb-[3rem]">
                    I specialize in building 
                     <FlipWords words={words} /> <br/>
                    websites that bring your digital vision to life.
                </h2>
                <div className="flex justify-between items-start">
                        {
                            services.map((item, idx) => (
                                <CardContainer key={idx} className="inter-var mr-4">
                                    <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-zinc-700 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                        <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-white"
                                        >
                                        {item.title}
                                        </CardItem>
                                        <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                        >
                                        {item.description}
                                        </CardItem>
                                        <CardItem translateZ="100" className="w-full mt-4">
                                         <Image
                                                src={item.image}
                                                height={1000}
                                                width={1000}
                                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                alt={item.title}
                                            />
                                        </CardItem>
                                
                                    </CardBody>
                                </CardContainer>
                            ))
                        }
                        

                </div>

            
            </div>
        </div>  
        </>
    )
}