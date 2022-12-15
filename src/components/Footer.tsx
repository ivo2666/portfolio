import React from "react";
import { Link } from "react-scroll";
import { MENU } from "../data/data";
const Footer: React.FC = () => {
  return (
    <>
      <div className="px-0 py-0 mx-0 my-0 antialiased text-center">
        <div className="flex flex-col pt-3 mt-5 md:items-center f-f-l bg-neutral text-neutral-content">
          <h1 className="text-4xl font-black text-neutral-content">
            Ivaylo Tsvetkov
          </h1>
          <div className="my-3 text-base text-center text-neutral-content ">
            <ul className="items-center md:flex">
              {MENU.map(({ key, name, route }) => (
                <Link
                  key={key}
                  activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition "
                  to={route}
                  spy={true}
                  smooth={true}
                  duration={300}
                  className={
                    "btn-primary btn-ghost btn-sm rounded-btn  pt-2 cursor-pointer md:mr-6 lg:py-0"
                  }
                >
                  {name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
