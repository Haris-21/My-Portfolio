import Experience from "./Experience";
import Hero from "./Hero";
import Services from "./Services";

export default function Landing(){
    return(
        <>
        <div className="w-full bg-black ">
            <section id="hero">
                <Hero/>
            </section>
            <section id="services">
                <Services/>
            </section>
            <section id="experience">
                <Experience/>
            </section>
        </div>
        </>
    )
}