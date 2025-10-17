import React from "react";
import {useLenis, scrollTarget} from "./lenisprovider";
import Marquee from "./marquee";
import {DMM, HN} from "../utils/fonts";
import {FiChevronDown} from "react-icons/fi";

const Hero = () => {
    const lenisContext = useLenis(); 
    
    const scrollTo = lenisContext?.scrollTo; 

    const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if(scrollTo){ 
            scrollTo(`#${id}` as scrollTarget, {duration: 1.0}); 
        } 
    };

    return(
        <>
            <div className="w-full max-w-4xl mx-auto z-50"> 
                <div className="w-full lg:w-1/2 mx-auto">

                    <div className="flex flex-col w-full items-start"> 
                        <div className={`text-xl sm:text-2xl md:text-2xl lg:text-2xl ${DMM.className}`}>
                            HEY! I'M
                        </div>
                        <div className={`text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold ${HN.className} leading-none`}>
                            <p className="hover:text-blue-600 transition">VENNYCIA</p>
                            <p className="hover:text-blue-600 transition">SUSANTO</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-end mt-1 w-full">
                        <div className={`text-xl sm:text-xl md:text-2xl ${DMM.className}`}>
                            I'M A
                        </div>
                        <Marquee text="UI/UX DESIGNER & WEB DEVELOPER" fontClassName={`text-5xl sm:text-5xl md:text-7xl lg:text-7xl text-white font-bold ${HN.className} leading-none`} />
                    </div>

                </div>
            </div>

            <a href="#aboutme" className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 text-4xl text-gray-900 transition-transform duration-300 hover:scale-110 animate-bounce z-50" 
                onClick={(e) => scrollToSection('aboutme', e)}>
                <FiChevronDown className="w-11 h-11 hover:text-blue-600 transition"/>
            </a>
        </>
    );
};

export default Hero;