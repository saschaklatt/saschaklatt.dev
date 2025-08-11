import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
    schema: z.object({
        client: z.string(),
        contractType: z.string(), // TODO: enum
        dateStart: z.coerce.date(),
        dateEnd: z.coerce.date().optional(),
        id: z.string(),
        imageBaseName: z.string(),
        industry: z.string(), // TODO: enum
        partners: z.array(z.string()).optional(),
        role: z.string(),
        subline: z.string(),
        tags: z.array(z.string()),
        teamSize: z.number().int(),
        technologies: z.array(z.string()), // TODO: enum
        title: z.string(),
        tools: z.array(z.string()),
        website: z.object({
            href: z.string().url(),
            label: z.string(),
        }).optional(),
    }),
})

const testimonials = defineCollection({
    loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
    schema: z.object({
        id: z.string(),
        priority: z.number().int().optional(),
        referrer: z.string(),
        referrerRole: z.string(),
        referrerCompany: z.string(),
        referrerImgBaseName: z.string(),
    }).transform((data) => ({
        ...data,
        priority: data.priority ?? 0,
    })),
});

export const collections = {
    projects,
    testimonials,
};