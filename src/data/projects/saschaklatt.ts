import type {Project} from "../typedefs";
import {Astro, Netlify, React, Tailwind, TypeScript} from "../technologies";
import {GitLab, JIRA} from "../tools";
import image from "../../assets/images/project-saschaklatt@2x.png";

// prettier-ignore
export const SaschaKlatt: Project = {
    title: "saschaklatt.dev",
    subline: "Redesign of my portfolio website.",
    description: "Design and development of my portfolio website.",
    website: {
        href: "https://saschaklatt.dev",
        label: "saschaklatt.dev",
    },
    contractType: "sideProject",
    dateStart: new Date("2023-09-01"),
    dateEnd: new Date("2023-09-07"),
    role: "Full-stack developer and UX/UI",
    tags: ["side-project", "front-end", "ux/ui"],
    technologies: [TypeScript, React, Astro, Tailwind, Netlify],
    tools: [GitLab, JIRA],
    partners: [],
    image,
};
