import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D'CLASSICS", 
};

const DClassics = {
    name: "D'Classics",
    desc: "D’Classics is a mobile application for book enthusiasts to explore and enjoy timeless classics. Users can browse a curated collection, add books to their digital library, and easily order physical copies. The app's elegant design and intuitive navigation ensure a seamless buying experience through featured collections and simple ordering.",
    year: "2024",
    category: "Mobile App",
    tools: ["Java", "Android Studio"],
    contributors: [
        {label: "Jessica Alhena Joprang", url: "https://jessicajoprang.vercel.app/"},
        {label: "Vennycia Susanto", url: "https://arkivenal.netlify.app/"},
    ],
    images: [
        "/dclassics_1.png",
        "/dclassics_2.png",
        "/dclassics_3.png",
    ],
    features: [
        "Easy ordering of physical book copies", 
        "Featuring curated collections on several categories such as what's bestselling",
    ],
    links: [
        {label: "GitHub Repository", url: "https://github.com/SieeneJ/D-Classics"},
    ],
};

const returnProjectPage = () => {
    return(
        <ProjectPage project={DClassics}/>
    );
};

export default returnProjectPage;