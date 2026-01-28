// export const ExperienceCard = ({
//   title,
//   company,
//   duration,
//   description,
//   achievement,
// }) => {
//   return (
//     <div className="bg-white shadow-md rounded-xl p-6 w-full">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-gray-600">{company}</p>
//       <p className="text-sm text-gray-400">{duration}</p>
//       <p className="mt-3 text-black-500 text-sm font-mono">{description}</p>
//       {achievement &&
//         achievement.map((achieve, index) => (
//           <div key={index} className="hello">
//             <p>{achieve.img}</p>
//           </div>
//         ))}
//     </div>
//   );
// };

import { AchievementCardModal } from "./AchievementModalCard";

export const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  achievement,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-sm text-gray-400">{duration}</p>
      <p className="mt-3 text-black-500 text-sm font-mono">{description}</p>

      {/* Render AchievementCardModal for each achievement */}
      {achievement && <div><p className="text-black-900 font-bold mt-2 text-center">Achievement</p> </div>}
      {achievement && (
        <div className="mt-4 flex flex-wrap gap-4">
          {achievement.map((achieve, index) => (
            <AchievementCardModal
              key={index}
              img={achieve.img}
              detail={achieve.detail}
            />
          ))}
        </div>
      )}
    </div>
  );
};
