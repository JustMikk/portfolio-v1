"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    title: "DevCraft",
    description: "Developer Portfolio Website For a Personal Brand",
    fullDescription:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark theme, and optimized performance for showcasing development projects and skills.",
    year: "2023",
    category: "Web Design",
    image: "/modern-developer-portfolio-website-dark-theme.jpg",
    tools: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    href: "https://devcraft-demo.vercel.app",
    github: "https://github.com/username/devcraft",
  },
  {
    title: "Futuretech",
    description: "Blog Website For a Business Brand",
    fullDescription:
      "A cutting-edge tech blog platform with content management system, user authentication, and real-time comments. Built with modern web technologies for optimal performance and SEO.",
    year: "2023",
    category: "Fullstack Development",
    image: "/futuristic-tech-blog-website-dark-interface.jpg",
    tools: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind"],
    href: "https://futuretech-demo.vercel.app",
    github: "https://github.com/username/futuretech",
  },
  {
    title: "Testant",
    description: "Blog Website For a Business Brand",
    fullDescription:
      "Clean and professional business blog with advanced content management, SEO optimization, and analytics integration. Designed for maximum readability and user engagement.",
    year: "2023",
    category: "Web Design",
    image: "/clean-business-blog-website-light-interface.jpg",
    tools: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
    href: "https://testant-demo.vercel.app",
  },
  {
    title: "Klothink",
    description: "Ecommerce Website For a Business Brand",
    fullDescription:
      "Full-featured e-commerce platform with shopping cart, payment integration, inventory management, and admin dashboard. Built for scalability and optimal user experience.",
    year: "2023",
    category: "Fullstack Development",
    image: "/modern-ecommerce-clothing-website.jpg",
    tools: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind", "Stripe"],
    href: "https://klothink-demo.vercel.app",
    github: "https://github.com/username/klothink",
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity and logo design",
    fullDescription:
      "Comprehensive brand identity package including logo design, color palette, typography, and brand guidelines. Created using modern design principles and industry best practices.",
    year: "2023",
    category: "Graphics Design",
    image: "/modern-brand-identity-design-showcase.jpg",
    tools: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "Product Launch Video",
    description: "Promotional video for tech startup",
    fullDescription:
      "High-quality promotional video featuring motion graphics, professional voiceover, and compelling storytelling. Designed to showcase product features and drive user engagement.",
    year: "2023",
    category: "Video Editing",
    image: "/video-editing-timeline-interface.jpg",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
  },
]

const categories = ["All", "Web Design", "Fullstack Development", "Graphics Design", "Video Editing"]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/30"
                  }`}
                  aria-label={`Filter projects by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
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
