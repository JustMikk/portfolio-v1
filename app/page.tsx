import React from "react";
import { NavLinks } from "../lib/constants";
import Navlink from "@/components/layouts/Navlink";
import Navbar from "@/components/layouts/Navbar";
import { HeaderCard } from "@/components/ui/HeaderCard";
import CursorFollower from "@/components/CursorFollower";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="relative min-h-screen bg-white bg-no-repeat bg-cover bg-center  dark:bg-[url('/images/bg.gif')]">
        <div className="absolute inset-0 dark:bg-black opacity-100 dark:opacity-70"></div>
        <div className="relative py-12 px-32">
          <div className="justify-start grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            <div className="container w-auto">
              <HeaderCard />
            </div>
            <div className="flex flex-col gap-6 justify-start w-auto">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <CursorFollower />
    </>
  );
}
