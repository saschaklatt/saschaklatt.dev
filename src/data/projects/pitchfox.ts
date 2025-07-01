import type {Project} from "../typedefs";
import {AuthJS, NextJS, MongoDB, NodeJS, OpenAI, PostHog, Stripe, TypeScript, Vercel, Shadcn} from "../technologies";
import {GitLab, JIRA, Whimsical} from "../tools";
import image from "../../assets/images/project-pitchfox.webp";
import image2x from "../../assets/images/project-pitchfox@2x.webp";
import image4x from "../../assets/images/project-pitchfox@4x.webp";

// prettier-ignore
export const Pitchfox: Project = {
    id: "pitchfox",
    title: "PITCHFOX.ai",
    subline: "AI role-play platform to master business conversations.",
    description: `PITCHFOX is an AI-powered roleplay app designed to help introverted founders, freelancers, and creators boost their confidence and communication skills in pitching, sales, and networking. Users practice lifelike conversations with diverse AI personas simulating real-world scenarios — from investor meetings to client calls — within a judgment-free environment. The app provides structured roleplay sessions and actionable feedback across key performance metrics like clarity, confidence, and responsiveness. Currently in early validation, PITCHFOX is building toward its first working demo to empower non-salesy people to communicate with impact.`,
    website: {
        href: "https://www.pitchfox.ai",
        label: "www.pitchfox.ai",
    },
    client: undefined,
    contractType: "startup",
    dateStart: new Date("2025-04-01"),
    industry: "Education",
    role: "Solo Founder",
    tags: ["startup", "front-end", "back-end", "ux/ui", "ai"],
    technologies: [TypeScript, NextJS, Shadcn, MongoDB, NodeJS, OpenAI, AuthJS, Vercel, Stripe, PostHog],
    tools: [GitLab, Whimsical, JIRA],
    partners: [],
    teamSize: 1,
    image,
    image2x,
    image4x,
};
