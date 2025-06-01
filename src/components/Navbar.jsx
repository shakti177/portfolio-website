import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import logoDark from "../assets/logowhite.png";

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
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const offsets = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          return {
            name: item.name,
            offset: el.offsetTop - 120,
          };
        }
        return null;
      });

      const scrollY = window.scrollY;
      const current = offsets
        .filter(Boolean)
        .reverse()
        .find((item) => scrollY >= item.offset);

      if (
        current &&
        current.name.toLowerCase() !== activeSection.toLowerCase()
      ) {
        setActiveSection(current.name.toLowerCase());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
        scrolled
          ? "bg-white/80 dark:bg-neutral-900 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center focus:outline-none"
        >
          <img
            src={theme === "dark" ? logoDark : logo}
            alt="Shakti Tamrakar Logo"
            className="h-6 md:h-7 w-[190px] md:w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white ${
                activeSection === item.name.toLowerCase()
                  ? "text-blue-800 dark:text-white border-b-2 border-blue-800 dark:border-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1-Izf26pej3TXvHeSjeUpww3EMrVlRW3p/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-sm font-medium text-white dark:text-black bg-blue-800 rounded-md hover:bg-blue-700 dark:bg-white dark:hover:bg-gray-300 transition-colors"
          >
            Resume
          </a>
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="ml-2 p-2 transition-colors">
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button
            className=" p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 transition-colors lg:hidden"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 overflow-hidden"
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
                  className={`px-3 py-2 text-sm font-medium text-left transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? "text-blue-800 dark:text-white border-b border-blue-800 dark:border-white"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                custom={navItems.length}
                variants={navItemVariants}
                className="mt-2 px-4 py-2 text-sm font-medium text-white dark:text-black bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-white dark:hover:bg-gray-300 transition-colors"
              >
                <a
                  href="https://drive.google.com/file/d/1vKQutDUvRWzmR3FhCUbGg7pvLQK0nxe3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
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
