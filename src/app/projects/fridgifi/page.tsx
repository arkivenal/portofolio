import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRIDGI-FI", 
};

const FridgiFi = {
    name: "Fridgi-Fi",
    desc: "Fridgi-Fi is an innovative AI-powered pantry tracking mobile app, designed to help households efficiently manage their food and grocery inventory. The implemented version of this app offers barcode scanning and product tracking, inventory and list management, and an AI-based budget estimation feature to optimize household spending.",
    year: "2025",
    category: "Mobile App",
    tools: ["Flutter", "Dart", "AI/ML Model", "Android Studio", "Figma"],
    contributors: [
        {label: "Emily Wilkinson", url: "https://wilkinsonemily.github.io/emilywilkinson-portofolio.github.io/"},
        {label: "Jessica Alhena Joprang", url: "https://jessicajoprang.vercel.app/"},
        {label: "Liona Loren", url: "https://lionaloren.vercel.app/"},
        {label: "Olivia Putri", url: ""},
        {label: "Vennycia Susanto", url: "https://arkivenal.netlify.app/"},
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
        <ProjectPage project={FridgiFi}/>
    );
};

export default returnProjectPage;