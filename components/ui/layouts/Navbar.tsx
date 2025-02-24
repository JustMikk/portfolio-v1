import { NavLinks } from "@/lib/constants";
import React from "react";
import Navlink from "./Navlink";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex gap-6 p-8">
      {NavLinks.map((link) => (
        <Navlink
          key={link.name}
          title={link.name}
          link={link.href}
          icon={link.icon}
        />
      ))}
    </div>
  );
}
