import React from "react";
import Section from "../layouts/Section";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TechStack } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import ProjectCards from "../ui/ProjectCards";

type Props = {};

export default function ProjectsSection({}: Props) {
  return (
    <>
      <Section>
        <SectionHeader>Projects</SectionHeader>
        <ProjectCards />
      </Section>
    </>
  );
}
