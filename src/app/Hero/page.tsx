"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const phrases = [
  "Full-Stack Developer 💻",
  "AI Integrator 🤖",
  "API Specialist ⚙️",
  "Open Source Contributor 🌍",
  "Problem Solver 🧠",
];

const skillBadges = [
  "💡 AI-Powered Thinking",
  "🚀 Fast API Builder",
  "🔗 Git & GitHub Mastery",
  "🧠 Agentic AI Enthusiast",
  "📦 Clean Code + Smart APIs",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[currentPhrase];
    let delay = isDeleting ? 50 : 120;

    const handleTyping = () => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, delay);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <section className="relative bg-[#0f0c29] min-h-screen flex flex-col justify-center px-6 md:px-20 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[160px] rounded-full animate-pulse -top-24 -left-24" />
        <div className="absolute w-[250px] h-[250px] bg-blue-600 opacity-20 blur-[130px] rounded-full animate-ping top-2/3 right-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 pt-20"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 border border-pink-400/30 rounded-full text-sm text-pink-300 backdrop-blur-sm shadow-md animate-pulse">
            <span className="animate-ping h-2 w-2 rounded-full bg-green-400"></span>
            💻 Currently Engineering AI-Driven Products...
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-pink-400/30 shadow-pink-400/20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              Iqra Ikram
            </h1>
            <p className="text-gray-300 mt-2 text-lg h-7">
              {text}
              <span className="text-pink-300 animate-pulse">|</span>
            </p>
            <p className="text-sm text-pink-200 mt-4 font-mono">
              “Code smart. Build scalable. Think agentic 💡”
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-pink-400/30 transition"
          >
            Access My Full-Stack Universe
          </motion.button>

          {/* Animated Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            {skillBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-blue-500/20 text-sm text-white border border-white/10 rounded-full backdrop-blur-md shadow hover:scale-105 transition-all duration-300"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side Image & Text */}
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={true}
          glareColor="white"
          glareMaxOpacity={0.2}
          className="flex-1 flex flex-col items-center justify-start mt-10 md:mt-0"
        >
          {/* Avatar */}
          <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-pink-500/20">
            <Image
              src="/iqradp.jpg"
              alt="Iqra's Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* Bold Title */}
          <h2 className="mt-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Full-Stack + AI Developer
          </h2>

          {/* Typewriter Under Image */}
          <div className="mt-2 text-center">
            <p className="text-pink-300 text-lg font-mono h-6">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
};

export default Hero;
