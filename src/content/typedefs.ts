import type {ImageMetadata} from "astro";

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
    technologies: Technology[];
    industry?: string;
    teamSize?: number;
    contractType: "freelance" | "employed" | "sideProject";
    client?: Client;
    partners: Client[];
}

export interface Technology {
    id: string;
    name: string;
}

export interface Client {
    name: string;
    website?: Website;
    logo?: ImageMetadata;
    city: string;
}
