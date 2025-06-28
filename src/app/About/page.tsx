"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiFramer,
  SiFastapi,
  SiTypescript,
  SiGithub,
  SiOpenai,
  SiStreamlit,
  SiHiveBlockchain,
} from "react-icons/si";

const skills = [
  { name: "Next.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Python", level: 85 },
  { name: "Agentic AI", level: 80 },
  { name: "FastAPI", level: 75 },
  { name: "TypeScript", level: 85 },
  { name: "Streamlit / Chainlit", level: 85 },
  { name: "Git & GitHub", level: 90 },
];

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "Framer Motion", icon: <SiFramer size={40} /> },
  { name: "FastAPI", icon: <SiFastapi size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "GitHub", icon: <SiGithub size={40} /> },
  { name: "OpenAI", icon: <SiOpenai size={40} /> },
  { name: "Streamlit", icon: <SiStreamlit size={40} /> },
  { name: "Chainlit", icon: <SiHiveBlockchain size={40} /> },
];

const AboutMe = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-20 bg-[#0f0c29] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-pink-600 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-10 w-[300px] h-[300px] bg-blue-600 opacity-20 rounded-full filter blur-2xl animate-ping"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* ABOUT ME: unchanged */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
        I&apos;m a developer & AI enthusiast building scalable web apps and agentic AI experiences using modern frameworks like Next.js, Python, and OpenAI tools. I love writing clean code, automating workflows, and deploying smart systems that make a difference. 🌐⚡
        </p>

        <div className="bg-white/5 border border-pink-400/20 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl hover:shadow-pink-500/20 transition duration-300">
          <pre className="text-left text-sm md:text-base text-pink-200 font-mono whitespace-pre-wrap leading-relaxed">
{`const developer = {
  name: "Iqra Ikram",
  role: "Full-Stack & Agentic AI Developer",
  tools: [
    "Next.js", "TailwindCSS", "Python", 
    "FastAPI", "TypeScript", "OpenAI", 
    "GitHub", "Streamlit", "Chainlit"
  ],
  quote: "Code smart. Build agentic. 🚀"
}`}
          </pre>
        </div>

        {/* 🧠 Modern Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10 text-pink-400">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/10 border border-white/10 backdrop-blur-md p-5 rounded-xl shadow-md flex flex-col items-center"
              >
                <svg className="w-20 h-20 mb-3">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#fff"
                    strokeWidth="5"
                    fill="none"
                    opacity="0.1"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="url(#grad)"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray="226"
                    strokeDashoffset={226 - (skill.level / 100) * 226}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 226 }}
                    whileInView={{ strokeDashoffset: 226 - (skill.level / 100) * 226 }}
                    transition={{ duration: 1 }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-sm text-white">{skill.name}</div>
                <div className="text-xs text-gray-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ⚙️ Modern Tech Stack */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-10 text-blue-400">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-white/10 border border-blue-400/20 text-white rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-blue-500/30"
              >
                {tech.icon}
                <span className="text-xs mt-2 text-gray-300 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
