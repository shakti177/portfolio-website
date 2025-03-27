import { motion } from "framer-motion";
import { Award, Code, Globe, Trophy } from "lucide-react";

const achievementsData = [
  {
    icon: <Award className="h-8 w-8 text-blue-800" />,
    title: "5 Star in Java on HackerRank",
    description:
      "Achieved 5-star rating in Java programming on HackerRank platform.",
  },
  {
    icon: <Code className="h-8 w-8 text-blue-800" />,
    title: "200+ Problems Solved",
    description:
      "Solved over 200 problems on LeetCode, HackerRank and other coding platforms.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-800" />,
    title: "10+ Personal Blogging Websites",
    description:
      "Created 10+ personal blogging websites with over 1 million visitors.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-blue-800" />,
    title: "PowerPoint Presentation Competition",
    description:
      "Participated in Inter School PowerPoint Presentation Competition and secured 3rd position.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Achievements</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognitions and accomplishments throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full" // Ensure equal height
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex">
                <div className="p-6 flex items-start h-full">
                  <div className="mr-4 mt-1">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
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
