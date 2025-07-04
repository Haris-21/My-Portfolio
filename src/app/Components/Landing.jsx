import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

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
            <section id="projects">
                <Projects/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
        </div>
        </>
    )
}