import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Image from next/image
import React from 'react';

const About = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-12 md:py-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-black font-serif flex items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            About Me
          </h1>
          {/* ✅ Corrected Image tag */}
          <Image
            className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 rounded-full border-8 border-white shadow-xl mb-8"
            alt="hero"
            src="https://media.istockphoto.com/id/1289411982/photo/cyber-security-web-development-and-work-in-it-concept.jpg?s=612x612&w=0&k=20&c=jfyEhPQWR71tGZwrn93sp1oP17Lcgd70StmRdDjMsAs="
            width={612} // ✅ Width & height are required
            height={612} 
          />
          <p className="max-w-3xl text-white opacity-90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-4">
            I am a passionate web developer with a strong foundation in front-end technologies like HTML, CSS, and JavaScript,
            along with expertise in modern frameworks such as React and Next.js. My goal is to create dynamic, user-friendly,
            and visually appealing websites that provide seamless user experiences. I believe in continuous learning and growth,
            and I enjoy tackling new challenges that push me to improve my skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/Contact">
              <button className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 border-0 py-3 px-6 sm:px-8 rounded-xl text-sm sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-l hover:from-purple-700 hover:to-indigo-700">
                Hire Me
              </button>
            </Link>
            <Link href="/Project">
              <button className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 border-0 py-3 px-6 sm:px-8 rounded-xl text-sm sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-l hover:from-yellow-600 hover:to-yellow-500">
                My Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
