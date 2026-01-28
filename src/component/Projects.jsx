import { ProjectCard } from "./ProjectCard";
import {projectData} from "../utility/listOfProject";
export const Projects = () => {
  

  return (
    <div className="flex flex-col justify-center items-center mt-20 w-full">
      {/* Header */}
      <div className="inline-block bg-white px-20 py-2 rounded-xl shadow text-xl font-semibold">
        Projects
      </div>

      {/* Projects Grid */}
      <div className="bg-yellow-50 w-full mt-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
