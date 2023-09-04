import {MAN, XPURE} from "../companies";
import {Bootstrap, Docker, GitLab, JIRA, React, Redux, ReduxSaga, Swagger} from "../technologies";
import type {Project} from "../typedefs";
import image from "../../assets/images/project-rio@2x.png";

// prettier-ignore
export const RIO: Project = {
    title: "RIO",
    subline: "Front-end development for a cloud-based telematics platform.",
    description: "RIO is a cloud-based telematics platform that connects the entire transport and logistics ecosystem. The platform enables the networking of all participants in the supply chain and thus makes transport and logistics processes more efficient. RIO is a brand of the TRATON GROUP.",
    contractType: "employed",
    dateStart: new Date("2016-09-01"),
    dateEnd: new Date("2018-12-31"),
    partners: [],
    tags: ["employment", "front-end"],
    role: "Front-end developer",
    client: MAN,
    employer: XPURE,
    industry: "Transportation",
    technologies: [React, Redux, ReduxSaga, Bootstrap, GitLab, Swagger, Docker, JIRA],
    image,
};
