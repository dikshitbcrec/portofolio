import { listOfSkills } from "../utility/listOfSkills";
import { ListOfSkill } from "./ListOfSkills";
export const Skills = () => {
    return (
  <div className="flex flex-col justify-center items-center w-full">
    {/* Header */}
    <div className="inline-block bg-white px-20 py-2 rounded-xl shadow text-xl font-semibold">
      Skills
    </div>

    {/* Skills container */}
    <div className="bg-yellow-50 w-4xl  mt-4 pt-4">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center p-4 mb-4">
       {listOfSkills.map((skill) =>
        <ListOfSkill key={skill.key} skill={skill}/>
      )}
      </div>
    </div>
  </div>
);

}