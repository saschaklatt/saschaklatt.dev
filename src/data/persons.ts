import type {Person} from "./typedefs";
import imageAlexanderBaehr from "../assets/images/profile-alexander-baehr@2x.png";
import imageChrissyTopal from "../assets/images/profile-chrissy-topal@2x.png";
import imageFelixWolf from "../assets/images/profile-felix-wolf@2x.png";
import imageMartinWilmer from "../assets/images/profile-martin-wilmer@2x.png";
import imageMuratKemaldar from "../assets/images/profile-murat-kemaldar@2x.png";

export const MuratKemaldar: Person = {
    firstName: "Murat",
    lastName: "Kemaldar",
    link: "https://bilebile.de",
    image: imageMuratKemaldar,
};

export const FelixWolf: Person = {
    firstName: "Felix",
    lastName: "Wolf",
    image: imageFelixWolf,
};

export const ChrissyTopal: Person = {
    firstName: "Chrissy",
    lastName: "Topal",
    link: "https://chrissytopal.com/",
    image: imageChrissyTopal,
};

export const MartinWilmer: Person = {
    firstName: "Martin",
    lastName: "Wilmer",
    image: imageMartinWilmer,
};

export const AlexanderBaehr: Person = {
    firstName: "Alexander",
    lastName: "Bähr",
    image: imageAlexanderBaehr,
};

export const allPersons: Person[] = [MuratKemaldar, ChrissyTopal, ChrissyTopal, MartinWilmer, AlexanderBaehr];
