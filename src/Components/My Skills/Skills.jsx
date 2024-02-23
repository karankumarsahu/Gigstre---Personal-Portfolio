import React from "react";
import "../../Styles/Skills.css";
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";

import productDesign from "../../assets/Product Design.svg";
import logoDesign from "../../assets/Logo Design.svg";
import uiDesign from "../../assets/Ui Design.svg";
import iconDesign from "../../assets/Icon Design.svg";

const Skills = () => {
  return (
    <>
      <div className="skills-container" id="skills">
        <div className="skills-inner-container">
          {/* Left Side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="skills-left-side"
          >
            <SkillsCard
              cardImg={productDesign}
              cardTitle={"Product Design"}
              cardDescription={
                " The technological revolution is changing aspect"
              }
            />
            <SkillsCard
              cardImg={logoDesign}
              cardTitle={"Logo Design"}
              cardDescription={
                " The technological revolution is changing aspect"
              }
            />
            <SkillsCard
              cardImg={uiDesign}
              cardTitle={"UI Design"}
              cardDescription={
                "The technological revolution is changing aspect"
              }
            />
            <SkillsCard
              cardImg={iconDesign}
              cardTitle={"Icon Design"}
              cardDescription={
                "The technological revolution is changing aspect"
              }
            />
          </motion.div>

          {/* Right Side */}
          <div className="skills-right-side">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
              className="skills-sub-heading"
            >
              _My Skills
            </motion.p>
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="skills-heading"
            >
              Why Hire Me For Next Project?
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="skills-description"
            >
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn. Factual knowledge is less prized when
              everything you ever need to know can be found on your phone.
              There's no imperative to be an expert at doing everything when you
              can.
            </motion.p>
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="skill-btn"
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
