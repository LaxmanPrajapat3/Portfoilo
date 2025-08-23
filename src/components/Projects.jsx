import { useState } from "react";
import { motion } from "framer-motion";
import projectData from "../data/projectData";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-purple-900 rounded-lg p-5 shadow-lg cursor-pointer"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm">{project.description.slice(0, 80)}...</p>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
