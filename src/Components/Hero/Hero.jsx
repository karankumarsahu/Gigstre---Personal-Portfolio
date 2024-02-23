import React from "react";
import { motion } from "framer-motion";
import "../../Styles/Hero.css";

import heroVector from "../../assets/Hero Vector.png";
import heroSvg from "../../assets/Hero Bg.svg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="home">
        <div className="hero-inner-container">
          {/* Left Side */}
          <motion.div className="hero-left-side">
            {/* Headings */}
            <div className="hero-heading-container">
              <motion.h2
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="hero-sub-heading"
              >
                _Introducing
              </motion.h2>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
                className="hero-heading1"
              >
                Hello
              </motion.h1>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
                className="hero-heading2"
              >
                I'm Sahil <span>Singh</span>
              </motion.h1>

              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8,
                }}
                className="hero-description"
              >
                Since beginning my journey as a freelance designer nearby 7
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products.
              </motion.p>

              <Link to="/contact">
                <motion.button
                  initial={{ x: -150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    // type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1,
                  }}
                  className="hero-button"
                >
                  Contact me
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div className="hero-right-side">
            <div className="hero-img-container">
              <motion.img
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 20,
                  delay: 0.9,
                }}
                className="bgImg"
                src={heroSvg}
                alt=""
              />
      

              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1.2,
                }}
                className="vectorImg"
                src={heroVector}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
