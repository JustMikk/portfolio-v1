"use client";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { portfolioItems } from "@/data/projects";



export function PortfolioPreview() {
  const items = portfolioItems.slice(0, 3);

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

        {/* Filtering removed for homepage preview */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <ProjectCard
              key={item.title}
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
