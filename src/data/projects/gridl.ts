import {Jest, Rollup, TypeScript} from "../technologies";
import type {Project} from "../typedefs";
import image from "../../assets/images/project-gridl@2x.png";

// prettier-ignore
export const Gridl: Project = {
    title: "gridl",
    subline: "An open source library to handle 2d grid data structures I built as a side project.",
    description: `In 2018, I was very interested in pursuing a career as a game developer. During this time, I worked a lot with grid data structures, for example for board games or to position objects in a room. The data structure is represented by two-dimensional arrays or "grids". After implementing a whole bunch of helper functions to manipulate these grids over and over again, I decided to put everything into an open source library called "gridl" and publish it on npm.`,
    contractType: "sideProject",
    dateStart: new Date("2018-01-17"),
    partners: [],
    tags: ["side project", "open source"],
    technologies: [TypeScript, Jest, Rollup],
    tools: [],
    industry: "Software",
    website: {
        href: "https://gridl.js.org",
        label: "gridl.js.org",
    },
    image,
};
