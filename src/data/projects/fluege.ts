import type {Project} from "../typedefs";
import {InviaFlights} from "../companies";
import {JIRA, Lit, Polymer, Redux, ReduxSaga, WebComponents} from "../technologies";
import image from "../../assets/images/project-fluege@2x.png";

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
    tags: ["freelance", "front-end"],
    technologies: [WebComponents, Lit, Polymer, Redux, ReduxSaga, JIRA],
    partners: [],
    image
};
