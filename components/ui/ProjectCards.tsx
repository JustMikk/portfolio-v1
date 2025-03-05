import { projects } from "@/lib/constants";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

export default function ProjectCards({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
          link={project.link}
        />
      ))}
    </div>
  );
}
