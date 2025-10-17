'use client';

import React, {useRef, useEffect, createContext, useContext, useCallback, ReactNode} from "react";
import Lenis from "lenis";

export type scrollTarget = string | HTMLElement | number;

export interface LenisScrollOptions{
    duration?: number;
    easing?: (t: number) => number;
    offset?: number;
    immediate?: boolean;
}

export interface LenisContextType{
    scrollTo: (target: scrollTarget, options?: LenisScrollOptions) => void;
}

interface LenisProviderProps{
    children: ReactNode;
}

const LenisContext = createContext<LenisContextType | null>(null);

export const useLenis = () => {
    return useContext(LenisContext);
};

export default function LenisProvider({children}: LenisProviderProps){
    const lenisRef = useRef<Lenis | null>(null);

    const scrollTo = useCallback((target: scrollTarget, options?: LenisScrollOptions) => {
        if(lenisRef.current){
            lenisRef.current.scrollTo(target, options);
        }
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.0, 
            easing: (t) => 1 - Math.pow(1 - t, 3), 
        });

        lenisRef.current = lenis;

        const animate = (time: number) => { 
            lenis.raf(time);
            requestAnimationFrame(animate);
        };

        const animationFrameId = requestAnimationFrame(animate);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return(
        <LenisContext.Provider value={{scrollTo}}>
            {children}
        </LenisContext.Provider>
    );
}