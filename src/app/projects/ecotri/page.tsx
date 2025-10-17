import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECOTRI", 
};

const Ecotri = {
    name: "Ecotri",
    desc: "Ecotri is a 3R (reduce, reuse, recycle) based app concept that facilitates waste donation, recycling material processing, and the sale of recycled products in one digital platform. Ecotri aims to be the leading platform in motivating the public to do 3R, by simplifying access and providing incentives to contribute positively to the environment.",
    year: "2025",
    category: "UI/UX Mobile App Design",
    tools: ["Figma"],
    contributors: [
        {label: "Clementius Edbert William Wiguna", url: ""},
        {label: "Emily Wilkinson", url: "https://wilkinsonemily.github.io/emilywilkinson-portofolio.github.io/"},
        {label: "Kevin Khemanando Kan", url: ""},
        {label: "Vennycia Susanto", url: "https://arkivenal.netlify.app/"},
    ],
    images: [
        "/ecotri_1.png",
        "/ecotri_2.png",
        "/ecotri_3.png",
    ],
    features: [
        "Request waste collection and pick-up",
        "Earn redeemable shopping points for trading-in waste",
        "Purchase and sell recycled product goods in the marketplace",
    ],
    links: [
        {label: "Figma", url: "https://www.figma.com/file/r5UGnNuFDfXroUnTMB1an9/Ecotri"},
    ],
};

const returnProjectPage = () => {
    return(
        <ProjectPage project={Ecotri}/>
    );
};

export default returnProjectPage;