import type {Project} from "../typedefs";
import {InviaFlights} from "../companies";
import {Lit, Polymer, Redux, ReduxSaga, WebComponents} from "../technologies";
import {GitLab, JIRA, Swagger} from "../tools";
import image from "../../assets/images/project-fluege.webp";
import image2x from "../../assets/images/project-fluege@2x.webp";
import image4x from "../../assets/images/project-fluege@4x.webp";

// prettier-ignore
export const FluegeDe: Project = {
    title: "fluege.de",
    subline: "I had the privilege of collaborating with the front-end team at fluege.de, a leading German air travel comparison portal.",
    description: "The web application go.fluege.de efficiently sifts through thousands of airlines to give users the best flight options at unbeatable prices. In this project, I had the chance to work with Invia Flights' front-end team to modernize the existing platform. We made use of technologies such as Web Components, Polymer, Lit, and Redux and integrated the booking forms with a complex REST-based microservice architecture.",
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
    tags: ["freelance", "front-end"],
    technologies: [WebComponents, Lit, Polymer, Redux, ReduxSaga],
    tools: [GitLab, JIRA, Swagger],
    partners: [],
    image,
    image2x,
    image4x,
};
