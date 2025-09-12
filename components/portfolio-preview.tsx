"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Addis Path Trailers",
    description: "A website for a trailer rental company",
    fullDescription:
      "A website for a trailer rental company that allows users to rent trailers for various purposes.",
    category: "Web Design",
    year: "2023",
    image: "/addis-path.png",
    tools: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    href: "https://addispathtrailers.com",
  },
  {
    title: "Addis Path Trailers",
    description: "A website for a trailer rental company",
    fullDescription:
      "A website for a trailer rental company that allows users to rent trailers for various purposes.",
    category: "Web Design",
    year: "2023",
    image: "/addis-path.png",
    tools: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    href: "https://addispathtrailers.com",
  },
  {
    title: "Addis Path Trailers",
    description: "A website for a trailer rental company",
    fullDescription:
      "A website for a trailer rental company that allows users to rent trailers for various purposes.",
    category: "Web Design",
    year: "2023",
    image: "/addis-path.png",
    tools: ["Wordpress", "Elementor", "CSS", "JavaScript"],
    href: "https://addispathtrailers.com",
  },

  {
    title: "Grace Church",
    description: "A website and a dashboard for a church",
    fullDescription:
      "A website and a dashboard for a church that allows users to manage their church's events, sermons, and other resources.",
    category: "Fullstack Development",
    year: "2023",
    image: "/grace-church.png",
    tools: ["Next.js", "Tailwind", "TypeScript", "Node.js"],
    github: "https://github.com/justmikk/grace-church",
  },
  {
    title: "Grace Church",
    description: "A website and a dashboard for a church",
    fullDescription:
      "A website and a dashboard for a church that allows users to manage their church's events, sermons, and other resources.",
    category: "Fullstack Development",
    year: "2023",
    image: "/grace-church.png",
    tools: ["Next.js", "Tailwind", "TypeScript", "Node.js"],
    github: "https://github.com/justmikk/grace-church",
  },
  {
    title: "Grace Church",
    description: "A website and a dashboard for a church",
    fullDescription:
      "A website and a dashboard for a church that allows users to manage their church's events, sermons, and other resources.",
    category: "Fullstack Development",
    year: "2023",
    image: "/grace-church.png",
    tools: ["Next.js", "Tailwind", "TypeScript", "Node.js"],
    github: "https://github.com/justmikk/grace-church",
  },
];

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "Web Design", label: "Web Design" },
  { id: "Fullstack Development", label: "Fullstack Development" },
  { id: "Graphics Design", label: "Graphics Design" },
  { id: "Video Editing", label: "Video Editing" },
];

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Creative Portfolios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a showcase of my diverse projects and creations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
                  : "border-purple-500/30 text-purple-300 hover:bg-purple-500/10 bg-transparent hover:border-purple-500/50"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <ProjectCard
              key={`${item.title}-${activeFilter}`}
              title={item.title}
              description={item.description}
              year={item.year}
              category={item.category}
              image={item.image}
              tools={item.tools}
              href={item.href}
              github={item.github}
              fullDescription={item.fullDescription}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
