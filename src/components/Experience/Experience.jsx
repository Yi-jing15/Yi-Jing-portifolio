import "./Experience.css";
import logoTHU from "/experience/logo-THU.png";
import arow from "/experience/arow.jpg";
import tsImg from "/experience/ispan.jpg";
import ispan from "/experience/ispan.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";
import { slideBottom } from "../../utility/animation";

const experiences = [
  {
    id: 1,
    img: logoTHU,
    title: "東海大學",
    period: "2013 - 2017",
    description: "日本語言文化學系  學士學位",
    side: "left",
  },
  {
    id: 2,
    img: arow,
    title: "阿榮影業 岸內工務所",
    period: "2021 - 2023",
    description: "行政助理",
    side: "right",
  },
  {
    id: 3,
    img: tsImg,
    title: "賣肝株式會社(虛構)",
    period: "2023 - 2024",
    description: "假工程師",
    side: "left",
  },
  {
    id: 4,
    img: ispan,
    title: "資展國際 前端工程師養成班",
    period: "2024 - 2025",
    description: "職業訓練",
    side: "right",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: custom * 1, // 每個 item 延遲 1 秒
    },
  }),
};

const Experience = () => {
  return (
    <div className="Experience">
      <motion.h2  
        variants={slideBottom(0.2)}
        initial="initial"
        whileInView="animate"
        className="ExperienceTitle"
      >
        Experience
      </motion.h2>
      <div 
       
        className="timeline" 
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`containerExp ${exp.side}Container`}
            variants={slideUp(0.2)}
            initial="initial"
            whileInView="animate"
          >
            <img src={exp.img} alt={exp.title} />
            <div className="textBox">
              <h2>{exp.title}</h2>
              <small>{exp.period}</small>
              <p>{exp.description}</p>
              <span
                className={
                  exp.side === "left" ? "leftContainer-arrow" : "rightContainer-arrow"
                }
              ></span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
