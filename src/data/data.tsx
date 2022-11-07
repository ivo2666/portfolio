import Image from "../assets/social.jpg";
import IHACLogo from "../assets/a-c-logo_adobe_express.svg";
import PytecLogo from "../assets/pytec-logo.png";
import SoftuniLogo from "../assets/softuni-logo.png";
import newsApp from "../assets/news-app.png";
import dealership from "../assets/dealership.png";
import MyPic from "../assets/i.jpg";

import {
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://portfolio-lac.vercel.app/";
export const NAME = "Ivaylo Tsvetkov";

export const SECTIONS = [
  "Home",
  "Experience",
  "Projects",
  "Skills",
  "About",
  "Contact",
];
export const HERO_IMAGE = MyPic;
export const CTA_TEXT = "Know More";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "experience", name: SECTIONS[1] },
  { key: 3, route: "projects", name: SECTIONS[2] },
  { key: 4, route: "skills", name: SECTIONS[3] },
  { key: 5, route: "about", name: SECTIONS[4] },
  { key: 6, route: "contact", name: SECTIONS[5] },
];

export const GREETING_TEXT = "Ivaylo";
export const GREETING_DESCRIPTION =
  "Positive, persistent and results-oriented React developer who never gives up ";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: "IH Adventure & Creative",
    position: "React Developer",
    logo: IHACLogo,
    start: "2022-01",
    end: "present",
    description:
      "Development of new features, fixing bugs & learning new things",
  },
  {
    key: 2,
    company: "Pytek",
    position: "React Developer Intern",
    logo: PytecLogo,
    start: "2021-08",
    end: "2021-11",
    description: "Practis and learning new things",
  },
  {
    key: 3,
    company: "Software University - SoftUni",
    position: "Student",
    logo: SoftuniLogo,
    start: "2019-02",
    end: "2020-08",
    description: "Studied Javascript, ReactJS & NodeJS",
  },
];
export const KEYWORDS = [
  "Developer",
  "front end developer based in Sofia",
  "Ivaylo Tsvetkov",
  "Portfolio",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Portfolio",
    projectDescription:
      "A portfolio of my work, where some of the projects I've made are listed. The wesbite is made using latest technologies",
    projectImageLogo: `https://picsum.photos/id/1/600/314`,
    link: "https://github.com/ivo2666/portfolio",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "CSS", "Javascript"],
  },
  {
    id: 2,
    projectName: "News - app",
    projectDescription:
      "A React application that gets news from API using redux-saga. It also has a state manager with redux",
    projectImageLogo: newsApp,
    link: "https://github.com/ivo2666/news-app",
    buttonText: "View Project",
    tech: ["React", "Mui", "Redux", "Saga"],
  },
  {
    id: 3,
    projectName: "Car - Dealership",
    projectDescription:
      "React app whit expess for API and Backend. It use: React, React-Bootstrap, Styled-components, Node.js, Express.js, MongoDB Formidable, Photoswipe and others.",
    projectImageLogo: dealership,
    link: "https://github.com/ivo2666/car-dealership",
    buttonText: "View Project",
    tech: ["React", "Express.js", "MongoDB", "Bootstrap"],
  },
];
/**
 *  @type {SkillsProps}
 * skills
 * Kept level as random but you can hard code it if you want
 */
export const skills: SkillsProps[] = [
  {
    id: 1,
    skill: "Javascript",
    level: 90,
  },
  {
    id: 2,
    skill: "React",
    level: 80,
  },
  {
    id: 3,
    skill: "CSS",
    level: 65,
  },
  {
    id: 4,
    skill: "HTML",
    level: 80,
  },
  {
    id: 5,
    skill: "Node JS",
    level: 34,
  },
  {
    id: 6,
    skill: "Typescript",
    level: 70,
  },
];
