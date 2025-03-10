"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import SocialLinks from "./SocialLinks";
import { Button } from "./button";
import { FlipWords } from "./flip-words";
import { titles } from "@/lib/constants";
import Link from "next/link";

export function HeaderCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-transparent backdrop-blur relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-neutral-400 w-full sm:w-[24rem] h-auto sm:h-[39rem] rounded-3xl p-6 border  ">
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
            priority
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
          <Link href="/Mikiyas Hailegebreal Resume.pdf" download={true}>
            <Button size="lg" className="w-full">
              Download CV
            </Button>
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
