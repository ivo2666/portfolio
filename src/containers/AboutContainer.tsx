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
        illustration={<Illustration className=" max-h-48 mx-auto" />}
      />
      <div className="relative mt-5 sm:mx-10  wrap bg-base-200 rounded-lg">
        <div className="p-7 ">
          <div className="pb-2.5 border-b border-base-300 flex items-center">
            <span className="bg-base-100 hover:bg-primary text-primary hover:text-base-100 p-3 inline-block rounded-lg">
              <DeviceMobileIcon className="w-4 text-inherit" />
            </span>
            <div className="text-left ml-2.5 ">
              <p className="text-xs text-base-content">Phone</p>
              <p className="text-md text-base-content">
                <a
                  className="hover:text-secondary-focus duration-300 transition"
                  href="tel:+359887882263"
                >
                  +359 887 882 263
                </a>
              </p>
            </div>
          </div>
          <div className="py-2.5 border-b border-base-300 flex items-center">
            <span className="bg-base-100 hover:bg-secondary text-secondary hover:text-base-100  p-3 inline-block rounded-lg">
              <MailIcon className="w-4 text-inherit " />
            </span>
            <div className="text-left ml-2.5 ">
              <p className="text-xs text-base-content">Email</p>
              <p className="text-md text-base-content">
                <a
                  className="hover:text-secondary-focus duration-300 transition"
                  href="mailto:ivaylotsvetkov365@gmail.com"
                >
                  ivaylotsvetkov365@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="py-2.5 border-b border-base-300 flex items-center">
            <span className="bg-base-100 hover:bg-primary text-primary hover:text-base-100 p-3 inline-block rounded-lg">
              <LocationMarkerIcon className="w-4 text-inherit" />
            </span>
            <div className="text-left ml-2.5 ">
              <p className="text-xs text-base-content">Location</p>
              <p className="text-md text-base-content">Sofia</p>
            </div>
          </div>
          <div className="py-2.5 border-b border-base-300 flex items-center">
            <span className="bg-base-100 hover:bg-secondary text-secondary hover:text-base-100  p-3 inline-block rounded-lg">
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
              <p className="text-md text-base-content">
                <a
                  className="hover:text-secondary-focus duration-300 transition"
                  href="https://github.com/ivo2666"
                >
                  github.com/ivo2666
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
