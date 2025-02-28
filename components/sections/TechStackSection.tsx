import React from "react";
import Section from "../layouts/Section";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TechStack } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

type Props = {};

export default function TechStackSection({}: Props) {
  return (
    <>
      <Section>
        <SectionHeader>My Tech Stacks</SectionHeader>
        {/* Tech stack Tooltips */}
        <div className="flex justify-center gap-24 flex-wrap mb-16">
          <AnimatedTooltip items={TechStack} />
        </div>
      </Section>
    </>
  );
}
