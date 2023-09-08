import type {Project} from "../typedefs";
import {RicoKlatt} from "../companies";
import {Contentful, Netlify, NextJS, React, Tailwind} from "../technologies";
import {GitLab, JIRA} from "../tools";
import image from "../../assets/images/project-klatt-eis.webp";
import image2x from "../../assets/images/project-klatt-eis@2x.webp";
import image4x from "../../assets/images/project-klatt-eis@4x.webp";

// prettier-ignore
export const KlattEis: Project = {
    title: "Klatt Eis",
    subline: "Concept, design and develtopment of a small ice cream business website.",
    description: "Klatt Eis is an ice cream company founded by my brother Rico Klatt in 2020. The company operates both an on-site ice cream parlor and a traditional Italian Piaggio ice cream van. In an effort to spread the word and help the business succeed, I developed a small marketing which features details about the company, its ice cream flavors, and the itinerary of the ice cream van, which is updated through integration with an Apple calendar. The design process began with preliminary wireframing using Adobe XD. After several revisions, a final design was settled upon. The website was constructed using technologies such as Next.js, Contentful, and TailwindCSS. Additionally, it incorporates a multi-step booking form for individuals and businesses interested in securing the ice cream van for events.",
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
    image2x,
    image4x,
};
