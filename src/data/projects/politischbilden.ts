import type {Project} from "../typedefs";
import {Adb, KnickDesign, Robole} from "../companies";
import {Express, Gatsby, GraphQL, NodeJS, REST, React, Redux} from "../technologies";
import {GitLab, Redmine, Swagger} from "../tools";
import image from "../../assets/images/project-politischbilden.webp";
import image2x from "../../assets/images/project-politischbilden@2x.webp";
import image4x from "../../assets/images/project-politischbilden@4x.webp";

// prettier-ignore
export const PolitischBilden: Project = {
    id: "politisch-bilden",
    title: "politischbilden.de",
    subline: "Front-end development and REST API design for an online portal to share educational resources.",
    description: "In cooperation with robole and Knick Design, we developed the online platform politischbilden.de for our client Adb - Arbeitskreis deutscher Bildungsstätten. This platform serves as a unique hub for teachers to share resources on political education. My task was to develop the front-end and design a RESTful API using Swagger to create a seamless interface to our custom CMS. Using React and Gatsby as foundational tools, we ensured exceptionally fast loading speeds due to Gatsby's static page generation and advanced image optimization.",
    dateStart: new Date("2019-07-01"),
    dateEnd: new Date("2020-02-28"),
    contractType: "freelance",
    role: "Lead front-end developer",
    client: Adb,
    partners: [Robole, KnickDesign],
    tags: ["freelance", "front-end"],
    technologies: [React, Gatsby, Redux, NodeJS, Express, REST, GraphQL],
    tools: [Redmine, Swagger, GitLab],
    industry: "Education, Politics",
    teamSize: 4,
    website: {
        href: "https://politischbilden.de",
        label: "politischbilden.de",
    },
    image,
    image2x,
    image4x,
};
