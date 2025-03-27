import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import uomo from "../assets/uomo.png";
import flashfeed from "../assets/flashfeed.png";
import postopia from "../assets/postopia.png";

const projectsData = [
  {
    title: "Postopia Blogging Website",
    description:
      "Postopia is a blogging website built with ReactJS, ExpressJS, and MongoDB. It allows users to create, read, update, and delete blog posts. The website features a user-friendly interface, enabling easy navigation and interaction. Users can register, log in, and manage their profiles while enjoying a seamless blogging experience.",
    image: postopia,
    tags: ["ReactJS", "ExpressJS", "MongoDB", "Tailwind CSS"],
    github: null,
    live: "https://postopia.vercel.app/",
  },
  {
    title: "UOMO Ecommerce Website",
    description:
      "Discover Uomo Ecommerce, where sleek design meets seamless functionality. Powered by ReactJS, React Router DOM, Material UI, Redux Toolkit, and SwiperJS, our site ensures a smooth, responsive experience across all devices. Shop confidently with features like easy cart management, detailed product views, and instant order confirmations.",
    image: uomo,
    tags: ["ReactJS", "Redux Toolkit", "Material UI", "SwiperJS"],
    github: "https://github.com/shakti177",
    live: "https://uomo-ecommerce-website.netlify.app/",
  },
  {
    title: "News App Using React Native",
    description:
      "React Native-based mobile application designed for seamless news aggregation. Connected the app to the NewsData service so that it pulls in fresh news whenever someone opens it. Included integrating the API, designing an intuitive user interface, implementing dynamic content rendering via FlatList and a Slider component for top news, and enabling infinite scrolling for a fluid browsing experience.",
    image: flashfeed,
    tags: ["React Native", "API Integration", "Mobile App"],
    github: "https://github.com/shakti177",
    live: "https://flashfeed-news-website.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-600/10 text-blue-800 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6 flex-grow">
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
                <div className="px-6 pb-6 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
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
