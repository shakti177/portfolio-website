import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const experienceData = [
  {
    position: "WordPress Development Intern",
    company: "FeedBox",
    location: "Indore, Madhya Pradesh, India",
    period: "Dec 2022 - May 2023",
    responsibilities: [
      "Developed Client Websites with the help of WordPress CMS.",
      "Worked on various WordPress themes and Plugins",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in the tech industry
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="p-6 pb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                      {item.position}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">{item.company}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-blue-600 shrink-0 mt-0.5" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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
