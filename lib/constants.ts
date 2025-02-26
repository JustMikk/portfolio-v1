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
    href: "#about",
    icon: BsPerson,
    current: true,
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
    name: "Skills",
    href: "#skills",
    icon: BsTools,
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
