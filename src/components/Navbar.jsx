import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center focus:outline-none"
        >
          <img
            src={logo}
            alt="Shakti Tamrakar Logo"
            className="h-7 w-[200px] md:w-auto"
          />
        </button>

        {/* Desktop Navigation*/}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1Om3JTOALyAqV7SYkvm1HVDme-jw6fC_m/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Navigation*/}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <motion.div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                custom={navItems.length}
                variants={navItemVariants}
                className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                <a
                  href="https://drive.google.com/file/d/1Om3JTOALyAqV7SYkvm1HVDme-jw6fC_m/view"
                  target="_blank"
                >
                  Resume
                </a>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
