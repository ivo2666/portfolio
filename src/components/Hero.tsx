import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { HeroProps } from "../types/types";

const Hero: React.FC<HeroProps> = ({
  image,
  greetingText,
  greetingDescription,
  buttonText,
}) => {
  return (
    <div
      className="relative min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-br from-primary to-accent text-base-100"
      id="home"
    >

      <div className="flex flex-wrap text-justify hero-content text-neutral-content">
        <img src={image} alt="person" className="relative max-w-xs mx-auto drop-shadow-xl rounded-2xl lg:bottom-10"/>

        <div className="max-w-md ml-10 text-accent-content">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-5 text-5xl font-bold ">{greetingText}</h1>
            <p className="mb-5">{greetingDescription}</p>
            <Link
              to={"experience"}
              spy={true}
              smooth={true}
              duration={500}
              className="transition rounded-full cursor-pointer btn btn-primary"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
