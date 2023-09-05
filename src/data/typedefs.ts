import type {ImageMetadata} from "astro";
import type {IconId} from "../typedefs";

export interface Website {
    href: string;
    label: string;
}

export interface Project {
    title: string;
    subline: string;
    description: string;
    website?: Website;
    dateStart: Date;
    dateEnd?: Date;
    role?: string;
    tags: string[];
    technologies: Technology[];
    tools: Tool[];
    industry?: string;
    teamSize?: number;
    contractType: "freelance" | "employed" | "sideProject" | "startup";
    client?: Company;
    employer?: Company;
    partners: Company[];
    image: ImageMetadata;
}

export interface Technology {
    id: string;
    name: string;
}

export interface Tool {
    id: string;
    name: string;
}

export interface Company {
    name: string;
    website?: Website;
    logo?: ImageMetadata;
    city: string;
}

export interface Link {
    href: string;
    rel?: string;
    target?: "_blank" | "_self";
}

export interface Resource {
    title: string;
    description: string;
    link: Link;
    iconId: IconId;
}

export interface Person {
    firstName: string;
    lastName: string;
    image: ImageMetadata;
    link?: string;
}

export interface Testimonial {
    text: string;
    referrer: Person;
    referrerRole: string;
    referrerCompany?: Company;
}
