import React from "react";
import SectionHeader from "./SectionHeader";
import { ServiceCards } from "../ui/ServiceCards";

type Props = {};

export default function ServicesSection({}: Props) {
  return (
    <>
      <SectionHeader>Services</SectionHeader>
      <ServiceCards />
    </>
  );
}
