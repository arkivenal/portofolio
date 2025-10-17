"use client"

import React, {useState, useRef, useEffect, useCallback} from "react"
import {DMM} from "../utils/fonts";

const Flip = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardHeight, setCardHeight] = useState("auto"); 
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);
    const toggleFlip = () => setIsFlipped(!isFlipped);

    const calculateCardHeight = useCallback(() => {
        let maxHeight = 0;
        if(frontRef.current){
            maxHeight = Math.max(maxHeight, frontRef.current.offsetHeight);
        }
        if(backRef.current){
            const backElement = backRef.current;
            const originalTransform = backElement.style.transform;
            const originalPosition = backElement.style.position;
            
            backElement.style.transform = 'none';
            backElement.style.position = 'absolute';
            maxHeight = Math.max(maxHeight, backElement.offsetHeight);
            
            backElement.style.transform = originalTransform; 
            backElement.style.position = originalPosition; 
        }
        if(maxHeight > 0){
            setCardHeight(`${maxHeight}px`);
        } 
        else{
            setCardHeight("auto");
        }
    }, []);

    useEffect(() => {
        calculateCardHeight();
        window.addEventListener('resize', calculateCardHeight);

        return() => {
            window.removeEventListener('resize', calculateCardHeight);
        };
    }, [calculateCardHeight]);

    useEffect(() => {
        const timeoutId = setTimeout(calculateCardHeight, 50); 
        return () => clearTimeout(timeoutId);
    }, [isFlipped, calculateCardHeight]);

    return(
        <div className="flex justify-center items-center w-full p-4">
            <div className="relative w-full max-w-2xl" onClick={toggleFlip} style={{height: cardHeight, perspective: "1000px"}}>
                <div className={`relative w-full h-full transition-transform duration-500`}
                    style={{
                        height: "100%",
                        transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)",
                        transformStyle: "preserve-3d",
                    }}
                >
                <div ref={frontRef} className="absolute top-0 left-0 w-full bg-zinc-100/50 border"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        zIndex: isFlipped ? 1 : 2,
                    }}
                >
                <div className="w-full h-full"> 
                    <div className="flex flex-col sm:flex-row w-full"> 
                        <div className="flex flex-row justify-around sm:flex-col sm:justify-between p-3 sm:h-auto border-b sm:border-b-0">
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                        </div>

                        <div className="flex flex-col divide-y divide-dashed sm:border-l w-full">
                            <div className={`overflow-hidden whitespace-nowrap text-xs sm:text-base ${DMM.className} text-center py-1`}>
                                ABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEAB
                            </div>

                            <div className={`p-3 text-left text-sm md:text-lg ${DMM.className} break-words`}>
                                <span>HEY! I'M VENNYCIA SUSANTO. I'M A THIRD-YEAR COMPUTER SCIENCE STUDENT SPECIALIZING IN INTERACTIVE MULTIMEDIA AT BINUS UNIVERSITY, PASSIONATE ABOUT UI/UX DESIGN ALONGSIDE WEB, APP, AND MULTIMEDIA DEVELOPMENT.</span>
                                <br/>
                                <span className="block pt-2"><b>PS. CLICK THIS CARD FOR MY SKILLSET!</b></span>
                            </div>

                            <div className="flex flex-col divide-y border-dashed border-t sm:flex-row sm:divide-x sm:divide-y-0">
                                <div className="w-full sm:w-2/3 flex flex-col">
                                    <div className={`p-3 text-left text-sm md:text-lg ${DMM.className}`}>
                                        <span><b>GET IN TOUCH!</b></span>
                                    </div>
                                    <div className="flex w-full divide-x border-t">
                                        <div className="w-1/2 p-1 text-sm md:text-lg text-center cursor-pointer hover:bg-gray-900 hover:text-white transition cursor-pointer" onClick={(e) => e.stopPropagation()}>
                                            <a href="mailto:vennycia50@gmail.com">EMAIL</a>
                                        </div>
                                        <div className="w-1/2 p-1 text-sm md:text-lg text-center cursor-pointer hover:bg-gray-900 hover:text-white transition cursor-pointer" onClick={(e) => e.stopPropagation()}>
                                            <a href="https://www.linkedin.com/in/vennycia-susanto-a8b277375">LINKEDIN</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex items-center justify-center w-full sm:w-1/3 p-3 bg-gray-900 text-white text-center text-sm md:text-lg ${DMM.className} cursor-pointer hover:bg-gray-950 transition cursor-pointer`} onClick={(e) => e.stopPropagation()}>
                                    <a href="/cv.pdf" target="_blank" rel="noopener norefferer" download>DOWNLOAD CV</a>
                                </div>       
                            </div>

                            <div className={`overflow-hidden whitespace-nowrap text-xs sm:text-base ${DMM.className} text-center py-1`}>
                                ABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEABOUTMEAB
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    
                <div ref={backRef} className="absolute top-0 left-0 w-full bg-gray-900/90 text-white border shadow-lg" 
                    style={{ 
                        transform: 'rotateX(180deg)',
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden',
                        zIndex: isFlipped ? 2 : 1,
                    }}
                >
                <div className="w-full">
                    <div className="flex flex-col sm:flex-row w-full"> 
                        <div className="flex flex-row justify-around sm:flex-col sm:justify-between p-3 sm:h-auto border-b sm:border-b-0">
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                            <div className="w-4 h-4 border rounded-full bg-transparent"></div>
                        </div>

                        <div className="flex flex-col divide-y divide-dashed sm:border-l w-full">
                            <div className={`overflow-hidden text-xs sm:text-base ${DMM.className} text-center py-1`}>
                                SKILLSETSKILLSETSKILLSETSKILLSETSKILLSETSKILLSETSKILLSETSKILLSETS
                            </div>

                            <div className={`p-3 text-left text-sm md:text-lg ${DMM.className} break-words`}>
                                <span><b>TECHNICAL SKILLS</b></span>
                                <br/>
                                <span>HTML, CSS, TAILWIND, NEXT.JS, REACT, TYPESCRIPT, JAVASCRIPT, JAVA, PYTHON</span>
                                <br/>
                                <span>UI/UX DESIGN, WEB AND APP DEVELOPMENT</span>
                            </div>

                            <div className="flex w-full divide-x border-dashed border-t">
                                <div className="flex flex-col w-full"> 
                                    <div className={`p-3 text-left text-sm md:text-lg ${DMM.className} break-words`}>
                                        <span><b>TOOLS</b></span>
                                        <br/>
                                        <span>FIGMA, AXURE RP, ADOBE ILLUSTRATOR, GIT, VISUAL STUDIO CODE, GITHUB</span>
                                        <br/>
                                        <span>JIRA, MICROSOFT OFFICE</span>
                                    </div>
                                </div>
                            </div>

                            <div className={`overflow-hidden text-xs sm:text-base ${DMM.className} text-center py-1`}>
                                SKILLSETSKILLSETSKILLSETSKILLSETSKILLSETSKILLSETSKILLSETSKILLSETS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)};

export default Flip;