import Hero from "./Hero";
import Services from "./Services";

export default function Landing(){
    return(
        <>
        <div className="w-full bg-black ">
            <section>
                <Hero/>
            </section>
            <section>
                <Services/>
            </section>
        </div>
        </>
    )
}