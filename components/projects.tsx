import { MoveRightIcon } from "lucide-react";
import ProjectList from "./projectList";
import { Button } from "./ui/button";
import HorizontalLine from "./ui/horizontalLine";

const Projects = () => {
  return (
    <div>
      <div className="py-4 text-xl font-bold">Projects</div>
      <HorizontalLine />

      <ProjectList limit={4} />

      <div className="-mt-4 flex justify-center py-2">
        <Button asChild className="active:scale-[0.98]">
          <a href="/projects">
            All Projects
            <MoveRightIcon />
          </a>
        </Button>
      </div>
      <HorizontalLine />
    </div>
  );
};

export default Projects;
