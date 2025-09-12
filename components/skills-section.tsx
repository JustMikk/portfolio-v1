"use client"

import { Code, Palette, Smartphone, Video, Layers, Database } from "lucide-react"

const skills = [
  {
    icon: Palette,
    title: "Web Design & UI/UX",
    description:
      "Creating stunning, user-centered web designs with modern aesthetics and intuitive user experiences that convert visitors into customers.",
    category: "Web Design",
  },
  {
    icon: Code,
    title: "Fullstack Web Development",
    description:
      "Building robust web applications using React, Next.js, Node.js, and modern databases with scalable architecture.",
    category: "Fullstack Development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications using React Native and Flutter for iOS and Android platforms.",
    category: "Fullstack Development",
  },
  {
    icon: Layers,
    title: "Graphics Design & Branding",
    description:
      "Creating compelling visual identities, logos, and brand materials using Adobe Creative Suite and modern design tools.",
    category: "Graphics Design",
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description:
      "Producing engaging video content and motion graphics using After Effects, Premiere Pro, and DaVinci Resolve.",
    category: "Video Editing",
  },
  {
    icon: Database,
    title: "Backend & Database Management",
    description:
      "Designing and implementing scalable backend systems with PostgreSQL, MongoDB, and cloud infrastructure.",
    category: "Fullstack Development",
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Skills and Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in web design, fullstack development, graphics design, and video editing to bring your vision
            to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <skill.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                  {skill.category}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
