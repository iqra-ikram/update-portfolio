import React from "react";

const StylishLinkTree = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 flex items-center justify-center">
      <div className="bg-transparent p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
         Contact me<span> <br /></span>
        </h1>

        <div className="space-y-6">
          <a
            href="https://www.linkedin.com/in/iqra-ikram-9660732b4/"
            className="block text-lg text-white bg-blue-600 hover:bg-blue-700 py-4 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          

          <a
            href="https://personal-portfolio-mu-olive.vercel.app/"
            className="block text-lg text-white bg-green-500 hover:bg-green-600 py-4 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300"
          >
            My Portfolio
          </a>
          <a
            href="/Email"
            className="block text-lg text-white bg-red-500 hover:bg-red-600 py-4 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300"
          >
            Contact Me
          </a>
        </div>

<br />
        <a
            href="https://alex-store-eight.vercel.app/"
            className="block text-lg text-white bg-yellow-500 hover:bg-yellow-600 py-4 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300"
          >
            My Work
          </a>
        </div>


        <div className="mt-12 text-gray-500">
          <p className="text-sm">Designed with love by Iqra Ikram</p>
        </div>
      </div>

  );
};

export default StylishLinkTree;
