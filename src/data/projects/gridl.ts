import {Jest, Rollup, TypeScript} from "../technologies";
import type {Project} from "../typedefs";
import image from "../../assets/images/project-gridl.webp";
import image2x from "../../assets/images/project-gridl@2x.webp";
import image4x from "../../assets/images/project-gridl@4x.webp";

// prettier-ignore
export const Gridl: Project = {
    id: "gridl",
    title: "gridl",
    subline: "Side project - an open-source library I built to handle 2D grid data structures.",
    description: `In 2018, I found myself deeply drawn to a career in game development. I frequently engaged with grid data structures, useful in applications like board games or arranging objects within 2D rooms. These structures are often visualized as two-dimensional arrays, commonly termed "grids". Realizing I was repeatedly crafting similar helper functions for these grids, I consolidated them into an open-source library named "gridl", which I then shared on npm. For users' convenience, I also launched a dedicated documentation site, gridl.js.org, crafted using Gatsby and TailwindCSS. This documentation is auto-generated via TypeDoc, sourced directly from the library's internal JSDocs comments.`,
    contractType: "sideProject",
    dateStart: new Date("2018-01-17"),
    partners: [],
    tags: ["side project", "open-source"],
    technologies: [TypeScript, Jest, Rollup],
    tools: [],
    industry: "Software",
    website: {
        href: "https://gridl.js.org",
        label: "gridl.js.org",
    },
    image,
    image2x,
    image4x,
};
