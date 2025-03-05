import {
  BookOpen,
  Briefcase,
  FileText,
  MessageCircle,
  Settings,
} from "lucide-react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPerson,
  BsTelegram,
  BsTools,
  BsTwitterX,
} from "react-icons/bs";
import {
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const NavLinks = [
  {
    name: "About",
    href: "#",
    icon: BsPerson,
    current: true,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: BsTools,
    current: false,
  },
  {
    name: "Works",
    href: "#works",
    icon: Briefcase,
    current: false,
  },
  {
    name: "Services",
    href: "#services",
    icon: Settings,
    current: false,
  },
  {
    name: "Resume",
    href: "#resume",
    icon: FileText,
    current: false,
  },
  {
    name: "Blog",
    href: "#blog",
    icon: BookOpen,
    current: false,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: MessageCircle,
    current: false,
  },
];

export const SocialLinks = [
  { component: BsGithub, key: "github", link: "", name: "Github" },
  { component: BsLinkedin, key: "linkedin", link: "", name: "Linkedin" },
  { component: BsTwitterX, key: "twitter", link: "", name: "TwitterX" },
  { component: BsTelegram, key: "telegram", link: "", name: "Telegram" },
  // { component: BsInstagram, key: "instagram", link: "", name: "Instagram" },
];

export const TechStack = [
  { id: 1, name: "HTML", image: "/images/HTML.svg" },
  { id: 2, name: "CSS", image: "/images/CSS.svg" },
  { id: 3, name: "Javascript", image: "/images/Javascript.svg" },
  { id: 4, name: "Typescript", image: "/images/Typescript.svg" },
  { id: 5, name: "React JS", image: "/images/React.svg" },
  { id: 6, name: "Node JS", image: "/images/Node.js.svg" },
  { id: 7, name: "Tailwind CSS", image: "/images/TailwindCSS.svg" },
  { id: 8, name: "Redux", image: "/images/Redux.svg" },
  { id: 9, name: "Next JS", image: "/images/NextJS.svg" },
  { id: 10, name: "React Query", image: "/images/ReactQuery.svg" },
  { id: 11, name: "Figma", image: "/images/Figma.svg" },
  { id: 12, name: "Prisma", image: "/images/Prisma.svg" },
];

export const titles = [
  "Fullstack Developer",
  "Product Designer",
  "Software Engineer",
  "Problem Solver",
];

export const projects = [
  {
    id: 1,
    title: "WindBnB",
    description: "A clone of Airbnb",
    images: ["/images/windbnb.png"],
    link: "https://wind-bnb-five.vercel.app/",
  },
  {
    id: 2,
    title: "Cook Book",
    description: "A place to share your recipes",
    images: ["/images/cook-book.png"],
    link: "https://github.com/JustMikk/Cook_Book",
  },
  {
    id: 3,
    title: "Addis Path",
    description: "A trailer rental business based on Atlanta",
    images: ["/images/addis-path.png"],
    link: "https://addispathtrailers.com/",
  },
  {
    id: 4,
    title: "Grace Church",
    description: "A dashboard to manage church activities",
    images: ["/images/church-dashboard.png"],
    link: "https://github.com/Awura-Projects1/Grace_Church",
  },
];
