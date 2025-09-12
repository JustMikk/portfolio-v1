"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    year: string
    category: string
    image: string
    tools: string[]
    href?: string
    github?: string
    fullDescription?: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 overflow-hidden bg-gray-900 border-gray-800">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>

        {/* Project Image */}
        <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} - ${project.description}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>

        {/* Project Details */}
        <div className="p-8 overflow-y-auto flex-1">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-600/30">
              {project.category}
            </Badge>
            <time className="text-gray-400 text-sm" dateTime={project.year}>
              {project.year}
            </time>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">{project.title}</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.fullDescription || project.description}</p>

          {/* Tools Used */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4 text-xl">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.href && (
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 transition-all duration-200 hover:scale-105"
                onClick={() => window.open(project.href, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </Button>
            )}
            {project.github && (
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-purple-500 flex items-center gap-2 bg-transparent transition-all duration-200 hover:scale-105"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4" />
                View Source Code
              </Button>
            )}
            {project.href && (
              <Button
                variant="secondary"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center gap-2 transition-all duration-200"
                onClick={() => {
                  navigator.clipboard.writeText(project.href!)
                }}
              >
                <ExternalLink className="w-4 h-4" />
                Copy Project Link
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
