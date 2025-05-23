import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { Link } from "react-scroll";

export default function Hero() {
  const texts = ["Shakti Tamrakar", "MERN Developer"];

  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentTextIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
      } else {
        setText(current.substring(0, text.length + 1));
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentTextIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-white z-0" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 flex flex-wrap justify-center">
              Hi, I'm{" "}
              <span className="text-blue-800 ml-2 relative">
                {text}
                <span className="absolute left-full top-0 animate-blink">
                  |
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Computer Science Engineer & Software Developer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to="contact" smooth={true} duration={500}>
              <button className="bg-blue-800 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition">
                Contact Me <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <button className="border border-blue-600 text-blue-800 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                View Projects
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://www.facebook.com/shaktitamrakar17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/shakti_tamrakar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/TamrakarShakti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Twitter className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/in/shaktitamrakar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/shakti177"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:shaktitamrakar14@gmail.com"
              className="text-gray-600 hover:text-black transition"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-20 md:left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight
          className="h-6 w-6 rotate-90 text-gray-600 hover:cursor-pointer"
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </section>
  );
}
