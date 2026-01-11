"use client";

import ProjectCard from "./projectCard";
import HorizontalLine from "./ui/horizontalLine";
import { Projects } from "@/data/projects";

interface ProjectListProps {
  limit?: number;
}

const ProjectList = ({ limit }: ProjectListProps) => {
  const visibleProjects = limit ? Projects.slice(0, limit) : Projects;

  // chunk into rows of 2
  const rows: (typeof Projects)[] = [];
  for (let i = 0; i < visibleProjects.length; i += 2) {
    rows.push(visibleProjects.slice(i, i + 2));
  }

  return (
    <div className="pb-4">
      <div className="relative space-y-4 pt-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="pb-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {row.map((project, index) => {
                const isLastProject =
                  rowIndex === rows.length - 1 && index === row.length - 1;

                return (
                  <div key={index}>
                    <ProjectCard project={project} />

                    {/* Mobile: line after EACH project */}
                    {!isLastProject && (
                      <HorizontalLine className="-mx-4 my-4 w-192 sm:hidden" />
                    )}
                  </div>
                );
              })}

              {/* Desktop vertical separator */}
              {row.length === 2 && (
                <div className="absolute inset-y-0 left-1/2 border-neutral-300 sm:border-l dark:border-neutral-800" />
              )}
            </div>

            {/* Desktop: line after EACH ROW */}
            {rowIndex !== rows.length - 1 && (
              <HorizontalLine className="-mx-4 my-4 hidden w-192 sm:block" />
            )}
          </div>
        ))}
      </div>

      <HorizontalLine />
    </div>
  );
};

export default ProjectList;
