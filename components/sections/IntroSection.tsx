import React from "react";
import Section from "../layouts/Section";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TechStack } from "@/lib/constants";

type Props = {};

export default function IntroSection({}: Props) {
  return (
    <>
      <Section>
        {/* Header Text */}

        <div className="mb-12">
          <h3 className="text-2xl mb-6">Hello, I'm a Fullstack Developer</h3>
          <h1 className="text-5xl/normal font-normal">
            A full-stack mobile app and web developer with over 3 years of
            <span className="bg-violet-800 rounded-full p-3 py-0 font-medium text-center ml-3 -rotate-45 text-black">
              experience
            </span>
            .
          </h1>
        </div>

        {/* Badges */}

        <div className="flex gap-12 mb-16">
          <div className="flex gap-4 items-center">
            <h1 className="text-6xl/normal font-normal">3+</h1>
            <h3 className="text-2xl w-1/3 text-wrap">Years of experience</h3>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-6xl/normal font-normal">12</h1>
            <h3 className="text-2xl w-1/3 text-wrap">Completed Projects</h3>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-6xl/normal font-normal">4+</h1>
            <h3 className="text-2xl w-1/3 text-wrap">Satisfied Clients</h3>
          </div>
        </div>

        {/* Tech stack Tooltips */}
        <div className="flex justify-center gap-16 mb-16">
          <AnimatedTooltip items={TechStack} />
        </div>

        {/* About Me */}

        <div>
          <h4 className="text-lg mb-6">About me</h4>
          <h3 className="text-xl font-light">
            A Fullstack developer, experienced with building both web and mobile
            apps. Profficent in Typescript & Javascript, Frameworks like React
            JS, Next JS, Express JS, React Native and more
          </h3>
        </div>
      </Section>
    </>
  );
}
