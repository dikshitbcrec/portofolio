export const ProjectCard = ({ title, description, link, tech }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm hover:scale-105 transform transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      {tech && (
        <p className="mt-2 text-sm text-gray-400">Tech: {tech.join(", ")}</p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer" 
          className="mt-3 inline-block text-blue-500 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
};
