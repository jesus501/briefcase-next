"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaLess,
  FaBootstrap,
  FaReact,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

// skills data
const skills = {
  title: "Habilidades",
  description: "",
  skillList: [
    { icon: <FaHtml5 />, name: "html" },
    { icon: <FaCss3 />, name: "css" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaSass />, name: "sass" },
    { icon: <FaLess />, name: "less" },
    { icon: <FaBootstrap />, name: "bootstrap" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <SiTypescript />, name: "typescript" },
    { icon: <FaReact />, name: "react" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <FaGit />, name: "git" },
  ],
};

const Habilidades = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
    >
      {/*content */}
      <div className="min-h-[70vh] w-full">
        {/*skills */}
        <div className="w-full h-full text-center">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center ">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index) => (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Habilidades;
