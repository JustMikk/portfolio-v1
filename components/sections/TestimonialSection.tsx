import React from "react";
import SectionHeader from "./SectionHeader";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "@/lib/constants";

type Props = {};

export default function TestimonialSection({}: Props) {
  return (
    <>
      <SectionHeader>Testimonials</SectionHeader>
      <InfiniteMovingCards speed="fast" items={testimonials} />
    </>
  );
}
