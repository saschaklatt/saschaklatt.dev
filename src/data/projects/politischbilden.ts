import type {Project} from "../typedefs";
import {Adb, KnickDesign, Robole} from "../companies";
import {Express, Gatsby, GitLab, GraphQL, NodeJS, REST, React, Redmine, Redux, Swagger} from "../technologies";
import image from "../../assets/images/project-politischbilden@2x.png";

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
    tags: ["freelance", "front-end"],
    technologies: [React, Gatsby, Redux, NodeJS, Express, REST, GraphQL, GitLab, Swagger, Redmine],
    industry: "Education",
    teamSize: 4,
    website: {
        href: "https://politischbilden.de",
        label: "politischbilden.de",
    },
    image
};
