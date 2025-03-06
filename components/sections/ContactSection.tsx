import React from "react";
import SectionHeader from "./SectionHeader";
import { ContactForm } from "../forms/ContactForm";

type Props = {};

export default function ContactSection({}: Props) {
  return (
    <>
      <SectionHeader>Contact Me</SectionHeader>
      <ContactForm />
    </>
  );
}
