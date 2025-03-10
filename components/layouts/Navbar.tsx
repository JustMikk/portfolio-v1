import { NavLinks } from "@/lib/constants";
import React from "react";
import Navlink from "./Navlink";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/button";
import { MdArrowRightAlt } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="container h-11 flex sticky items-center gap-12 p-6 pt-12 z-50">
      <Image src="/images/logo.png" width={60} height={60} alt="logo" />
      <div className="flex items-center gap-4 p-6">
        {NavLinks.map((link) => (
          <Navlink
            key={link.name}
            title={link.name}
            link={link.href}
            icon={link.icon}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link href="#contact">
          <Button className="group">
            Hire Me{" "}
            <ArrowRight className="group-hover:translate-x-1 ease-in-out duration-150" />
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
