import React from "react";
import { Element } from "react-scroll";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading, id, illustration }) => {
  return (
    <div className="grid my-2 mt-2 center lg:grid-cols-2 auto-rows-fr ">
      <Element name={id}>
      <div className="hidden pt-3 antialiased lg:flex" id={id}>
        {illustration}
      </div>
      </Element>
      <div className="ml:0 pt-10 sm:ml-10 text-7xl text-center">{heading}</div>
    </div>
  );
};

export default Heading;
