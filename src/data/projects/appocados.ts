import type {Project} from "../typedefs";
import {Apollo, Astro, GraphQL, Matomo, MongoDB, Netlify, NodeJS, Svelte, TypeScript} from "../technologies";
import {Figma, GitLab, JIRA} from "../tools";
import {Appocados as AppocadosCompany} from "../companies/appocados";
import {NataschaFadeeva} from "../companies/natascha-fadeeva";
import image from "../../assets/images/project-appocados.webp";
import image2x from "../../assets/images/project-appocados@2x.webp";
import image4x from "../../assets/images/project-appocados@4x.webp";

// prettier-ignore
export const Appocados: Project = {
    id: "appocados",
    title: "appocados.com",
    subline: "Sideproject - a vegan recipe platform.",
    description: `In February 2023, Natascha Fadeeva and I joined forces to launch "appocados," a premier vegan recipe platform tailored for the vegan community. This dynamic platform empowers vegan food bloggers and influencers to prominently display their recipes via the appocados mobile application. At its core, the system boasts a user-friendly mobile app filled with premium vegan recipes, complemented by a specialized web backend for content creators. Client applications effortlessly synchronize with our platform, thanks to our GraphQL-based recipe API, developed using Apollo. Furthermore, I took the initiative to conceptualize, design, and bring to life our company's website at www.appocados.com, crafted with Astro and Svelte.`,
    website: {
        href: "https://www.appocados.com",
        label: "www.appocados.com",
    },
    client: AppocadosCompany,
    contractType: "startup",
    dateStart: new Date("2023-02-01"),
    industry: "Food",
    role: "Systems architect, full-stack developer, and UX/UI",
    tags: ["startup", "front-end", "back-end", "ux/ui"],
    technologies: [TypeScript, Svelte, Astro, MongoDB, NodeJS, Apollo, GraphQL, Netlify, Matomo],
    tools: [Figma, GitLab, JIRA],
    partners: [NataschaFadeeva],
    teamSize: 2,
    image,
    image2x,
    image4x,
};
