import React from "react";
import {useLenis, scrollTarget} from './lenisprovider';
import '../styles/globals.css'

const Navbar = () => {
    const lenisContext = useLenis(); 
    const scrollTo = lenisContext?.scrollTo;

    const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        
        if(scrollTo){
            scrollTo(`#${id}` as scrollTarget, {duration: 1.0}); 
        } 
        else{
            const element = document.getElementById(id);
            if(element){
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return(
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-[2px]">
            <div className="max-w-full mx-auto px-5 py-5 flex justify-between items-center">
                <a href="#hero" className="cursor-pointer text-xl md:text-2xl text-gray-900 font-normal transition hover:text-blue-600 hover:blur-none"
                onClick={(e) => scrollToSection('hero', e)}>
                    HOME
                </a>
                
                <a href="#aboutme" className="cursor-pointer text-xl md:text-2xl text-gray-900 font-normal transition hover:text-blue-600  hover:blur-none"
                onClick={(e) => scrollToSection('aboutme', e)}>
                    ABOUT ME
                </a>
                
                <a href="#projects" className="cursor-pointer text-xl md:text-2xl text-gray-900 font-normal transition hover:text-blue-600  hover:blur-none"
                onClick={(e) => scrollToSection('projects', e)}>
                    PROJECTS
                </a>
            </div>
        </nav>
    );
};

export default Navbar;