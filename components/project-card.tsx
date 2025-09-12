"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { ProjectModal } from "./project-modal";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  category: string;
  image: string;
  tools: string[];
  href?: string;
  github?: string;
  fullDescription?: string;
}

export function ProjectCard({
  title,
  description,
  year,
  category,
  image,
  tools,
  href,
  github,
  fullDescription,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <article
        className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="article"
        aria-labelledby={`project-title-${title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} - ${description}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={handleViewDetails}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transform transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                style={{
                  transform: isHovered
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(0.9)",
                  opacity: isHovered ? 1 : 0,
                }}
                aria-label={`View ${title} project details`}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="secondary"
              className="bg-purple-600/20 text-purple-400 border-purple-600/30 hover:bg-purple-600/30"
            >
              {category}
            </Badge>
            <time className="text-gray-400 text-sm" dateTime={year}>
              {year}
            </time>
          </div>

          <h3
            id={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"
          >
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between">
            {/* 🔥 Tools as simple tags instead of icons */}
            <div className="flex flex-wrap gap-2">
              {tools.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1 rounded-full bg-purple-600/10 text-purple-400 border border-purple-500/30"
                >
                  {tool}
                </span>
              ))}
              {tools.length > 4 && (
                <span className="text-gray-400 text-sm">
                  +{tools.length - 4}
                </span>
              )}
            </div>

            {/* Link Icon */}
            {href && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(href, "_blank");
                }}
                className="p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-full hover:bg-purple-500/10"
                aria-label={`Visit ${title} project`}
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </article>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{
          title,
          description,
          year,
          category,
          image,
          tools,
          href,
          github,
          fullDescription,
        }}
      />
    </>
  );
}
