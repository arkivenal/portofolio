import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBETTER", 
};

const BBetter = {
    name: "BBetter",
    desc: "BBetter is a mental health application concept that leverages AI technology, aiming to provide a more innovative and accessible solution for mental health management.",
    year: "2024",
    category: "UI/UX Mobile App Design",
    tools: ["Figma"],
    contributors: [      
        {label: "Lisa Anastasya", url: "https://welcometolisanstsyaportfolio.vercel.app/"},
        {label: "Robert Jefferson Sugianto", url: "https://robert-jefferson-sugianto-portfolio.vercel.app/"},
        {label: "Vennycia Susanto", url: "https://arkivenal.netlify.app/"},
    ],
    images: [
        "/bbetter_1.png",
        "/bbetter_2.png",
        "/bbetter_3.png",
    ],
    features: [
        "Chat with BBot which provides psychologist-trained and personalized responses", 
        "Write daily notes about their feelings, which Bbot analyzes to provide encouraging responses and mood tracking analysis",
        "Access to six types of mindful therapies",
        "Community allowing users to post content and interact with other users",
    ],
    links: [
        {label: "Figma", url: "https://www.figma.com/file/OnBFrziD36kk14jwl2lzq1/BBetter"}
    ],
};

const returnProjectPage = () => {
    return (
        <ProjectPage project={BBetter}/>
    );
};

export default returnProjectPage;