import type {Project} from "../typedefs";
import {Astro, GitHub, Matomo, Netlify, React, Tailwind, TypeScript} from "../technologies";
import {AffinityDesigner, JIRA} from "../tools";
import {SaschaKlatt as SaschaKlattCompany} from "../companies/sascha-klatt";
import image from "../../assets/images/project-saschaklatt.webp";
import image2x from "../../assets/images/project-saschaklatt@2x.webp";
import image4x from "../../assets/images/project-saschaklatt@4x.webp";

// prettier-ignore
export const SaschaKlatt: Project = {
    title: "saschaklatt.dev",
    subline: "Redesign of my portfolio website.",
    description: "In September 2023, I revamped my developer portfolio website in a record time of just 10 days, transitioning from idea, through design, to implementation. The result is a sleeker, more aesthetically pleasing, and user-centric interface. Crafted with React, Tailwind, and Astro, the site is seamlessly hosted on Netlify. Leveraging Astro's island architecture, the site boasts lightning-fast load times without compromising on functionality or accessibility. For those interested in the nitty-gritty, the source code is publicly available on GitHub, offering a deeper dive into the implementation details.",
    website: {
        href: "https://saschaklatt.dev",
        label: "saschaklatt.dev",
    },
    client: SaschaKlattCompany,
    contractType: "sideProject",
    dateStart: new Date("2023-09-01"),
    dateEnd: new Date("2023-09-07"),
    role: "Full-stack developer and UX/UI",
    tags: ["side-project", "front-end", "ux/ui"],
    technologies: [TypeScript, React, Astro, Tailwind, Netlify, Matomo],
    tools: [GitHub, JIRA, AffinityDesigner],
    partners: [],
    image,
    image2x,
    image4x,
};
