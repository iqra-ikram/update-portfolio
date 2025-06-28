"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import {
  FaGithub,
  FaHtml5,
  FaReact,
  FaPython,
  FaLinkedin,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiStreamlit,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiFastapi,
  SiOpenai,
  SiVercel,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

/* ──────────────────────────────── */
/* 1. DATA                                                               */
/* ──────────────────────────────── */

const skills = [
  { name: "Next.js", percentage: 90 },
  { name: "TailwindCSS", percentage: 95 },
  { name: "TypeScript", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "FastAPI", percentage: 75 },
  { name: "Git & GitHub", percentage: 90 },
  { name: "OpenAI / Gemini", percentage: 70 },
  { name: "Streamlit / Chainlit", percentage: 65 },
];

const techStack = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiOpenai />, name: "OpenAI" },
  { icon: <SiStreamlit />, name: "Streamlit" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <VscVscode />, name: "VS Code" },
  { icon: <SiVercel />, name: "Vercel" },
];

/* ──────────────────────────────── */
/* 2. COMPONENT                                                          */
/* ──────────────────────────────── */

const SkillSphere = () => {
  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    skills.forEach(({ name, percentage }) =>
      setProgress((prev) => ({ ...prev, [name]: percentage }))
    );
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0f0c29] px-6 py-20 font-mono text-white">
      {/* 🎛 Spinning Grid Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 -rotate-[30deg] scale-125">
          <div className="h-full w-full bg-[radial-gradient(transparent_1px,#ffffff11_1px)] [background-size:24px_24px] animate-spin-slow" />
        </div>
      </div>

      {/* 🖼 Avatar */}
      <div className="mb-12 text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://img.freepik.com/premium-photo/person-coding-project-laptop_1079150-36836.jpg"
          alt="Developer Avatar"
          className="mx-auto h-40 w-40 rounded-full border-4 border-white shadow-2xl"
        />
      </div>

      {/* 📊 Skills */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-4xl font-bold bg-gradient-to-r from-yellow-300 via-white to-blue-300 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-white/90">
        Building smart full-stack applications & agentic AI solutions using modern frameworks and open-source technologies.
      </p>

      <div className="mx-auto max-w-4xl space-y-6">
        {skills.map(({ name, percentage }) => (
          <div key={name}>
            <div className="mb-1 flex justify-between font-medium">
              <span>{name}</span>
              <span>{percentage}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1.2 }}
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-blue-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🛠 Tech Stack Marquee */}
      <h2 className="mt-20 mb-10 text-center text-3xl font-bold text-blue-400">
        Tech Stack
      </h2>

      <Marquee pauseOnHover gradient={false} speed={60} className="py-4">
        {techStack.map(({ icon, name }) => (
          <div
            key={name}
            className="mx-6 flex flex-col items-center transition-transform duration-300 hover:scale-110"
          >
            <span className="text-5xl">{icon}</span>
            <span className="mt-2 text-xs text-gray-300">{name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SkillSphere;
