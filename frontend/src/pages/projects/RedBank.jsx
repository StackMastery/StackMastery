import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { FaGithub } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";

export default function RedBank() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-full flex-col-reverse max-w-[1100px] px-10 py-40 flex md:flex-row gap-10">
          <div className="w-full md:w-8/12 space-y-5">
            <h2 className="text-4xl text-white">Red Bank</h2>
            <p>
              The Red.bank application aims to provide a user-friendly platform
              that streamlines blood donation activities.
            </p>
            <span className="bg-slate-800 h-[1px] w-full flex"></span>
            <img
              src="https://res.cloudinary.com/dogyg2j0h/image/upload/v1737733933/Group_3_qbhr3d.png"
              alt="Banner"
            />
            <div className="space-y-5">
              <h3 className="text-2xl text-white">Brief Description</h3>
              <p className="text-sm font-thin">
                The Red.bank application aims to provide a user-friendly
                platform that streamlines blood donation activities. It connects
                blood donors with those in urgent need, promoting a seamless and
                efficient donation process. The application offers various
                features, including donor registration, blood donation requests,
                donor management, content management, and role-based access
                control to ensure an organized and secure experience for all
                users. Built using the MERN stack (MongoDB, Express.js, React,
                Node.js), Red.bank is designed to make blood donation simpler
                and more accessible for everyone involved.
              </p>
            </div>
            <br />
            <span className="bg-slate-800 h-[1px] w-full flex"></span>
            <div className="space-y-5">
              <h3 className="text-2xl text-white">Challenges Faced</h3>
              <ul className=" ml-10 list-decimal text-sm">
                <li>
                  <strong>Ensuring</strong> a seamless responsive design across
                  various devices.
                </li>
                <li>
                  <strong>Securing</strong> user authentication with Firebase
                  and JWT.
                </li>
                <li>
                  <strong>Developing</strong> advanced search and filtering
                  algorithms for biodata matching.
                </li>
                <li>
                  <strong>Integrating</strong> real-time dynamic data display
                  with MongoDB.
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
                  <strong>Integrating</strong> AI-based matchmaking for better
                  partner recommendations.
                </li>
                <li>
                  <strong>Adding</strong> video call functionality for potential
                  partners.
                </li>
                <li>
                  <strong>Expanding</strong> the platform to support multiple
                  languages for better accessibility.
                </li>
                <li>
                  <strong>Improving</strong> the admin dashboard with more
                  detailed analytics and insights.
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
                src={`https://res.cloudinary.com/dogyg2j0h/image/upload/v1738916589/Screenshot_2025-02-07_142248_nmwotx.png`}
                className="hover:scale-110 transition-all object-cover h-full w-full"
              />
            </AspectRatio>
            <div className="flex gap-3 max-[380px]:w-full">
              <Link
                to={`https://github.com/StackMastery/red-bank-client`}
                target="_blank"
                className="bg-white/5 items-center gap-3 border border-white/10 p-2 px-3 rounded-md w-full flex justify-center"
              >
                <FaGithub size={20} />
                Github
              </Link>
              <Link
                target="_blank"
                to={`https://redbank.netlify.app/`}
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
  "Rebase",
  "Stripe",
  "Reactjs",
  "Momentjs",
  "Numeral",
  "React-Icons",
  "Jodit",
  "Tailwindcss",
  "React-Hot-Toast",
  "Firebaseaxios",
  "Express",
  "MongoDB",
];
