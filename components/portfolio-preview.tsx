"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    fullDescription:
      "Complete e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
    category: "Fullstack Development",
    year: "2023",
    image: "/modern-ecommerce-clothing-website.jpg",
    tools: ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind"],
    href: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/username/ecommerce-platform",
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity and logo design for tech startup",
    fullDescription:
      "Comprehensive brand identity package including logo design, color palette, typography, business cards, and brand guidelines for a modern tech startup.",
    category: "Graphics Design",
    year: "2023",
    image: "/modern-brand-identity-design-showcase.jpg",
    tools: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with stunning animations",
    fullDescription:
      "Responsive portfolio website featuring smooth animations, dark theme, project showcases, and contact forms. Optimized for performance and SEO.",
    category: "Web Design",
    year: "2023",
    image: "/modern-developer-portfolio-website-dark-theme.jpg",
    tools: ["Next.js", "React", "Tailwind", "TypeScript"],
    href: "https://portfolio-demo.vercel.app",
  },
  {
    title: "Mobile Banking App",
    description: "React Native mobile app for digital banking",
    fullDescription:
      "Secure mobile banking application with biometric authentication, transaction history, bill payments, and real-time notifications.",
    category: "Fullstack Development",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600&text=Banking+App",
    tools: ["React Native", "Firebase", "TypeScript", "Node.js"],
    github: "https://github.com/username/banking-app",
  },
  {
    title: "Product Launch Video",
    description: "Promotional video for SaaS product launch",
    fullDescription:
      "High-quality promotional video featuring motion graphics, professional voiceover, and compelling storytelling for a SaaS product launch campaign.",
    category: "Video Editing",
    year: "2023",
    image: "/video-editing-timeline-interface.jpg",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
  },
  {
    title: "Restaurant Website",
    description: "Responsive website design for local restaurant",
    fullDescription:
      "Modern restaurant website with online menu, reservation system, location details, and customer reviews. Fully responsive and SEO optimized.",
    category: "Web Design",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600&text=Restaurant+Site",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    href: "https://restaurant-demo.vercel.app",
  },
]

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "Web Design", label: "Web Design" },
  { id: "Fullstack Development", label: "Fullstack Development" },
  { id: "Graphics Design", label: "Graphics Design" },
  { id: "Video Editing", label: "Video Editing" },
]

export function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Creative Portfolios</h2>
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
  )
}
