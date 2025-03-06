import { NavLinks } from "@/lib/constants";
import React from "react";
import Navlink from "./Navlink";
import { ThemeToggle } from "../ui/ThemeToggle";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="container h-11 flex sticky items-center gap-4 p-6 pt-12 z-50">
      {NavLinks.map((link) => (
        <Navlink
          key={link.name}
          title={link.name}
          link={link.href}
          icon={link.icon}
        />
      ))}
      <ThemeToggle />
    </div>
  );
}
