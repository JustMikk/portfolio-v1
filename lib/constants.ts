import {
  BookOpen,
  Briefcase,
  ChartNoAxesCombined,
  Code2,
  FileText,
  MessageCircle,
  PenTool,
  ServerCogIcon,
  Settings,
  Star,
  TabletSmartphone,
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
    name: "Testimonials",
    href: "#testimonials",
    icon: Star,
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
  {
    component: BsGithub,
    key: "github",
    link: "https://github.com/JustMikk",
    name: "Github",
  },
  {
    component: BsLinkedin,
    key: "linkedin",
    link: "https://www.linkedin.com/in/mikiyas-hailegebreal-019487350",
    name: "Linkedin",
  },
  {
    component: BsTwitterX,
    key: "twitter",
    link: "https://x.com/JustMik22?t=PF3wCVH-ab1DgrWrz0unJw&s=09",
    name: "TwitterX",
  },
  {
    component: BsTelegram,
    key: "telegram",
    link: "https://t.me/Miki_yas",
    name: "Telegram",
  },
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

export const services = [
  {
    title: "Frontend Development",
    description:
      "Expert in building dynamic and scalable web applications with high performance using Next JS, React JS and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "Create robust and efficient server-side applications with Express, Hono, Postgres and Prisma.",
    icon: ServerCogIcon,
  },
  {
    title: "Mobile App Development",
    description:
      "Experienced in developing user-friendly and responsive mobile apps use React Native and Expo.",
    icon: TabletSmartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Proficent in crafting stunning product designs and experiences.",
    icon: PenTool,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Skilled in improving in search engine rankings and visibility.",
    icon: ChartNoAxesCombined,
  },
];

export const testimonials = [
  {
    quote:
      "I had an amazing time working with Mikiyas, and I am genuinely impressed by his expertise and professionalism. Throughout the entire process, he delivered outstanding work, carefully managing every detail. I highly recommend working with him.",
    name: "Nejmiah",
    title: "A business owner",
  },
  {
    quote:
      "Mikiyas is a skilled, reliable frontend developer. He expertly translates UI designs into pixel-perfect code, proactively solves problems, and delivers exceptional work. Highly recommended.",
    name: "Henok Assefa",
    title: "UI/UX Designer",
  },
  {
    quote:
      "Mikiyas is a fantastic frontend developer. His clean, efficient, and well-documented code seamlessly integrates with the backend. He proactively improves architecture and is a true collaborator. Highly recommended.",
    name: "Matthias Mulugeta",
    title: "Backend Developer",
  },
];
