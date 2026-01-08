import ProjectList from "@/components/projectList";
import HorizontalLine from "@/components/ui/horizontalLine";

const projects = () => {
  return (
    <div>
      <div className="flex justify-center py-4 text-3xl font-bold">
        Projects
      </div>
      <HorizontalLine />
      <ProjectList />
    </div>
  );
};

export default projects;
