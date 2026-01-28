export const ListOfSkill = ({ skill }) => {
  return (
    <div className="flex items-center gap-2 px-2 py-1 shadow-sm hover:bg-black hover:text-white transition-colors duration-200 hover:cursor-default rounded-lg">
      {/* Skill Icon */}
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-6 h-6"
      />

      {/* Skill Name */}
      <span>{skill.name}</span>
    </div>
  );
};
