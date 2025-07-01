import type {Person} from "./typedefs";
import imageAlexanderBaehr_60 from "../assets/images/profile-alexander-baehr_60.png";
import imageAlexanderBaehr_60_2x from "../assets/images/profile-alexander-baehr_60@2x.png";
import imageAlexanderBaehr_96 from "../assets/images/profile-alexander-baehr_96.png";
import imageAlexanderBaehr_96_2x from "../assets/images/profile-alexander-baehr_96@2x.png";
import imageChrissyTopal_60 from "../assets/images/profile-chrissy-topal_60.png";
import imageChrissyTopal_60_2x from "../assets/images/profile-chrissy-topal_60@2x.png";
import imageChrissyTopal_96 from "../assets/images/profile-chrissy-topal_96.png";
import imageChrissyTopal_96_2x from "../assets/images/profile-chrissy-topal_96@2x.png";
import imageFelixWolf_60 from "../assets/images/profile-felix-wolf_60.png";
import imageFelixWolf_60_2x from "../assets/images/profile-felix-wolf_60@2x.png";
import imageFelixWolf_96 from "../assets/images/profile-felix-wolf_96.png";
import imageFelixWolf_96_2x from "../assets/images/profile-felix-wolf_96@2x.png";
import imageMartinWilmer_60 from "../assets/images/profile-martin-wilmer_60.png";
import imageMartinWilmer_60_2x from "../assets/images/profile-martin-wilmer_60@2x.png";
import imageMartinWilmer_96 from "../assets/images/profile-martin-wilmer_96.png";
import imageMartinWilmer_96_2x from "../assets/images/profile-martin-wilmer_96@2x.png";
import imageMuratKemaldar_60 from "../assets/images/profile-murat-kemaldar_60.png";
import imageMuratKemaldar_60_2x from "../assets/images/profile-murat-kemaldar_60@2x.png";
import imageMuratKemaldar_96 from "../assets/images/profile-murat-kemaldar_96.png";
import imageMuratKemaldar_96_2x from "../assets/images/profile-murat-kemaldar_96@2x.png";
import imageThomasRoth_60 from "../assets/images/profile-thomas-roth_60.png";
import imageThomasRoth_60_2x from "../assets/images/profile-thomas-roth_60@2x.png";
import imageThomasRoth_96 from "../assets/images/profile-thomas-roth_96.png";
import imageThomasRoth_96_2x from "../assets/images/profile-thomas-roth_96@2x.png";

/**
 * Note:
 * Astro's `getImage()` function doesn't work here when running `astro build` for some reason. Maybe a bug.
 * Therefore I had to export the images in the right size into the assets/images/ directory.
 */

export const AlexanderBaehr: Person = {
    firstName: "Alexander",
    lastName: "Bähr",
    image60: imageAlexanderBaehr_60,
    image60_2x: imageAlexanderBaehr_60_2x,
    image96: imageAlexanderBaehr_96,
    image96_2x: imageAlexanderBaehr_96_2x,
};

export const ChrissyTopal: Person = {
    firstName: "Chrissy",
    lastName: "Topal",
    link: "https://chrissytopal.com/",
    image60: imageChrissyTopal_60,
    image60_2x: imageChrissyTopal_60_2x,
    image96: imageChrissyTopal_96,
    image96_2x: imageChrissyTopal_96_2x,
};

export const FelixWolf: Person = {
    firstName: "Felix",
    lastName: "Wolf",
    image60: imageFelixWolf_60,
    image60_2x: imageFelixWolf_60_2x,
    image96: imageFelixWolf_96,
    image96_2x: imageFelixWolf_96_2x,
};

export const MartinWilmer: Person = {
    firstName: "Martin",
    lastName: "Wilmer",
    image60: imageMartinWilmer_60,
    image60_2x: imageMartinWilmer_60_2x,
    image96: imageMartinWilmer_96,
    image96_2x: imageMartinWilmer_96_2x,
};

export const MuratKemaldar: Person = {
    firstName: "Murat",
    lastName: "Kemaldar",
    link: "https://bilebile.de",
    image60: imageMuratKemaldar_60,
    image60_2x: imageMuratKemaldar_60_2x,
    image96: imageMuratKemaldar_96,
    image96_2x: imageMuratKemaldar_96_2x,
};

export const ThomasRoth: Person = {
    firstName: "Thomas",
    lastName: "Roth",
    image60: imageThomasRoth_60,
    image60_2x: imageThomasRoth_60_2x,
    image96: imageThomasRoth_96,
    image96_2x: imageThomasRoth_96_2x,
};
