import type {Project} from "../typedefs";
import {MAN, XPURE} from "../companies";
import {Bootstrap, Docker, React, Redux, ReduxSaga} from "../technologies";
import {GitLab, JIRA, Swagger} from "../tools";
import image from "../../assets/images/project-rio@2x.png";

// prettier-ignore
export const RIO: Project = {
    title: "RIO",
    subline: "Front-end development for a cloud-based telematics platform.",
    description: "At XPURE GmbH, I had the opportunity to work on the RIO project, a cloud-based telematics platform that integrates the entire transport and logistics ecosystem. My team was in charge of developing the performance analysis module, which assesses the efficiency of individual truck drivers. Our team of 8 to 10 team members developed systems to collect sensor data from the trucks, transmit it to the back-end, and then present it clearly on the front-end with intuitive dashboards, detailed reports, and recommended actions.  My primary responsibility was the front-end development, working closely with the UX/UI team and the back-end developers. The front-end was developed using React and Bootstrap. To ensure consistency throughout the project, we also developed a cross-team UIKit to ensure a consistent look and feel across the platform.",
    contractType: "employed",
    dateStart: new Date("2016-09-01"),
    dateEnd: new Date("2018-12-31"),
    partners: [],
    tags: ["employment", "front-end", "ux/ui"],
    role: "Front-end developer",
    client: MAN,
    employer: XPURE,
    industry: "Logistics",
    technologies: [React, Redux, ReduxSaga, Bootstrap, Docker],
    tools: [GitLab, JIRA, Swagger],
    teamSize: 8,
    image,
    website: {
        href: "https://rio.cloud",
        label: "rio.cloud",
    }
};
