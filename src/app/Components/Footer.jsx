import { FaLinkedinIn } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Footer(){
    return(
        <>
        <footer className="w-full flex justify-center items-center bg-black py-6 text-sm text-gray-500 border-t border-gray-700">
            <div className="w-[80%] 2xl:text-left xl:text-left lg:text-left sm:text-center xs:text-center 2xs:text-center 3xs:text-center flex items-center justify-between">
              © {new Date().getFullYear()} Haris — Fueled by innovation and clean code.
              <div className="flex justify-between items-center gap-3 text-white">
                <a href="https://www.linkedin.com/in/kunwar-muhammad-haris-20054422b/" target="_blank" rel="noopener noreferrer" 
                className="text-2xl p-2 rounded-full bg-zinc-600"
                >
                    <FaLinkedinIn/> 
                </a>
                <a href="https://github.com/Haris-21" target="_blank" rel="noopener noreferrer" 
                className="text-2xl p-2 rounded-full bg-zinc-600"><TbBrandGithubFilled/></a>
                    <a 
                    href="mailto:kunwarharis2004@gmail.com" 
                    className="text-2xl p-2 rounded-full bg-zinc-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <SiGmail />
                    </a>

                


            </div>
            </div>
        </footer>
        </>
    )
}