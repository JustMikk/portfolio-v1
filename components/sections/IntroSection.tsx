import React from "react";
import Section from "../layouts/Section";
import { titles } from "@/lib/constants";
import { FlipWords } from "../ui/flip-words";

type Props = {};

export default function IntroSection({}: Props) {
  return (
    <>
      <Section>
        {/* Header Text */}

        <div className="mb-12">
          <div className="flex items-start ">
            <h3 className="text-xl lg:text-2xl font mb-6 whitespace-nowrap">
              Hello, I'm a{" "}
            </h3>
            <FlipWords
              className="font-medium text-2xl pt-[2px] px-3"
              words={titles}
            />
          </div>{" "}
          <h1 className="text-4xl lg:text-5xl/normal font-normal break-words leading-relaxed lg:leading-normal">
            A skilled full stack web and mobile app
            <span className="bg-violet-800 rounded-full p-3 py-0 font-medium text-center mx-3 -rotate-45 text-black">
              developer
            </span>
            with 3+ years of experience.
          </h1>
        </div>

        {/* Badges */}

        <div className="flex flex-wrap gap-6 lg:gap-12 mb-16">
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl lg:text-6xl/normal font-normal">3+</h1>
            <h3 className="text-xl lg:text-2xl w-1/3 text-wrap">
              Years of experience
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl lg:text-6xl/normal font-normal">12</h1>
            <h3 className="text-xl lg:text-2xl w-1/3 text-wrap">
              Completed Projects
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl lg:text-6xl/normal font-normal">4+</h1>
            <h3 className="text-xl lg:text-2xl w-1/3 text-wrap">
              Satisfied Clients
            </h3>
          </div>
        </div>

        {/* About Me */}

        <div>
          <h4 className="text-lg mb-6">About me</h4>
          <h3 className="text-xl/normal font-light leading-loose lg:leading-normal">
            A Fullstack developer, experienced with building both web and mobile
            apps. Profficent in Typescript & Javascript, Frameworks like React
            JS, Next JS, Express JS, React Native and more
          </h3>
        </div>
      </Section>
    </>
  );
}
