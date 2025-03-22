import Link from "next/link";
import Image from "next/image"; // ✅ Import Image from next/image
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo and Brand Name */}
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            {/* ✅ Replace <img> with Next.js <Image> */}
            <Image
              src="https://cdn0.iconfinder.com/data/icons/software-development-19/66/11_female_developer_software_developer_female_designer_coding_expert_female_programmer_software_engineer-512.png"
              alt="Logo"
              width={40} // ✅ Required width
              height={40} // ✅ Required height
              className="rounded-full"
              priority // ✅ Optimizes loading
            />
            <span className="ml-3 text-2xl font-bold">My Portfolio</span>
          </Link>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="text-black font-bold mr-5 hover:text-gray-700">
              Home
            </Link>
            <Link href="/About" className="text-black mr-5 font-bold hover:text-gray-700">
              About
            </Link>
            <Link href="/SkillSphere" className="text-black mr-5 font-bold hover:text-gray-700">
              Skills
            </Link>
            <Link href="/Project" className="text-black mr-5 font-bold hover:text-gray-700">
              Project
            </Link>
            <Link
              href="/Contact"
              className="text-black mr-5 font-bold hover:text-gray-700"
            >
              Contact
            </Link>
          </nav>

          {/* Download CV Button */}
          <button className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 text-black rounded text-base mt-4 md:mt-0">
            <a
              href="/mycv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
