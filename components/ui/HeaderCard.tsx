"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { DynamicIcon } from "lucide-react/dynamic";
import { ThemeToggle } from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import { Button } from "./button";
import { FlipWords } from "./flip-words";
import { titles } from "@/lib/constants";

export function HeaderCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-transparent backdrop-blur relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-neutral-700 w-auto sm:w-[24rem] h-auto sm:h-[39rem] rounded-3xl p-6 border  ">
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={0}
          className="w-full mt-4"
        >
          <Image
            src="/images/profile.jpg"
            height="1000"
            width="700"
            className="h-auto w-5/6 m-auto object-cover rounded-2xl group-hover/card:shadow-xl"
            alt="profile"
          />
        </CardItem>
        <CardItem className=" w-full flex flex-col items-center justify-center gap-2">
          <h1 className="mt-16 text-2xl ">Mikiyas Hailegebreal</h1>
          <FlipWords
            className="font-medium text-xl pt-[2px] px-3"
            words={titles}
          />
        </CardItem>
        <CardItem className="w-full mt-5">
          <SocialLinks />
        </CardItem>
        <CardItem className="w-full mt-8">
          <Button
            size="lg"
            className="w-full bg-violet-800 text-gray-200 hover:text-violet-300 hover:bg-transparent hover:border hover:border-violet-400"
          >
            Download CV
          </Button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
