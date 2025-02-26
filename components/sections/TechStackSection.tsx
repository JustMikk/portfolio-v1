import React from "react";
import Section from "../layouts/Section";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TechStack } from "@/lib/constants";

type Props = {};

export default function TechStackSection({}: Props) {
  return (
    <>
      <Section>
        <h1 className="pb-6 font-normal text-3xl">My Tech Stack</h1>
        <hr className="text-violet-200 pb-9" />
        {/* Tech stack Tooltips */}
        <div className="flex justify-center gap-24 flex-wrap mb-16">
          <AnimatedTooltip items={TechStack} />
        </div>
      </Section>
    </>
  );
}
