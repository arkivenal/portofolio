import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRACKELING", 
};

const Trackeling = {
    name: "Trackeling",
    desc: "Trackeling is a mobile app concept that is designed to facilitate transactions and communication between local communities and street vendors. Trackeling addresses the challenge faced by consumers who struggle to locate street vendors due to a lack of information about their schedules and locations. With the help of Trackeling, users can know which vendors are currently selling and even request home deliveries. In turn, vendors benefit from a direct and efficient way to connect with their customers.",
    year: "2024",
    category: "UI/UX Mobile App Design with Web Prototype",
    tools: ["HTML", "CSS", "JavaScript", "Figma"],
    contributors: [
        {label: "Aaron Tanujaya Didi", url: ""},
        {label: "Felicia Josephine", url: "https://felicia-josephine.vercel.app/"},
        {label: "Lisa Anastasya", url: "https://welcometolisanstsyaportfolio.vercel.app/"},
        {label: "Robert Jefferson Sugianto", url: "https://robert-jefferson-sugianto-portfolio.vercel.app/"},
        {label: "Vennycia Susanto", url: "https://arkivenal.netlify.app/"},
    ],
    images: [
        "/trackeling_1.png",
        "/trackeling_2.png",
        "/trackeling_3.png",
    ],
    features: [
        "Real-time street vendor tracking, view which vendors are selling", 
        "Messaging feature to allow communication between users and vendors",
        "Call vendors to stop by user's location",
    ],
    links: [
        {label: "Figma", url: "https://www.figma.com/file/5WrewU0LJ3siLV3pls8PUl/Trackeling"},
        {label: "GitHub Repository", url: "https://github.com/Trackeling/trackeling.github.io"},
    ],
};

const returnProjectPage = () => {
    return(
        <ProjectPage project={Trackeling}/>
    );
};

export default returnProjectPage;