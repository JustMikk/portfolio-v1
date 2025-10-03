"use client";

import Image from "next/image";

const tools = [
  {
    name: "Figma",
    description:
      "Design and prototyping tool for creating user interfaces and collaborative design workflows.",
    icon: "/figma.png?height=40&width=40&text=Figma",
    category: "Web Design",
  },
  {
    name: "React & Next.js",
    description:
      "Modern JavaScript frameworks for building fast, scalable web applications and user interfaces.",
    icon: "/react.png?height=40&width=40&text=React",
    category: "Fullstack Development",
  },
  {
    name: "Wordpress",
    description: "Content Management System for building websites and blogs.",
    icon: "/wordpress.png?height=40&width=40&text=Wordpress",
    category: "Web Design",
  },
  {
    name: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript for better development experience.",
    icon: "/typescript.png?height=40&width=40&text=TS",
    category: "Fullstack Development",
  },
  {
    name: "Node.js & MongoDB",
    description:
      "Backend development tools for building robust server-side applications and database management.",
    icon: "/node-js.png?height=40&width=40&text=Node",
    category: "Fullstack Development",
  },
  {
    name: "Git",
    description:
      "Version control system for tracking changes in any set of files.",
    icon: "/Git.svg?height=40&width=40&text=Git",
    category: "Fullstack Development",
  },
  {
    name: "Adobe Photoshop",
    description: "Professional graphics design tool for visual content.",
    icon: "/photoshop.png?height=40&width=40&text=Adobe",
    category: "Graphics Design",
  },
  {
    name: "After Effects",
    description:
      "Industry-standard motion graphics and visual effects software for video post-production.",
    icon: "/after-effects.png?height=40&width=40&text=AE",
    category: "Video Editing",
  },
  {
    name: "Premiere Pro",
    description:
      "Professional video editing software for creating high-quality video content and storytelling.",
    icon: "/premiere-pro.png?height=40&width=40&text=Premiere",
    category: "Video Editing",
  },
];

export function ToolsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tools I Use with Ease
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering industry-leading tools across web design, fullstack
            development, graphics design, and video editing
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative p-8 bg-background border border-border rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300 overflow-hidden">
                <Image
                  src={tool.icon || "/placeholder.svg"}
                  alt={`${tool.name} icon`}
                  width={40}
                  height={40}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {tool.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tool.description}
              </p>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                  {tool.category}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
