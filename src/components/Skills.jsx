import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-purple-800 text-white px-4 py-2 rounded-full text-sm shadow-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
