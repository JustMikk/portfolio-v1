import React from "react";
import Section from "../layouts/Section";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TechStack } from "@/lib/constants";

type Props = {};

export default function ProjectsSection({}: Props) {
  return (
    <>
      <Section>
        <h1 className="pb-6 font-normal text-3xl">Projects</h1>
        <hr className="text-violet-200 pb-9" />
      </Section>
    </>
  );
}
