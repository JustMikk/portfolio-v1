import React from "react";
import { NavLinks } from "../lib/constants";
import Navlink from "@/components/layouts/Navlink";
import Navbar from "@/components/layouts/Navbar";
import { HeaderCard } from "@/components/ui/HeaderCard";
import CursorFollower from "@/components/CursorFollower";
import IntroSection from "@/components/sections/IntroSection";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="relative min-h-screen bg-white bg-no-repeat bg-cover bg-center  dark:bg-[url('/images/bg.gif')]">
        <div className="absolute inset-0 dark:bg-black opacity-100 dark:opacity-70"></div>
        <div className="relative py-12 max-w-[1440px] w-full mx-auto">
          <div className="flex flex-col lg:flex-row justify-center gap-12 w-full mx-auto">
            <div className="w-auto ">
              <div className="sticky top-0 ">
                <HeaderCard />
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-start w-full">
              <div className="sticky top-0 z-20">
                <Navbar />
              </div>
              <IntroSection />
            </div>
          </div>
        </div>
      </div>
      <CursorFollower />
    </>
  );
}
