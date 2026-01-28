import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-yellow-1000 text-black pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* About / Portfolio Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Dikshit Kumar</h2>
            <p className="max-w-xs">
              Fullstack Developer | Passionate about building modern web apps and clean UI/UX.
            </p>

            {/* Contact */}
            <div className="mt-4 flex flex-col gap-2 text-gray-800">
              <div className="flex items-center gap-2">
                <FaEnvelope /> <span>dikshitbcrec@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone /> <span>+91 8340148299</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-1 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Connect with Me</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/dikshitbcrec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/dikshit-kumar-a7a75b195" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center font-semibold text-sm">
          © {new Date().getFullYear()} Dikshit Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
