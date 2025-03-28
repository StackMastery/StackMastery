import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { FaGithub } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";

export default function ToFound() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-full flex-col-reverse max-w-[1100px] px-10 py-40 flex md:flex-row gap-10">
          <div className="w-full md:w-8/12 space-y-5">
            <h2 className="text-4xl text-white">To Found</h2>
            <p>
              To Found is a platform where people can post found and lost items.
              Anyone can search for an item that has been posted, and if someone
              finds a posted item, they can contact the original poster
            </p>
            <span className="bg-slate-800 h-[1px] w-full flex"></span>
            <img
              src="https://res.cloudinary.com/dhuydj1lg/image/upload/v1735123285/Group_3-svg_su06qq.svg"
              alt="Banner"
            />
            <div className="space-y-5">
              <h3 className="text-2xl text-white">Brief Description</h3>
              <p className="text-sm font-thin">
                To Found is a platform where people can post found and lost
                items. Anyone can search for an item that has been posted, and
                if someone finds a posted item, they can contact the original
                poster. While developing this project, I encountered many
                challenges. I started this project on December 21, 2024, at 9:49
                PM, and completed it on December 25, 2024, at 11:23 AM. I{"'"}m
                confident in its potential success.
              </p>
            </div>
            <br />
            <span className="bg-slate-800 h-[1px] w-full flex"></span>
            <div className="space-y-5">
              <h3 className="text-2xl text-white">Challenges Faced</h3>
              <ul className=" ml-10 list-decimal text-sm">
                <li>
                  <strong>Design</strong> selection problem
                </li>
                <li>
                  <strong>Ensuring</strong> a seamless responsive design across
                  various devices.
                </li>
                <li>
                  <strong>Developing</strong> advanced search and filtering and
                  layout change challenges
                </li>
                <li>
                  <strong>Integrating</strong> TanStack query in application
                </li>
              </ul>
            </div>
            <br />
            <span className="bg-slate-800 h-[1px] w-full flex"></span>
            <div className="space-y-5">
              <h3 className="text-2xl text-white">
                Potential Improvements and Future Plans
              </h3>
              <ul className=" ml-10 list-decimal text-sm">
                <li>
                  <strong>Search</strong> filter improvement in future
                </li>
                <li>
                  <strong>Mobiel App</strong> for this application
                </li>
                <li>
                  <strong>Translation</strong> feture intregation in future
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <AspectRatio
              className="overflow-hidden bg-slate-700 mb-4 border-sky-600 border"
              ratio={3 / 2}
            >
              <img
                src={`https://res.cloudinary.com/dogyg2j0h/image/upload/v1738918761/Screenshot_2025-02-07_145900_jtf9ma.png`}
                className="hover:scale-110 transition-all object-cover h-full w-full"
              />
            </AspectRatio>
            <div className="flex gap-3 max-[380px]:w-full">
              <Link
                to={`https://github.com/StackMastery/to-found-client`}
                target="_blank"
                className="bg-white/5 items-center gap-3 border border-white/10 p-2 px-3 rounded-md w-full flex justify-center"
              >
                <FaGithub size={20} />
                Github
              </Link>
              <Link
                target="_blank"
                to={`https://tofound.netlify.app/`}
                className="bg-white/5 items-center gap-3 border border-white/10 p-2 px-3 rounded-md w-full flex justify-center"
              >
                <GoLink size={20} />
                Live Demo
              </Link>
            </div>
            <div className="flex list-disc flex-wrap gap-x-5 pt-5">
              {Tech.map((tech, index) => (
                <li key={`texh-${index}`}>{tech}</li>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Tech = [
  "Firebase",
  "ReactJS",
  "Axios",
  "MomentJS",
  "Swiper",
  "TailwindCSS",
  "TanStack Query",
  "ShadCN",
  "Framer Motion",
  "Express",
  "MongoDB",
];
