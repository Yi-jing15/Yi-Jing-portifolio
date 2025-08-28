import "./About.css";
import ComputerModelContainer from "./computer/ComputerModalContainer";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";
import { slideBottom } from "../../utility/animation";

const About = () => {
  return (
    <div className="about">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="sSection left"
      >
        <ComputerModelContainer />
      </motion.div>
      <div className="sSection right">
        <div className="description">
          <motion.span  
            variants={slideBottom(0.2)}
            initial="initial"
            whileInView="animate"
            className="AboutTitle"
          >
            About <span className="AboutTitle2">me</span>
          </motion.span>

          <motion.p  
            variants={slideUp(0.2)}
            initial="initial"
            whileInView="animate"
          >
            我是陳怡靜，畢業於東海大學日本語言文化學系。個性沉穩細心，富有好奇心，
            對新知識充滿熱忱。為了提升自身競爭力，我積極投入前端工程的學習，
            具備 HTML、CSS、JavaScript 及 React
            等實作經驗，並透過專題實作累積開發能力。
            期望能在實務中持續成長，成為能獨當一面的專業前端工程師，
            為團隊帶來穩定且高品質的開發貢獻。
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
