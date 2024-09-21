import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex flex-col sm:flex-row items-center justify-center text-center mb-4 sm:mb-0"
          >
            <img
              src="https://i.postimg.cc/nLczy0Vk/ALogo.png"
              className="h-6 mb-2 sm:mb-0"
              alt="A Logo"
            />
            <span className="mr-2 text-[25px] hidden sm:inline">|</span>
            <span className="text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-gray-200">
              Anjil Neupane
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-m font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="me-4 md:me-6 flex items-center group">
              <FaGithub className="mr-1 group-hover:text-gray-800 dark:group-hover:text-white transition-transform transform group-hover:scale-110 duration-200" />
              <a
                href="https://github.com/Anjil0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 dark:hover:text-white transition duration-200"
              >
                Github
              </a>
            </li>
            <li className="me-4 md:me-6 flex items-center group">
              <FaLinkedin className="mr-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform transform group-hover:scale-110 duration-200" />
              <a
                href="https://www.linkedin.com/in/anjil0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li className="me-4 md:me-6 flex items-center group">
              <FaInstagram className="mr-1 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-transform transform group-hover:scale-110 duration-200" />
              <a
                href="https://www.instagram.com/ig_mrhitman/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 dark:hover:text-pink-400 transition duration-200"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center group">
              <FaFileAlt className="mr-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-transform transform group-hover:scale-110 duration-200" />
              <a
                href="https://drive.google.com/file/d/14ir3wtVrX_RYSwCNEHiQCLk58B8XuOUC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 dark:hover:text-green-400 transition duration-200"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline font-semibold">
            Anjil
          </a>
          ™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
