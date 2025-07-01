import {InviaFlights, Robole, Studitemps} from "./companies";
import {AlexanderBaehr, ChrissyTopal, FelixWolf, MartinWilmer, MuratKemaldar, ThomasRoth} from "./persons";
import type {Testimonial} from "./typedefs";

export const allTestimonials: Testimonial[] = [
    {
        referrer: FelixWolf,
        referrerRole: "Online Marketing Manager",
        referrerCompany: Studitemps.name,
        text: "Sascha supported us with the relaunch of our corporate website jobvalley.com. We benefited greatly from his broad and deep expertise in front-end and back-end development, as well as in UX/UI. Thanks to his wealth of experience, he was always able to find a suitable solution even for complex problems. With his friendly and professional manner, he quickly integrated himself into the project team. We could rely on him 100% and I would be very happy to work with him again.",
    },
    {
        referrer: AlexanderBaehr,
        referrerRole: "Team Lead Front-end",
        referrerCompany: InviaFlights.name,
        text: "Sascha has a deep understanding of software development and was quickly able to unfold his solid tech expertise in our complex architecture. He has always been a thoughtful, insightful, motivated developer and his passion and enthusiasm for development helped our team evolve further to create more efficient solutions to lift our projects to the next level.",
    },
    {
        referrer: ThomasRoth,
        referrerRole: "Head Of Development",
        referrerCompany: "MAHENA - marketing.services.kommunikation",
        text: "Sascha is one of those rare people you just don't come across often – genuinely kind, rock-solid, and 100% trustworthy. We've been working together for years on Landbot and Ninox projects, and he always delivers: fast, pragmatic, and solid. Low-code wasn't his thing at first, but now he's really got the hang of it. Would we recommend him? Only if we have to – we'd rather keep him to ourselves.",
    },
    {
        referrer: MuratKemaldar,
        referrerRole: "Front-end Developer",
        referrerCompany: "Freelancer",
        text: "Sascha is one of the few developers I've stayed in touch with as a freelancer, and also (consciously) worked together on several projects. He not only has high quality standards, he also has the right interpersonal skills that make him a well-balanced teammate that I enjoy working with. Sascha is playful, curious, and not afraid to dive into new technologies and trends that are outside his comfort zone.",
    },
    {
        referrer: MartinWilmer,
        referrerRole: "Managing Director",
        referrerCompany: Robole.name,
        text: "Sascha has been developing sophisticated full-stack solutions with us for several years. His way of working is characterised by the highest quality, adherence to deadlines and professional and friendly communication. We are happy to have such a talented and reliable developer in our network.",
    },
    {
        referrer: ChrissyTopal,
        referrerRole: "Front-end Developer",
        referrerCompany: "Freelancer",
        text: "Sascha is a first-class developer. His social skills made the collaboration in the team very pleasant. Together we worked on the relaunch of the jobvalley website. With his expertise, we created a very modern and clean codebase that is fun to work in. If I could put together a dev team in the future, Sascha would definitely be part of it.",
    },
];
