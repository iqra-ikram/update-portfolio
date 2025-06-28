"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const navLinks = ["Home", "About", "SkillSphere", "Project", "Contact"];

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f0c29]/70 via-[#302b63]/70 to-[#24243e]/70 backdrop-blur-md border-b border-white/10 shadow shadow-pink-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-3">
        {/* 🔥 Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-400 shadow-lg hover:rotate-6 transition-transform duration-300">
            <Image
              src="https://cdn0.iconfinder.com/data/icons/software-development-19/66/11_female_developer_software_developer_female_designer_coding_expert_female_programmer_software_engineer-512.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text tracking-wide">
            Iqra's Portfolio
          </span>
        </Link>

        {/* 🌐 Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link === "Home" ? "/" : `/${link}`}
              className="relative text-sm text-gray-300 font-medium tracking-wide transition-all duration-300 hover:text-pink-400"
            >
              <span className="hover-underline">{link}</span>
            </Link>
          ))}
        </nav>

        {/* 📄 CV Button */}
        <a
          href="/mycv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-pink-500/30 transition-all duration-300 animate-glow"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
