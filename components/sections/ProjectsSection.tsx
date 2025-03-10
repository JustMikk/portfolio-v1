import React from "react";
import Section from "../layouts/Section";
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
