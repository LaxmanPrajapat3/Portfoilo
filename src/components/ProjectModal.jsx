import { motion } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "100px", opacity: 1, transition: { delay: 0.2 } },
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white text-black p-6 rounded-lg max-w-md w-full shadow-lg"
        variants={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline"
          >
            View Project
          </a>
        )}
        <button
          onClick={onClose}
          className="mt-6 bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
