import Helvetica_Neue from "next/font/local";
import {DM_Mono} from "next/font/google";

export const DMM = DM_Mono({ 
    weight: "400",
    style: "normal",
    display: "swap",
    subsets: ["latin"], 
});

export const HN = Helvetica_Neue({
  src: "./imported_fonts/Helvetica Neue Roman.otf",
  display: "swap",
});

