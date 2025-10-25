import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VEUN / PORTOFOLIO", 
};

const veun = {
    name: "VEUN / PORTOFOLIO",
    desc: "The current webpage you are visiting is my personal portfolio website, showcasing my projects and skills as a developer and designer. It is the site I have taken most creative liberty with, blending creative design alongside technical skills that I haven't properly showcased in other projects. Built using Next.js and TypeScript, this portfolio highlights my ability to create modern, responsive web applications while also emphasizing my design sensibilities.",
    year: "2025",
    category: "Web App",
    tools: ["Next.JS", "React", "Three.JS", "JavaScript", "TypeScript", "CSS"],
    contributors: [
        {label: "Vennycia Susanto", url: "https://veun.netlify.app/"},
    ],
    images: [
        "/fridgifi_1.png",
        "/fridgifi_2.png",
        "/fridgifi_3.png",
    ],
    features: [
        "Allows users to scan, input, and track their pantry items", 
        "Creates a dynamic shopping list catered to users' needs",
        "AI-powered budget tracker which helps users stay within budget",
    ],
    links: [
        {label: "Figma", url: "https://www.figma.com/file/sWaq8OAKMYFp3oNssT4b5A/Fridgi-Fi"},
        {label: "GitHub Repository", url: "https://github.com/wilkinson05/Fridgify_"},
    ],
};

const returnProjectPage = () => {
    return(
        <ProjectPage project={veun}/>
    );
};

export default returnProjectPage;