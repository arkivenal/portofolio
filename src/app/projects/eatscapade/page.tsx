import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EATSCAPADE", 
};

const Eatscapade = {
    name: "Eatscapade",
    desc: "Eatscapade is a social media platform that focuses exclusively on the culinary world, allowing users to explore, share, and engage with the freshest content related to dining, recipes, and gourmet experiences. Its core mission is to keep users at the forefront of the food scene by recommending the latest and greatest in the industry.",
    year: "2025",
    category: "Web App",
    tools: ["HTML", "CSS", "Javascript", "Figma"],
    contributors: [
        {label: "Jessica Alhena Joprang", url: "https://jessicajoprang.vercel.app/"},
        {label: "Joachim Valerian Akhmal Hardanto", url: ""},
        {label: "Richael Cathleen Suhanda", url: ""},
        {label: "Vennycia Susanto", url: "https://veun.netlify.app/"},
    ],
    images: [
        "/eatscapade_1.png",
        "/eatscapade_2.png",
        "/eatscapade_3.png",
    ],
    features: [
        "Post, like, repost, and comment on others' content", 
        "Events calender for organizers to list food events, festivals, and pop-ups",
        "Daily recipe featuring a new recipe daily, upvote, share tips and post photos",
        "Displays nearby restaurants based on user's location"
    ],
    links: [
        {label: "Web Preview", url: "https://eatscapade.vercel.app/Login.html"},
        {label: "GitHub Repository", url: "https://github.com/SieeneJ/Eatscapade"},
    ],
};

const returnProjectPage = () => {
    return(
        <ProjectPage project={Eatscapade}/>
    );
};

export default returnProjectPage;