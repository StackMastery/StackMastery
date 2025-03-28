import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { FaGithub } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Razels() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-full flex-col-reverse max-w-[1100px] px-10 py-40 flex md:flex-row gap-10">
          <div className="w-full md:w-8/12 space-y-5">
            <h2 className="text-4xl text-white">Razels</h2>
            <p>
              Welcome to Razels! Razels is an assignment from Programming Hero,
              Assignment No. 10.
            </p>
            <span className="bg-slate-800 h-[1px] w-full flex"></span>
            <div className="space-y-5">
              <h3 className="text-2xl text-white">Brief Description</h3>
              <p className="text-sm font-thin">
                Razels is a modern crowdfunding web application designed to help
                individuals, startups, and nonprofits bring their ideas to life.
                With a user-friendly interface, secure payment processing, and
                AI-powered campaign recommendations, Razels makes fundraising
                seamless and efficient. Whether it{"'"}s for a creative project,
                social cause, or business venture, Razels connects passionate
                creators with generous backers to turn aspirations into reality.
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
                  <strong>Payment</strong> gate like Stripe, SSLCOMERZ
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
                src={`https://res.cloudinary.com/dogyg2j0h/image/upload/v1738918898/Screenshot_2025-02-07_150128_rusfgs.png`}
                className="hover:scale-110 transition-all object-cover h-full w-full"
              />
            </AspectRatio>
            <div className="flex gap-3 max-[380px]:w-full">
              <Link
                to={`https://github.com/StackMastery/razels`}
                target="_blank"
                className="bg-white/5 items-center gap-3 border border-white/10 p-2 px-3 rounded-md w-full flex justify-center"
              >
                <FaGithub size={20} />
                Github
              </Link>
              <Link
                target="_blank"
                to={`https://razels.netlify.app/`}
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
  "React",
  "Firebase",
  "MomentJS",
  "AOS",
  "TailwindCSS",
  "SwiperJS",
  "TanStack Query",
  "ShadCN UI",
  "Framer Motion",
  "MongoDB",
  "Express",
];
