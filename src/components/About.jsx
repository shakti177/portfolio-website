"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
            <div className="aspect-square rounded-full bg-blue-600/10 flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Shakti Tamrakar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Shakti Tamrakar</h3>
            <p className="text-gray-600 mb-6">
              I am a Computer Science Engineer with experience in web
              development. I specialize in ReactJS and WordPress development,
              with a strong foundation in data structures and algorithms. I am
              passionate about creating efficient, user-friendly applications
              and solving complex problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span>Khurai, Madhya Pradesh, India</span>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span>+91-9644605710</span>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center md:col-span-2">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span>shaktitamrakar14@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
