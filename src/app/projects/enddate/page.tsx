import ProjectPage from "../../../components/projectlayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ENDDATE", 
};

const EndDate = {
    name: "EndDate",
    desc: "EndDate is an app that is intended to keep track of expiry dates for various products, including food, medications, cosmetics, and household items. The app allows users to easily record and monitor multiple expiry dates, ensuring that they are notified ahead of time before a product expires. EndDate sends timely reminders, helping users reduce food waste and avoid using expired products. Additionally, EndDate provides a user-friendly interface for organizing and categorizing products, making it easier to manage household inventories and maintain a healthier, more efficient lifestyle.",
    year: "2024",
    category: "UI/UX Mobile App Design",
    tools: ["Axure RP", "Figma"],
    contributors: [
        {label: "Edbert Andersen", url: ""},
        {label: "Jean Gabrielle Keyla Halim", url: ""},
        {label: "Jessica Alhena Joprang", url: "https://jessicajoprang.vercel.app/"},
        {label: "Jocelyn Abigail Mudana", url: ""},
        {label: "Vennycia Susanto", url: "https://arkivenal.netlify.app/"},
    ],
    images: [
        "/enddate_1.png",
        "/enddate_2.png",
        "/enddate_3.png",
    ],
    features: [
        "Record and monitor items' expiry dates", 
        "Predict expiry dates for items without an expiry date",
        "Receive notifications when an item's about to expire",
    ],
    links: [
        {label: "Figma", url: "https://www.figma.com/file/VmyGzdbI5HRmbzdyUfH1dt/EndDate"},
        {label: "Axure RP Prototype", url: "https://pfivn0.axshare.com/#id=hpw720&p=landing"},
    ],
};

const returnProjectPage = () => {
    return(
        <ProjectPage project={EndDate}/>
    );
};

export default returnProjectPage;