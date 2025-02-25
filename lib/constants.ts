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
