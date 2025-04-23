import { useEffect, useState } from "react";
import defaultImage from "../assets/img/mainBG.jpg";
import { getGitHubRepos } from "../service/serviceProject";
import { motion } from "framer-motion"; // Importa il motion

const Projects = () => {
  const [projects, setProjects] = useState([]);
  async function getRepos() {
    const res = await getGitHubRepos();
    const newProjects = res
      .filter((repo) =>
        repo.html_url.startsWith("https://github.com/DanieleBiscari/")
      )
      .map((repo) => ({
        title: repo.name,
        description: repo.description,
        image: `https://raw.githubusercontent.com/DanieleBiscari/${repo.name}/master/thumbnail.png`,
        link: repo.html_url,
      }));
    setProjects(newProjects);
  }

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-cover bg-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay per contrasto */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-0" />

      <div className="relative z-10 p-6">
        <motion.h1
          className="text-5xl font-bold text-center mb-4 drop-shadow-xl text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I Miei Progetti
        </motion.h1>

        <motion.p
          className="text-xl text-center text-gray-300 mb-10 max-w-3xl mx-auto drop-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tutti questi progetti sono stati raccolti dinamicamente grazie
          all&apos;API di GitHub 🚀
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 border border-gray-300/20 backdrop-blur-md rounded-2xl shadow-md hover:shadow-slate-300 transition-transform duration-300 p-6 flex flex-col hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.1,
                  delay: index * 0.1, // Ritardo progressivo ma ridotto
                  ease: "easeInOut", // Aggiunto un easing per una transizione più morbida
                },
              }}
              whileHover={{
                scale: 1.05, // Aumenta la dimensione della card
                transition: { duration: 0.01, ease: "easeOut" }, // Transizione dolce
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                onError={handleImageError}
                className="w-full h-48 object-cover rounded-xl mb-4 object-center border border-gray-100"
              />
              <h2 className="text-2xl font-semibold mb-2 text-gray-100">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 flex-grow text-base leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white hover:underline mt-auto font-medium text-right"
              >
                Scopri di più →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
