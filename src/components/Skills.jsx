import { motion } from "framer-motion";
import { Code, Layout, BookOpen, Lightbulb } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6 text-blue-800 dark:text-gray-400" />,
    skills: ["Java", "Python", "C++", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Frameworks",
    icon: <Layout className="h-6 w-6 text-blue-800 dark:text-gray-400" />,
    skills: ["ReactJS", "React Native"],
  },
  {
    category: "Coursework",
    icon: <BookOpen className="h-6 w-6 text-blue-800 dark:text-gray-400" />,
    skills: [
      "Data Structures",
      "Algorithms",
      "Object Oriented Programming",
      "WordPress",
    ],
  },
  {
    category: "Miscellaneous Skills",
    icon: <Lightbulb className="h-6 w-6 text-blue-800 dark:text-gray-400" />,
    skills: [
      "Problem-Solving",
      "Communication",
      "Analytical",
      "Organizational",
      "Teamwork",
      "Leadership",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100/30 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical and professional skillset
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700 overflow-hidden h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-3 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-600/10 dark:bg-neutral-950 text-blue-800 dark:text-white rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
