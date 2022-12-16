import Heading from "../components/Heading";
import { ReactComponent as Illustration } from "../assets/digital-nomad.svg";
import { SECTIONS } from "../data/data";
import {
  DeviceMobileIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/react/outline";

const AboutContainer: React.FC = () => {
  return (
    <div className="mx-3 lg:mx-12">
      <Heading
        heading={SECTIONS[4]}
        id="about"
        illustration={<Illustration className="mx-auto max-h-48" />}
      />
      <div className="relative mt-5 rounded-lg sm:mx-10 wrap bg-base-200">
        <div className="p-7">
                <a
                  className="transition duration-300 hover:text-secondary-focus"
                  href="tel:+359887882263"
                >
          <div className="pb-2.5 border-b border-base-300 flex items-center group">
            <span className="inline-block p-3 rounded-lg bg-base-100 group-hover:bg-primary text-primary group-hover:text-base-100">
              <DeviceMobileIcon className="w-4 text-inherit" />
            </span>
            <div className="text-left ml-2.5 ">
              <p className="text-xs text-base-content">Phone</p>
              <p className="text-md text-base-content">
                  +359 887 882 263
              </p>
            </div>
          </div>
                </a>
                <a
                  className="transition duration-300 hover:text-secondary-focus"
                  href="mailto:ivaylotsvetkov365@gmail.com"
                >
          <div className="py-2.5 border-b border-base-300 flex items-center group">
            <span className="inline-block p-3 rounded-lg bg-base-100 group-hover:bg-secondary text-secondary group-hover:text-base-100">
              <MailIcon className="w-4 text-inherit " />
            </span>
            <div className="text-left ml-2.5 ">
              <p className="text-xs text-base-content">Email</p>
              <p className="text-md text-base-content">
                  ivaylotsvetkov365@gmail.com
              </p>
            </div>
          </div>
          <div className="py-2.5 border-b border-base-300 flex items-center group">
            <span className="inline-block p-3 rounded-lg bg-base-100 group-hover:bg-primary text-primary group-hover:text-base-100">
              <LocationMarkerIcon className="w-4 text-inherit" />
            </span>
            <div className="text-left ml-2.5 ">
              <p className="text-xs text-base-content">Location</p>
              <p className="text-md text-base-content">Sofia</p>
            </div>
          </div>
                </a>
          <a
            className="transition duration-300 hover:text-secondary-focus"
            href="https://github.com/ivo2666"
          >
            <div className="py-2.5 border-b border-base-300 flex items-center group">
              <span className="inline-block p-3 rounded-lg bg-base-100 group-hover:bg-secondary text-secondary group-hover:text-base-100">
                <svg
                  className="w-4 text-inherit "
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
              </span>
              <div className="text-left ml-2.5 ">
                <p className="text-xs text-base-content">Github</p>
                <p className="text-md text-base-content">github.com/ivo2666</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
