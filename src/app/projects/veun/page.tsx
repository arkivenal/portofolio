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
    tools: ["Next.JS", "React", "Three.JS", "JavaScript", "TypeScript", "CSS", "Netlify"],
    contributors: [
        {label: "Vennycia Susanto", url: "https://veun.netlify.app/"},
    ],
    images: [
        "/veun_1.png",
        "/veun_2.png",
        "/veun_3.png",
    ],
    features: [
        "Responsive design ensuring optimal viewing on various devices",
        "Interactive elements such as cursor trail and wave background integrated using Three.js", 
        "Showcases a variety of projects with detailed descriptions",
    ],
    links: [
        {label: "Deployed Site", url: "https://www.veun.netlify.app/"},
        {label: "GitHub Repository", url: "https://github.com/arkivenal/portofolio/"},
    ],
};

const returnProjectPage = () => {
    return(
        <ProjectPage project={veun}/>
    );
};

export default returnProjectPage;