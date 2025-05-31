import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank you for your message! I'll get back to you soon.");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Oops! Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100/30 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-blue-800 dark:bg-white mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with me for opportunities or collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700 h-full flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 dark:text-white">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-800 dark:text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium dark:text-gray-200">Email</p>
                      <a
                        href="mailto:shaktitamrakar14@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 transition-colors"
                      >
                        shaktitamrakar14@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium dark:text-gray-200">Phone</p>
                      <a
                        href="tel:+919644605710"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 transition-colors"
                      >
                        +91-9644605710
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-800 dark:text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium dark:text-gray-200">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Khurai, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-gray-200 dark:border-neutral-700 h-full flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6 dark:text-white">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  <div className="space-y-4 flex-grow">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-neutral-700"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-neutral-700"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-neutral-700"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[120px] px-4 py-2 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-neutral-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full px-4 py-2 bg-blue-800 text-white dark:text-black rounded-md hover:bg-blue-700 dark:bg-white dark:hover:bg-gray-300 transition-colors flex items-center justify-center"
                    disabled={loading}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
