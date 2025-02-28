import React from "react";
import Section from "../layouts/Section";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TechStack } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import ProductCards from "../ui/ProductsCards";

type Props = {};

export default function ProjectsSection({}: Props) {
  return (
    <>
      <Section>
        <SectionHeader>Projects</SectionHeader>
        <ProductCards />
      </Section>
    </>
  );
}
