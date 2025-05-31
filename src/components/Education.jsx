import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Institute of Engineering and Technology (IET), DAVV",
    location: "Indore, Madhya Pradesh",
    period: "2020 - 2023",
    grade: "CGPA - 7.21",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Samrat Ashok Technological Institute Polytechnic College",
    location: "Vidisha, Madhya Pradesh",
    period: "2017 - 2020",
    grade: "CGPA - 7.2",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gray-100/30 dark:bg-neutral-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-blue-800 dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey in Computer Science
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-neutral-700">
                <div className="p-6 pb-2">
                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center dark:text-white">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-800 dark:text-gray-400" />
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-2">
                    <p className="font-medium dark:text-gray-200">
                      {item.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.location}
                    </p>
                    <p className="text-sm font-medium text-blue-800 dark:text-gray-400">
                      {item.grade}
                    </p>
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
