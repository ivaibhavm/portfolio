import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "group relative gap-0 overflow-hidden border-neutral-200 bg-neutral-100 py-0 dark:border-neutral-800 dark:bg-neutral-900",
        "transition-all duration-300",
        "hover:scale-[1.01] hover:shadow-lg",
        "active:scale-[1]",
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link href={project.link}>
          <Image
            src={project.img}
            alt={project.title}
            width={400}
            height={200}
            className={cn(
              "w-full cursor-pointer object-cover",
              "transition-transform duration-300 ease-out",
              "group-hover:scale-[1.02]",
            )}
          />
        </Link>
        <a href={project.link}></a>
      </div>

      {/* Content */}
      <CardContent className="space-y-3 p-4">
        <h3 className="text-lg leading-tight font-semibold">{project.title}</h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        {/* Technologies */}
        <ul className="flex flex-wrap items-center gap-[2px] pt-2">
          {project.technologies.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-1 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"
              aria-label={tech.name}
            >
              <span>{tech.svg}</span>
              <span className="text-[10px]">{tech.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
