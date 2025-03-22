"use client"
import React, { useEffect, useState } from 'react';
import { VscVscode } from "react-icons/vsc";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { SiStreamlit } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaInvision } from "react-icons/fa";


const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
);

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-lg font-semibold text-center">{children}</div>
);

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-2 flex justify-center">{children}</div>
);


const skills = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 70 },
  { name: 'React', percentage: 65 },
  { name: 'Next.js', percentage: 75 },
  { name: 'TailwindCSS', percentage: 95 },
  
];

const tools = [
  { name: "VS Code", icon: <VscVscode className="text-sky-500 text-6xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-black text-6xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-sky-500 text-6xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-6xl" /> },
  { name: "CSS", icon: <IoLogoCss3 className="text-blue-500 text-6xl" /> },
  { name: "Next.js", icon: <RiNextjsFill className="text-black text-6xl" /> },
  { name: "React.js", icon: <FaReact  className="text-black text-6xl" /> },
  { name: "Python", icon: <FaPython  className="text-black text-6xl" /> },
  { name: "Streamlit", icon: <SiStreamlit  className="text-black text-6xl" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill  className="text-black text-6xl" /> },
  { name: "Linkdin", icon: <FaInvision  className="text-black text-6xl" /> },

];

const SkillProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    skills.forEach((skill) => {
      setProgress((prev) => ({
        ...prev,
        [skill.name]: skill.percentage,
      }));
    });
  }, []);

  return (
    <div className="container mx-auto p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-black font-serif">
      <div className="mb-8 text-center">
        <img
          className="w-100 h-100 mx-auto shadow-lg"
          src="https://img.freepik.com/premium-photo/person-coding-project-laptop_1079150-36836.jpg"
          alt="My Avatar"
        />
      </div>
      <h2 className="text-4xl font-bold text-center mb-4 text-white">My Skills</h2>
      <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-white">
        My expertise in web development spans across a range of technologies, from basic HTML and CSS to advanced frameworks like React and Next.js.
      </p>
      
      <div className="space-y-8">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-white">{skill.name}</span>
              <span className="font-medium text-white">{progress[skill.name]}%</span>
            </div>
            <div className="relative pt-2">
              <div className="w-full bg-transparent rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-red-700 via-black to-yellow-500 transition-all duration-1000"
                  style={{ width: `${progress[skill.name]}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Tools Section */}
      <h2 className="text-3xl font-bold text-center mt-12 text-white">Tools I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {tools.map((tool, index) => (
          <Card key={index} className="p-4 border-2 border-pink-500 shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>{tool.name}</CardHeader>
            <CardContent>{tool.icon}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillProgressBar;
