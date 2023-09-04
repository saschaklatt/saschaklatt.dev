import type {Project} from "../typedefs";
import {Apollo, Astro, GitLab, GraphQL, JIRA, MongoDB, Netlify, NodeJS, Svelte, TypeScript} from "../technologies";
import image from "../../assets/images/project-appocados@2x.png";
import {NataschaFadeeva} from "../companies/natascha-fadeeva";

// prettier-ignore
export const Appocados: Project = {
    title: "appocados.com",
    subline: "Development of a web application to manage and share recipes.",
    description: "Appocados is a web application that allows you to manage and share recipes with your friends. The project was created as part of a hackathon and was developed in a team of four people. I was responsible for the front-end development and the implementation of the REST API. The project was built with React, Redux, Redux Saga, Node.js, Express and MongoDB.",
    website: {
        href: "https://www.appocados.com",
        label: "www.appocados.com",
    },
    contractType: "startup",
    dateStart: new Date("2023-02-01"),
    industry: "Food",
    role: "Systems architect, full-stack developer, and UX/UI",
    tags: ["startup", "front-end", "back-end", "ux/ui"],
    technologies: [TypeScript, Svelte, Astro, MongoDB, NodeJS, Apollo, GraphQL, GitLab, JIRA, Netlify],
    partners: [NataschaFadeeva],
    teamSize: 2,
    image,
};
