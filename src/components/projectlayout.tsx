import React from "react";
import Link from "next/link";
import {DMM, HN} from "../utils/fonts";
import {FiX} from "react-icons/fi";

interface ProjectData{
    name: string;
    desc: string;
    year: string;
    category: string;
    tools: string[];
    contributors: {label: string; url: string}[];
    images: string[];
    features: string[];
    links: {label: string; url: string }[];
}

interface ProjectLayoutProps{
    project: ProjectData;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({project}) => {
    const {name, desc, year, category, tools, contributors, images, features, links} = project;

    return(
        <>
            <div className="min-h-screen p-10 sm:p-10 md:px-20 lg:px-20">
                <div className="mb-4">
                    <Link href="/#projects" passHref>
                        <div className="cursor-pointer mt-5 mb-8 items-center">
                            <FiX className="h-10 w-10 hover:text-blue-600 transition"/>
                        </div>
                    </Link>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl">
                        <img src={src} className="w-full h-full object-contain" loading="lazy"/>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h1 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${HN.className}`}>
                        {name.toUpperCase()}
                    </h1>

                    <p className={`text-lg sm:text-xl mb-6 text-gray-900 ${DMM.className}`}>
                        {desc.toUpperCase()}
                    </p>

                    <div className="flex items-center space-x-2 text-md sm:text-xl">
                        <span className="font-semibold text-2xl">YEAR</span>
                        <span className={`text-2xl ${DMM.className}`}>{year}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:col-span-2 lg:pl-8 pt-6 lg:pt-0 lg:grid-cols-2 gap-x-8">
                    <div>
                        <div className="mb-6">
                            <h3 className={`text-2xl font-bold mb-3 ${HN.className}`}>CATEGORY</h3>
                            <p className={`text-xl ${DMM.className}`}>{category.toUpperCase()}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className={`text-2xl font-bold mb-3 ${HN.className}`}>TOOL(S)</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, index) => (
                                    <span key={index} className={`rounded-full text-xs sm:text-base px-3 py-1 border border-gray-900 bg-zinc-100/50 hover:bg-gray-800/90 hover:text-white transition ${DMM.className}`}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={`text-2xl font-bold mb-3 ${HN.className}`}>CONTRIBUTOR(S)</h3>
                        <ul className="space-y-1 text-xl">
                            {contributors.map((contributor, index) => (
                            <li key={index} className={`{DMM.className} text-blue-600 hover:text-blue-900 transition`}>
                                <a href={contributor.url} target="_blank" rel="noopener noreferrer">
                                    {contributor.label.toUpperCase()}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="my-10 border-dashed"/>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-8">
                <div className="lg:col-span-3">
                    <h2 className={`text-xl sm:text-2xl font-bold mb-3 ${HN.className}`}>FEATURES</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl pl-4">
                        {features.map((feature, index) => (
                            <li key={index} className={DMM.className}>
                                {feature.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-1 lg:pl-8 pt-6 lg:pt-0">
                    <h2 className={`text-xl sm:text-2xl font-bold mb-3 ${HN.className}`}>LINK(S)</h2>
                    <div className="flex flex-col space-y-4">
                        {links.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`text-lg sm:text-xl text-blue-600 hover:text-blue-900 flex items-center transition ${DMM.className}`}>
                                <span>{link.label.toUpperCase()}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectLayout;