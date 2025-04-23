import { useEffect, useState } from "react";
import defaultImage from "../assets/img/mainBG.jpg";
import { getGitHubRepos } from "../service/serviceProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  async function getRepos() {
    const res = await getGitHubRepos();
    const newProjects = res
      .filter((repo) =>
        repo.html_url.startsWith("https://github.com/DanieleBiscari/")
      )
      .map((repo) => {
        return {
          title: repo.name,
          description: repo.description,
          image: `https://raw.githubusercontent.com/DanieleBiscari/${repo.name}/master/thumbnail.png`,
          link: repo.html_url,
        };
      });
    console.log(res);
    setProjects(newProjects);
  }

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-center mb-10 text-slate-50">
        I Miei Progetti
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow min-h-[400px] flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              onError={handleImageError}
              className="w-full h-48 object-cover rounded-xl mb-4" 
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              className="text-blue-500 hover:underline font-medium mt-auto"
            >
              Scopri di più
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
