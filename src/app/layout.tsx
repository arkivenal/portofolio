import LenisProvider from "../components/lenisprovider";
import Background from "../components/background";
import "../styles/globals.css"
import {DMM} from "../utils/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PORTOFOLIO", 
};

export default function Layout({
    children,
}:{
    children: React.ReactNode;
}){
    return(
        <html lang="en">
            <body className={`text-gray-900 ${DMM.className}`}>
                <LenisProvider>
                    <Background/>
                    {children}
                </LenisProvider>
            </body>
        </html>
    )
};