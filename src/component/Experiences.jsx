import { ExperienceCard } from "./ExperienceCard";
import { ListOfExperiences } from "../utility/listOfExperiences";
export const Experiences = () => {
  const experiences = ListOfExperiences;
  return (
    <div className="flex flex-col items-center mt-20 w-full">
      {/* Header */}
      <div className="inline-block bg-white px-20 py-2 rounded-xl shadow text-xl font-semibold">
        Experiences
      </div>

      {/* Timeline */}
      <div className="relative mt-12 w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-3.5 top-0 h-full w-0.5 bg-green-900"></div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Dot */}
              <div className="w-8 flex justify-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-8"></div>
              </div>

              {/* Card */}
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};