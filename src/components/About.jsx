import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import photo from "../assets/photo.jpeg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100/30 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-800 dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Computer Science Engineer with a passion for web development and
            problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src={photo}
                alt="Shakti Tamrakar"
                className="size-96 object-cover object-bottom rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Shakti Tamrakar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a Computer Science Engineer with experience in web
              development. I specialize in ReactJS and WordPress development,
              with a strong foundation in data structures and algorithms. I am
              passionate about creating efficient, user-friendly applications
              and solving complex problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-neutral-900 dark:text-gray-200 rounded-lg shadow-sm p-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-800 dark:text-white mr-3" />
                <span>Khurai, Madhya Pradesh, India</span>
              </div>

              <div className="bg-white dark:bg-neutral-900 dark:text-gray-200 rounded-lg shadow-sm p-4 flex items-center">
                <Phone className="h-5 w-5 text-blue-800 dark:text-white mr-3" />
                <a
                  href="tel:+919644605710"
                  className="dark:hover:text-gray-400"
                >
                  +91-9644605710
                </a>
              </div>

              <div className="bg-white dark:bg-neutral-900 dark:text-gray-200 rounded-lg shadow-sm p-4 flex items-center md:col-span-2">
                <Mail className="h-5 w-5 text-blue-800 dark:text-white mr-3" />
                <a
                  href="mailto:shaktitamrakar14@gmail.com"
                  className="dark:hover:text-gray-400"
                >
                  shaktitamrakar14@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
