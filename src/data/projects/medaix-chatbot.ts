import type {Project} from "../typedefs";
import {Mahena} from "../companies";
import {Docker, MaterialUI, React, TypeScript} from "../technologies";
import {Landbot, Make} from "../tools";
import image from "../../assets/images/project-mahena-chatbot-medaix.webp";
import image2x from "../../assets/images/project-mahena-chatbot-medaix@2x.webp";
import image4x from "../../assets/images/project-mahena-chatbot-medaix@4x.webp";
import {MedAix} from "../companies/medaix";

// prettier-ignore
export const MedAixChatbot: Project = {
    id: "medaix-chatbot",
    title: "MedAix Chatbot",
    subline: "Building a chatbot for physiotherapy and medical training.",
    description: `Lorem ipsum`,
    // website: {
    //     href: "https://www.appocados.com",
    //     label: "www.appocados.com",
    // },
    client: MedAix,
    contractType: "freelance",
    dateStart: new Date("2023-10-01"),
    industry: "Healthcare",
    role: "Systems architect, full-stack developer",
    tags: ["front-end", "no/low-code"],
    technologies: [TypeScript, React, MaterialUI, Docker],
    tools: [Landbot, Make],
    partners: [Mahena],
    teamSize: 2,
    image,
    image2x,
    image4x,
};
