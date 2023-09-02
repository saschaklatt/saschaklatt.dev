import {Adb, BMBF, InviaFlights, KnickDesign, RicoKlatt, Robole, Studitemps} from "./clients";
import {
    Bootstrap,
    Contentful,
    Drupal,
    Express,
    Gatsby,
    GitLab,
    GraphQL,
    JIRA,
    Jest,
    Lit,
    Mapbox,
    MongoDB,
    NextJS,
    NodeJS,
    Polymer,
    REST,
    React,
    Redmine,
    Redux,
    ReduxSaga,
    Rollup,
    Storybook,
    Swagger,
    Tailwind,
    TypeScript,
    Vercel,
    WebComponents,
} from "./technologies";
import type {Project} from "./typedefs";

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
    technologies: [React, NextJS, Tailwind, MongoDB, NodeJS, Contentful, Storybook, Vercel, JIRA],
    partners: [],
};

// prettier-ignore
export const FluegeDe: Project = {
    title: "fluege.de",
    subline: "I had the chance to support the front-end team of fluege.de - a comparison portal for air travel.",
    description: "The web application go.fluege.de quickly and reliably compares thousands of airlines and offers the users the most suitable flight connections at the lowest price.",
    website: {
        href: "https://go.fluege.de",
        label: "go.fluege.de",
    },
    dateStart: new Date("2020-02-01"),
    dateEnd: new Date("2021-06-30"),
    contractType: "freelance",
    role: "Front-end developer",
    client: InviaFlights,
    industry: "Travel",
    technologies: [WebComponents, Lit, Polymer, Redux, ReduxSaga, JIRA],
    partners: [],
};

// prettier-ignore
export const PolitischBilden: Project = {
    title: "politischbilden.de",
    subline: "Front-end development and REST API design for an online portal to share educational resources.",
    description: "Together with robole and Knick Design I had the opportunity to build the online platform politischbilden.de. The project plays a pioneering role in the field of political Open Educational Resources (OER) in Germany. Actors from educational practice are networked, strengthened and supported. The platform is particularly aimed at actors in the field of political education. This includes educational institutions and independent educators as well as respect coaches, teachers and students, and people who work on political issues in general.",
    dateStart: new Date("2019-07-01"),
    dateEnd: new Date("2020-02-28"),
    contractType: "freelance",
    role: "Lead front-end developer",
    client: Adb,
    partners: [Robole, KnickDesign],
    technologies: [React, Gatsby, Redux, NodeJS, Express, REST, GraphQL, GitLab, Swagger, Redmine],
    industry: "Education",
    teamSize: 4,
    website: {
        href: "https://politischbilden.de",
        label: "politischbilden.de",
    }
};

// prettier-ignore
export const BmbfClientII: Project = {
    title: "BMBF Client II",
    subline: "Development of the Client II website about the support measures of the German Federal Government.",
    description: "CLIENT II is a funding measure of the Federal Ministry of Education and Research of the Federal Republic of Germany (BMBF), which supports demand-oriented research cooperations with selected emerging and developing countries. The website presents all funding projects in detail, as well as news, events and other information about CLIENT II.",
    dateStart: new Date("2019/01/01"),
    dateEnd: new Date("2019/06/30"),
    contractType: "freelance",
    role: "Drupal developer",
    client: BMBF,
    partners: [Robole, KnickDesign],
    technologies: [Drupal, Mapbox, Redmine],
    industry: "Government",
    teamSize: 4,
    website: {
        href: "https://bmbf-client.de/",
        label: "bmbf-client.de",
    },
};

// prettier-ignore
export const RIO: Project = {
    title: "RIO",
    subline: "Front-end development for a cloud-based telematics platform.",
    description: "RIO is a cloud-based telematics platform that connects the entire transport and logistics ecosystem. The platform enables the networking of all participants in the supply chain and thus makes transport and logistics processes more efficient. RIO is a brand of the TRATON GROUP.",
    contractType: "employed",
    dateStart: new Date("2016-09-01"),
    dateEnd: new Date("2018-12-31"),
    partners: [],
    role: "Front-end developer",
    client: InviaFlights,
    industry: "Transportation",
    technologies: [React, Redux, ReduxSaga, Bootstrap, GitLab, Swagger, JIRA],
};

// prettier-ignore
export const KlattEis: Project = {
    title: "Klatt Eis",
    subline: "Concept, design and develtopment of a small ice cream business website.",
    description: `"Klatt Eis" is a small ice cream company founded by my brother Rico Klatt in 2020. The ice cream is sold in an on-site ice cream parlor and in a homemade Italian Piaggio ice cream van. To market the company digitally, I created a small business website that includes information about the ice cream van's next locations, automatically pulled from an Apple calendar with dates and geographic location, as well as general information about the company and its products. I started by designing some wireframes with Adobe XD, which we optimized step by step until we had a final design that we were all happy with. Then I started building the static website using Next.js, Contentful and TailwindCSS. In addition to the information pages, the website also includes a multi-step booking form that allows you to book the ice cream van for your events.`,
    contractType: "sideProject",
    dateStart: new Date("2021-06-01"),
    partners: [],
    technologies: [],
    client: RicoKlatt,
    industry: "Food",
    role: "Full-stack developer",
    website: {
        href: "https://klatt-eis.de",
        label: "klatt-eis.de",
    },
};

// prettier-ignore
export const Gridl: Project = {
    title: "gridl",
    subline: "An open source library to handle 2d grid data structures I built as a side project.",
    description: `In 2018, I was very interested in pursuing a career as a game developer. During this time, I worked a lot with grid data structures, for example for board games or to position objects in a room. The data structure is represented by two-dimensional arrays or "grids". After implementing a whole bunch of helper functions to manipulate these grids over and over again, I decided to put everything into an open source library called "gridl" and publish it on npm.`,
    contractType: "sideProject",
    dateStart: new Date("2018-17-01"),
    partners: [],
    technologies: [TypeScript, Jest, Rollup],
    industry: "Software",
    website: {
        href: "https://gridl.js.org",
        label: "gridl.js.org",
    },
};

// prettier-ignore
export const allProjects: Project[] = [
    Jobvalley,
    FluegeDe,
    PolitischBilden,
    BmbfClientII,
    RIO,
    KlattEis,
    Gridl,
];
