import React from "react";
import { NavLinks } from "../lib/constants";
import Navlink from "@/components/layouts/Navlink";
import Navbar from "@/components/layouts/Navbar";
import { HeaderCard } from "@/components/ui/HeaderCard";
import CursorFollower from "@/components/CursorFollower";
import IntroSection from "@/components/sections/IntroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="relative min-h-screen bg-violet-100 bg-no-repeat bg-cover bg-center  dark:bg-[url('/images/bg.gif')]">
        <div className="absolute inset-0 dark:bg-neutral-900 opacity-100 dark:opacity-60"></div>
        <div className="relative py-12 max-w-[1440px] w-full mx-auto">
          <div className="flex flex-col lg:flex-row justify-center gap-12 w-full mx-auto">
            <div className="w-auto ">
              <div className="sticky top-0 ">
                <HeaderCard />
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-start w-full">
              <div className="hidden lg:flex sticky top-0 z-20 ">
                <Navbar />
              </div>

              {/* Intro Section */}

              <div className="flex flex-col gap-9">
                <IntroSection />

                {/* Skills Section */}

                <div id="skills">
                  <TechStackSection />
                </div>

                {/* Projects Section */}

                <div id="works">
                  <ProjectsSection />
                </div>

                {/* Services Section */}

                <div id="services">
                  <ServicesSection />
                </div>

                {/* Testimonial Section */}

                <div id="testimonials">
                  <TestimonialSection />
                </div>

                {/* Contact Section */}

                <div id="contact">
                  <ContactSection />
                </div>

                {/* Footer Section */}

                <FooterSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CursorFollower />
    </>
  );
}
