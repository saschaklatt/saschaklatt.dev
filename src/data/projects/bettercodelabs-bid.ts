import type {Project} from "../typedefs";
import {Docker, MaterialUI, React, TypeScript} from "../technologies";
import {Figma} from "../tools";
import {BettercodeLABS} from "../companies/bettercodelabs";
import image from "../../assets/images/project-bettercodelabs-bid.webp";
import image2x from "../../assets/images/project-bettercodelabs-bid@2x.webp";
import image4x from "../../assets/images/project-bettercodelabs-bid@4x.webp";

// prettier-ignore
export const BettercodeBID: Project = {
    id: "bettercodelabs-bid",
    title: "bettercode BID",
    subline: "UX/UI design and front-end development for a bidding platform.",
    description: `Commissioned by bettercodeLABS to enhance the UI of their existing prototype into a production-ready design, I utilized Figma to create a user-centric design prioritizing simplicity and functionality. Through wireframing and prototyping, I developed a clickable prototype in Figma for desktop and mobile devices, ensuring an intuitive interface. The implementation of the design into the client application involved React.js and Material UI for a polished and consistent look. Real-time updates were seamlessly integrated via a REST API, elevating user engagement and responsiveness. The result is an optimized UI that enhances the overall bidding experience.`,
    client: BettercodeLABS,
    contractType: "freelance",
    dateStart: new Date("2023-10-01"),
    dateEnd: new Date("2023-12-31"),
    industry: "Food",
    role: "front-end developer and UX/UI designer",
    tags: ["freelance", "front-end", "ux/ui"],
    technologies: [TypeScript, React, MaterialUI, Docker],
    tools: [Figma],
    partners: [],
    teamSize: 0,
    image,
    image2x,
    image4x,
};
