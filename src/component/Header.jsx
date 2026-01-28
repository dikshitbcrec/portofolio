// import profileImg from "../../public/img/DIKSHIT_KUMAR.jpg"
// export const Header = () => {
//   return (
//     <div className="flex flex-col h-screen justify-center items-center">
//       <div className="flex flex-row w-full max-w-4xl mx-3 px-3 items-center">
//         <div className="flex-1">
//           <h1 className="text-5xl font-extrabold">Hello I'm Dikshit Kumar</h1>
//           <h3 className="text-2xl font-semibold border-b-indigo-500">
//             Senior Software Engineer
//           </h3>
//         </div>
//         <div className="flex-1">
//           <div className="relative w-40 h-40">
//             <img
//               src="/img/DIKSHIT_KUMAR.jpg"
//               alt="Profile"
//               className="w-full h-full rounded-full object-cover"
//             />

//             <svg
//               className="absolute top-0 left-0 w-full h-full"
//               viewBox="0 0 200 200"
//             >
//               <path
//                 fill="rgba(0,123,255,0.3)"
//                 d="M40.5,-61.7C53.3,-52.5,60,-34.7,60.5,-17.8C61,-0.9,55.4,15.8,47.5,29.1C39.7,42.4,29.5,52.3,16.7,59.7C3.8,67,-11.5,71.8,-26.2,68.6C-40.9,65.5,-54.9,54.3,-61.2,40.3C-67.4,26.3,-66,9.4,-61.2,-6.1C-56.4,-21.5,-48.2,-35.5,-37,-45.6C-25.7,-55.7,-12.8,-61.9,1,-63.1C14.7,-64.3,29.5,-60.8,40.5,-61.7Z"
//                 transform="translate(100 100)"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export const Header = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full px-4">
//         {/* Text Section */}
//         <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:pr-8">
//           <h1 className="text-5xl font-extrabold">Hello, I'm Dikshit Kumar</h1>
//           <h3 className="text-2xl font-semibold mt-2 border-b-2 border-indigo-500 inline-block">
//             Senior Software Engineer
//           </h3>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <div className="relative w-40 h-40">
//             <img
//               src="/img/DIKSHIT_KUMAR.jpg"
//               alt="Profile"
//               className="w-full h-full rounded-sm object-cover"
//             />

//             <svg
//               className="absolute top-0 left-0 w-full h-full"
//               viewBox="0 0 200 200"
//             >
//               <path
//                 fill="rgba(0,123,255,0.3)"
//                 d="M40.5,-61.7C53.3,-52.5,60,-34.7,60.5,-17.8C61,-0.9,55.4,15.8,47.5,29.1C39.7,42.4,29.5,52.3,16.7,59.7C3.8,67,-11.5,71.8,-26.2,68.6C-40.9,65.5,-54.9,54.3,-61.2,40.3C-67.4,26.3,-66,9.4,-61.2,-6.1C-56.4,-21.5,-48.2,-35.5,-37,-45.6C-25.7,-55.7,-12.8,-61.9,1,-63.1C14.7,-64.3,29.5,-60.8,40.5,-61.7Z"
//                 transform="translate(100 100)"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import {Greetings} from "../utility/listOfGreeting";

export const Header = () => {
  const [text, setText] = useState("");
  const [greetIndex, setGreetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);


  useEffect(() => {
    let timeout;

    if (typing) {
      if (charIndex < Greetings[greetIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + Greetings[greetIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 80); // typing speed
      } else {
        timeout = setTimeout(() => setTyping(false), 1500); // wait before deleting
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 50); // deleting speed
      } else {
        setTyping(true);
        setGreetIndex((prev) => (prev + 1) % Greetings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, greetIndex]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4">
        {/* Profile Image */}
        <img
          src="/img/DIKSHIT_KUMAR.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />

        {/* Typing Greeting */}
        <h3 className="font-mono text-center m-0">
          {text}
          <span className="border-r-2 border-black animate-pulse ml-1"></span>
        </h3>
        <h3 className="m-0 mt-1 font-bold">Senior Software Engineer</h3>

        {/* Download Resume Button */}
        <a
          href="https://docs.google.com/document/d/1_j_15jAgl0DPTf6tFA18uUVYHvIXTUg5/edit?usp=sharing&ouid=115494427783563355574&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 px-6 py-3 hover:bg-green-400 hover:rounded-lg  transition-colors"
        >
          Download Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 3h7m0 0v7m0-7L10 14"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10v11h11"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
