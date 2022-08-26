import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  CTA_TEXT,
  GREETING_DESCRIPTION,
  GREETING_TEXT,
  HERO_IMAGE,
} from "../data/data";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";
import AboutContainer from "./AboutContainer";
import ContactConrainer from "./ContactContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased bg-base-100 text-base-content">
      <Hero
        image={HERO_IMAGE}
        greetingText={GREETING_TEXT}
        greetingDescription={GREETING_DESCRIPTION}
        buttonText={CTA_TEXT}
      />
      <ExperienceContainer />
      <div className="px-12 divider" />
      <ProjectsContainer />
      <div className="px-12 divider" />
      <SkillsContainer />
      <div className="px-12 divider" />
      <AboutContainer />
      <div className="px-12 divider" />
      <ContactConrainer />
      <Footer />
    </div>
  );
};

export default HomeContainer;
