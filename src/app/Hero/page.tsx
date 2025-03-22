"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const phrases = [
    "Iqra Ikram",
    "Web Developer",
    "Student Leader at GIAIC",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % phrases.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-6xl">
          {/* Image Section */}
          <img
            src="https://image.lexica.art/full_webp/ffb36dde-7684-4d78-8d44-788bfa501864"
            className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="Box Office"
          />
          {/* Text Section */}
          <div className="text-center lg:text-left w-full max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Hello I am {" "}
              <span className="text-yellow-300 typewriter-text">
                {phrases[currentText]}
              </span>
            </h1>
            <p className="py-4 text-base sm:text-lg md:text-xl leading-relaxed">
              Welcome to my portfolio! I love creating amazing web experiences. Lets
              build something extraordinary together.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/cv.pdf">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105">
                  Hire Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Typewriter CSS Animation */}
      <style jsx>{`
        .typewriter-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #fff;
          width: 0;
          animation: typing 4s steps(20) forwards, blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
