"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { portfolioItems } from "@/data/projects"
import { filterCategories } from "@/data/projects"


export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-16 w-20 h-20 border-2 border-purple-500/20 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-24 w-14 h-14 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 transform rotate-12 animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 border border-purple-500/30 transform rotate-45 animate-ping"></div>
        <div className="absolute top-1/2 left-20 w-6 h-6 bg-indigo-500/40 transform rotate-45 animate-pulse"></div>
      </div>

      <Navigation />

      <AnimatedSection>
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              My Creative <span className="text-purple-300">Portfolios</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Explore a showcase of my diverse projects and creations
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/30"
                  }`}
                  aria-label={`Filter projects by ${category.label}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-gray-400 text-lg mb-6">No projects found for this category.</p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-colors"
                >
                  View all projects
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${project.title}-${activeFilter}`}
                    title={project.title}
                    description={project.description}
                    year={project.year}
                    category={project.category}
                    image={project.image}
                    tools={project.tools}
                    href={project.href}
                    github={project.github}
                    fullDescription={project.fullDescription}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      <Footer />
    </div>
  )
}
