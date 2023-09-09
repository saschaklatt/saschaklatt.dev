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
    title: "appocados.com",
    subline: "Building our own startup - a vegan recipe platform.",
    description: `In February 2023, Natascha Fadeeva and I collaborated to create "appocados", a comprehensive vegan recipe platform. Designed specificly for the vegan community, this platform allows vegan food bloggers and influencers to showcase their recipes through the appocados mobile app. The system comprises a user-friendly mobile app providing high-quality vegan recipes and a dedicated web backend for recipe creators. The client applications seamlessly integrate with our platform via our GraphQL-based recipe API which is built with Apollo. In addition to that, I concepted, designed, and implemented our company's website www.appocados.com which built with Astro and Svelte.`,
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
