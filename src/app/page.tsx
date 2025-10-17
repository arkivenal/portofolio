"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Flip from "../components/flip";
import ProjectList from "../components/projectslist";
import "../styles/globals.css"

const Page = () => {
return(
    <>
        <Navbar/>
        <div className="scroll-container">
            <section id="hero" className="scroll-section flex justify-center items-center min-h-screen p-4">
                <Hero/>
            </section>
            <section id="aboutme" className="scroll-section flex flex-col w-full justify-center items-center">
                <Flip/>
            </section>
            <section id="projects" className="scroll-section flex flex-wrap min-h-screen p-4 md:p-8n">
                <ProjectList/>
            </section>
        </div>
    </>
  );
};

export default Page;