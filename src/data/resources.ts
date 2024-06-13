import type {Resource} from "./typedefs";

export const Cv: Resource = {
    title: "CV",
    description: "Download my up-to-date CV.",
    link: {
        href: "/pdfs/CV-Sascha-Klatt.pdf?update=05092023",
        target: "_blank",
    },
    iconId: "document",
};

export const Email: Resource = {
    title: "Email",
    description: "Let's get in touch!",
    link: {
        href: "mailto:hello@saschaklatt.dev",
    },
    iconId: "envelope",
};

export const GitHub: Resource = {
    title: "GitHub",
    description: "Check out the source code of this website and other things I've been working on.",
    link: {
        href: "https://github.com/saschaklatt",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
    },
    iconId: "github",
};

export const LinkedIn: Resource = {
    title: "LinkedIn",
    description: "My favorite place to get spammed by recruiters.",
    link: {
        href: "https://www.linkedin.com/in/sascha-klatt/",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
    },
    iconId: "linkedin",
};

export const StackOverflow: Resource = {
    title: "StackOverflow",
    description: "Find my answers and questions about JavaScript, TypeScript, React, and more.",
    link: {
        href: "https://stackoverflow.com/users/2438049/sascha-klatt",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
    },
    iconId: "stackoverflow",
};

export const X: Resource = {
    title: "X",
    description: "I just started to document my web dev journey on X. Feel free to follow me and see what I'm up to.",
    link: {
        href: "https://twitter.com/saschaklatt_dev",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
    },
    iconId: "x",
};

export const Nomadlist: Resource = {
    title: "Nomadlist",
    description: "Stalk me on my nomading trips.",
    link: {
        href: "https://nomadlist.com/@saschaklatt",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
    },
    iconId: "nomadlist",
};

export const Instagram: Resource = {
    title: "Instagram",
    description: "Same as X - just started to document my dev journey here. Feel free to follow me :)",
    link: {
        href: "https://www.instagram.com/saschaklatt.dev/",
        target: "_blank",
        rel: "noopener noreferrer nofollow",
    },
    iconId: "instagram",
};

export const allResources = [
    Cv,
    Email,
    GitHub,
    // StackOverflow,
    // X,
    // Nomadlist,
    // Instagram,
    LinkedIn
];
