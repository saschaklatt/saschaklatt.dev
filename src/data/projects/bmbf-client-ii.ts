import type {Project} from "../typedefs";
import {BMBF, KnickDesign, Robole} from "../companies";
import {Drupal, Mapbox} from "../technologies";
import {Redmine} from "../tools";
import image from "../../assets/images/project-bmbf-client-ii.webp";
import image2x from "../../assets/images/project-bmbf-client-ii@2x.webp";
import image4x from "../../assets/images/project-bmbf-client-ii@4x.webp";

// prettier-ignore
export const BmbfClientII: Project = {
    title: "BMBF Client II",
    subline: "Development of the Client II website about the support measures of the German Federal Government.",
    description: "CLIENT II is an initiative by the Federal Ministry of Education and Research of the Federal Republic of Germany (BMBF) that promotes research collaborations tailored to the needs of select emerging and developing nations. The website offers an in-depth view of all funded projects and provides the latest news, events, and updates related to CLIENT II. I was responsible for implementing Drupal as the website's content management system. Additionally, I developed an interactive global map using Mapbox to showcase the diverse funding projects.",
    dateStart: new Date("2019/01/01"),
    dateEnd: new Date("2019/06/30"),
    contractType: "freelance",
    role: "Drupal developer",
    client: BMBF,
    partners: [Robole, KnickDesign],
    tags: ["freelance", "back-end", "front-end", "cms"],
    technologies: [Drupal, Mapbox],
    tools: [Redmine],
    industry: "Politics",
    teamSize: 4,
    website: {
        href: "https://bmbf-client.de/",
        label: "bmbf-client.de",
    },
    image,
    image2x,
    image4x,
};
