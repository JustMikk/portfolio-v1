"use client";
import React from "react";
import SocialLinks from "../ui/SocialLinks";
import Image from "next/image";
import { NavLinks } from "@/lib/constants";
import Link from "next/link";

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <footer className="bg-transparent dark:text-white text-neutral-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 lg:gap-12 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex gap-8 justify-center items-center">
              <Image src="/images/logo.png" alt="logo" width={50} height={50} />
              <h2 className="text-2xl font-bold">Mikiyas Hailegebreal</h2>
            </div>
            <p className="text-gray-700 pl-20">Software Engineer</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 px-3">
            {NavLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center p-4">
          <SocialLinks />
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Mikiyas Hailegebreal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
