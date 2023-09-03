import type {Project} from "../typedefs";
import {BMBF, KnickDesign, Robole} from "../clients";
import {Drupal, Mapbox, Redmine} from "../technologies";
import image from "../../assets/images/project-bmbf-client-ii@2x.png";

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
    image,
};
