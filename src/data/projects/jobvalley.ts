import type {Project} from "../typedefs";
import {Studitemps} from "../companies";
import {Contentful, MongoDB, NextJS, NodeJS, React, Storybook, Tailwind, Vercel} from "../technologies";
import {JIRA} from "../tools";
import image from "../../assets/images/project-jobvalley.webp";
import image2x from "../../assets/images/project-jobvalley@2x.webp";
import image4x from "../../assets/images/project-jobvalley@4x.webp";

// prettier-ignore
export const Jobvalley: Project = {
    id: "jobvalley",
    title: "jobvalley.com",
    subline: "Website relaunch from WordPress to blazing-fast headless CMS solution.",
    description: "I was engaged by Studitemps GmbH to spearhead the transformation of their corporate website from studitemps.de to jobvalley.com. Transitioning away from the initial WordPress infrastructure, we employed cutting-edge technologies including Contentful, Next.js, and Tailwind to achieve a high-speed, headless solution. Collaborating seamlessly with the Marketing and UX/UI departments, our cohesive team efficiently initiated the project. Despite a tight deadline, we launched the primary version in just a few weeks. Over the subsequent months, we further enhanced the platform by incorporating features such as automated job postings through an in-house job API, and integration with prominent external job platforms like Xing and Indeed.",
    website: {
        href: "https://jobvalley.com",
        label: "jobvalley.com",
    },
    dateStart: new Date("2021-02-01"),
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
    image2x,
    image4x,
};
