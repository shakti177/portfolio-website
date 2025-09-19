import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const experienceData = [
  {
    position: "Field and Operations Manager",
    company: "Zomato Ltd",
    location: "Vadodara, Gujarat, India",
    period: "Sept 2025 - Present",
    responsibilities: [
      "Managing a team of delivery executives to ensure timely and efficient delivery of orders.",
      "Coordinating with restaurant partners to ensure smooth operations and resolve any issues that may arise.",
      "Analyzing delivery data to identify areas for improvement and implementing strategies to enhance delivery performance.",
      "Ensuring compliance with company policies and procedures, as well as local regulations.",
      "Providing training and support to delivery executives to enhance their skills and knowledge.",
      "Collaborating with other departments, such as customer support and marketing, to ensure a seamless customer experience.",
    ],
  },
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
    <section
      id="experience"
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
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-800 dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-neutral-700">
                <div className="p-6 pb-2">
                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center dark:text-white">
                      <Briefcase className="h-5 w-5 mr-2 text-blue-800 dark:text-gray-400" />
                      {item.position}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium dark:text-gray-200">
                        {item.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.location}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-blue-800 dark:text-gray-400 shrink-0 mt-0.5" />
                          <span className="dark:text-gray-300">
                            {responsibility}
                          </span>
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
