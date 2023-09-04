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
