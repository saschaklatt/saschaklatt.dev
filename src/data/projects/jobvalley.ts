import type {Project} from "../typedefs";
import {Studitemps} from "../companies";
import {Contentful, MongoDB, NextJS, NodeJS, React, Storybook, Tailwind, Vercel} from "../technologies";
import image from "../../assets/images/project-jobvalley@2x.png";
import {JIRA} from "../tools";

// prettier-ignore
export const Jobvalley: Project = {
    title: "jobvalley.com",
    subline: "Website relaunch from slow WordPress to fast-loading headless CMS solution.",
    description: "I was hired by Studitemps GmbH to help realising the relaunch of the corporate website jobvalley.com (former studitemps.de) and convert the previous WordPress site to a fast loading headless solution using modern technologies such as Contentful, Next.js and Tailwind. Working closely with the Marketing and UX/UI departments, we formed a great team to get the project started. With a tight schedule in mind, we managed to create the first version within a few weeks and improved the project in the following months.",
    website: {
        href: "https://jobvalley.com",
        label: "jobvalley.com",
    },
    dateStart: new Date("2021-02-01"),
    dateEnd: new Date("2022-12-31"),
    contractType: "freelance",
    industry: "Recruitment",
    teamSize: 5,
    role: "Lead developer, full-stack",
    client: Studitemps,
    tags: ["freelance", "front-end", "back-end", "cms"],
    technologies: [React, NextJS, Tailwind, MongoDB, NodeJS, Contentful, Storybook, Vercel],
    tools: [JIRA],
    partners: [],
    image,
};
