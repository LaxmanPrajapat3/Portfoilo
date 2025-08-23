import { motion } from "framer-motion";

const About = () => {
  const facts = [
    "Graduated with B.Tech in CS (2023)",
    "Built 10+ projects",
    "Contributed to open-source",
  ];

  return (
    <section id="about" className="py-16 container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-purple-900 rounded-lg p-6 shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">
            I'm a passionate developer with a degree in Computer Science, dedicated to building innovative web solutions. My interests include AI, UI/UX design, and open-source projects.
          </p>
        </motion.div>
        <div className="space-y-4">
          {facts.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-purple-900 rounded-lg shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
