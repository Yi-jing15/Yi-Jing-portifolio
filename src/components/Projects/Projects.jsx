import { motion } from "framer-motion";
import "./Projects.css"; 
import { projects } from "../../constants";
import { slideUp } from "../../utility/animation";
import { slideBottom } from "../../utility/animation";

const Projects = () => {
  return (
    <div className="projectContainer">
      <motion.h2
        className="ProjectTitle"
        variants={slideBottom(0.2)}
        initial="initial"
        whileInView="animate"
      >
        Projects
      </motion.h2>

      <motion.div
        className="container"
        variants={slideUp(0.2)}
        initial="initial"
        whileInView="animate"
      >
        <div className="projectsGrid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="projectCard"
            >
              <div
                className="projectContent"
                style={{
                  flexDirection:
                    index % 2 === 1 && window.innerWidth > 1024
                      ? "row-reverse"
                      : "row",
                }}
              >
                <div className="projectImage">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="projectInfo">
                  <span className="projectCategory">{project.category}</span>
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDescription">{project.description}</p>
                  <ul className="projectDescription">
                    {project.responsibilities?.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <div className="projectFeatures">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="featureTag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="projectActions">
                    <a href={project.demoUrl} className="btn btnPrimary">
                      Demo
                    </a>
                    <a href={project.codeUrl} className="btn btnSecondary">
                      Github
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                  <div className="projectStats">
                    <div className="statItem">
                      <span>團隊規模：{project.teamSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
