import "./Hero.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shape from "./Shape";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="hTitle"
        >
          Hello,
          <br />
          <span>I'm YI-JING!</span>
        </motion.h1>
      </div>
      <div className="hSection">
        <motion.h1
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="hTitle2"
        >
          On my way to
          <br />
          becoming
          <br />
          <span className="span1">
            a Frontend <br />
            <span>Developer</span>
          </span>
        </motion.h1>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">{/* <img src="/bg.png" alt="" /> */}</div>
      </div>
    </div>
  );
};

export default Hero;
