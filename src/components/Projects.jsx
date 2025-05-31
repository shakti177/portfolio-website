import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import uomo from "../assets/uomo.png";
import flashfeed from "../assets/flashfeed.png";
import postopia from "../assets/postopia.png";
import { useEffect, useState } from "react";

const projectsData = [
  {
    title: "Postopia Blogging Website",
    description:
      "Postopia is a blogging website built with ReactJS, ExpressJS, and MongoDB. It allows users to create, read, update, and delete blog posts. The website features a user-friendly interface, enabling easy navigation and interaction. Users can register, log in, and manage their profiles while enjoying a seamless blogging experience.",
    image: postopia,
    tags: ["ReactJS", "ExpressJS", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shakti177/postopia",
    githubRepo: "shakti177/postopia",
    live: "https://postopia.vercel.app/",
  },
  {
    title: "UOMO Ecommerce Website",
    description:
      "Discover Uomo Ecommerce, where sleek design meets seamless functionality. Powered by ReactJS, React Router DOM, Material UI, Redux Toolkit, and SwiperJS, our site ensures a smooth, responsive experience across all devices. Shop confidently with features like easy cart management, detailed product views, and instant order confirmations.",
    image: uomo,
    tags: ["ReactJS", "Redux Toolkit", "Material UI", "SwiperJS"],
    github: "https://github.com/shakti177/uomo-ecommerce-website-reactjs",
    githubRepo: "shakti177/uomo-ecommerce-website-reactjs",
    live: "https://uomo-ecommerce-website.netlify.app/",
  },
  {
    title: "News App Using React Native",
    description:
      "React Native-based mobile application designed for seamless news aggregation. Connected the app to the NewsData service so that it pulls in fresh news whenever someone opens it. Included integrating the API, designing an intuitive user interface, implementing dynamic content rendering via FlatList and a Slider component for top news, and enabling infinite scrolling for a fluid browsing experience.",
    image: flashfeed,
    tags: ["React Native", "API Integration", "Mobile App"],
    github: "https://github.com/shakti177/FlashFeed-News-App-React_Native",
    githubRepo: "shakti177/FlashFeed-News-App-React_Native",
    live: "https://flashfeed-news-website.netlify.app/",
  },
];

async function fetchGitHubStars(repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return null;
  }
}

export default function Projects() {
  const [stars, setStars] = useState({});

  useEffect(() => {
    const fetchStars = async () => {
      const starsData = {};
      for (const project of projectsData) {
        if (project.githubRepo) {
          const starCount = await fetchGitHubStars(project.githubRepo);
          starsData[project.githubRepo] = starCount;
        }
      }
      setStars(starsData);
    };

    fetchStars();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100/30 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-800 dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full flex flex-col bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-600/10 dark:bg-neutral-950 text-blue-800 dark:text-white rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 pb-6 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm border text-black dark:text-white border-gray-300 dark:border-neutral-700 rounded-md dark:bg-neutral-950 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" /> GitHub
                      {project.githubRepo &&
                        stars[project.githubRepo] !== undefined && (
                          <span className="ml-2 flex items-center text-gray-600 dark:text-gray-300">
                            <Star className="h-3 w-3 mr-1 fill-blue-800 text-blue-800 dark:fill-white dark:text-white" />
                            {stars[project.githubRepo]}
                          </span>
                        )}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm bg-blue-800 text-white dark:text-black rounded-md hover:bg-blue-700 dark:bg-white dark:hover:bg-gray-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
