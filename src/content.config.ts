import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
    schema: z.object({
        client: z.string().optional(),
        clientLogo: z.string().optional(),
        contractType: z.string(), // TODO: enum
        dateStart: z.coerce.date(),
        dateEnd: z.coerce.date().optional(),
        employer: z.string().optional(),
        id: z.string(),
        industry: z.string(), // TODO: enum
        order: z.number().int().optional(),
        partners: z.array(z.string()).optional(),
        role: z.string().optional(),
        subline: z.string(),
        tags: z.array(z.string()),
        teamSize: z.number().int().optional(),
        technologies: z.array(z.string()), // TODO: enum
        title: z.string(),
        tools: z.array(z.string()).optional(),
        website: z.object({
            href: z.string().url(),
            label: z.string(),
        }).optional(),
    }).transform((data) => ({
        ...data,
        order: data.order ?? 0,
    })),
})

const testimonials = defineCollection({
    loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
    schema: z.object({
        id: z.string(),
        order: z.number().int().optional(),
        referrer: z.string(),
        referrerRole: z.string(),
        referrerCompany: z.string(),
        referrerImgBaseName: z.string(),
    }).transform((data) => ({
        ...data,
        order: data.order ?? 0,
    })),
});

const services = defineCollection({
    loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
    schema: z.object({
        id: z.string(),
        imageBaseName: z.string(),
        imageAlt: z.string(),
        order: z.number().int().optional(),
        title: z.string(),
    }).transform((data) => ({
        ...data,
        order: data.order ?? 0,
    })),
});

export const collections = {
    projects,
    testimonials,
    services,
};