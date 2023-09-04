import type {Project} from "../typedefs";
import {RicoKlatt} from "../companies";
import {Contentful, Netlify, NextJS, React, Tailwind} from "../technologies";
import {GitLab, JIRA} from "../tools";
import image from "../../assets/images/project-klatt-eis@2x.png";

// prettier-ignore
export const KlattEis: Project = {
    title: "Klatt Eis",
    subline: "Concept, design and develtopment of a small ice cream business website.",
    description: `"Klatt Eis" is a small ice cream company founded by my brother Rico Klatt in 2020. The ice cream is sold in an on-site ice cream parlor and in a homemade Italian Piaggio ice cream van. To market the company digitally, I created a small business website that includes information about the ice cream van's next locations, automatically pulled from an Apple calendar with dates and geographic location, as well as general information about the company and its products. I started by designing some wireframes with Adobe XD, which we optimized step by step until we had a final design that we were all happy with. Then I started building the static website using Next.js, Contentful and TailwindCSS. In addition to the information pages, the website also includes a multi-step booking form that allows you to book the ice cream van for your events.`,
    contractType: "sideProject",
    dateStart: new Date("2021-06-01"),
    partners: [],
    tags: ["side project", "front-end", "ux/ui", "cms"],
    technologies: [React, NextJS, Tailwind, Contentful, Netlify],
    tools: [GitLab, JIRA],
    client: RicoKlatt,
    industry: "Food",
    role: "Full-stack developer",
    website: {
        href: "https://klatt-eis.de",
        label: "klatt-eis.de",
    },
    image,
};
