import { motion } from "framer-motion";
import React from "react";
import { ProjectCardProps } from "../types/types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDescription,
  projectImageLogo,
  tech,
  buttonText,
  link,
  id,
}) => {
  return (
    <motion.div transition={{ duration: 0.25 }}>
      <div
        className={`max-w-85% mx-2 sm:mx-6 card ${
          id % 2 === 0
            ? `bg-base-300 text-base-content`
            : `bg-base-200 text-base-content`
        }`}
      >
        <figure className="p-6">
          <img
            src={projectImageLogo}
            alt={projectName}
            className="rounded-lg shadow-lg"
          />
        </figure>
        <div className="max-w-sm card-body">
          <h2 className="card-title ">{projectName}</h2>
          <p>{projectDescription}</p>
          <div className="flex flex-wrap items-center">
            {tech.map((tech, index) => (
              <div
                key={index}
                className={`my-2 mr-2 badge p-3 ${
                  id % 2 === 0
                    ? `text-neutral-content badge-neutral`
                    : `text-secondary-content badge-secondary`
                }`}
              >
                {tech}{" "}
              </div>
            ))}
          </div>
          <div className="card-actions">
            <a href={link}>
              <button
                className={`rounded-full btn btn-primary text-primary-content `}
              >
                {buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
