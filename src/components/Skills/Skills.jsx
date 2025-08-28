import Language from "./Languague";
import "./Skills.css";
import Tech from "./Tech";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <motion.h2 
          variants={slideBottom(0.2)}
          initial="initial"
          whileInView="animate"
          className="SkillareaTitle"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
        >
          <Tech />
        </motion.div>
        <motion.div
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
        >
          <Language />
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
