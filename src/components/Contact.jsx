import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <form className="max-w-xl mx-auto bg-purple-900 p-8 rounded-lg space-y-4 shadow-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded bg-purple-700 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-purple-700 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-2 rounded bg-purple-700 text-white focus:outline-none"
        ></textarea>
        <motion.button
          type="submit"
          className="bg-yellow-500 text-purple-950 px-6 py-2 rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
