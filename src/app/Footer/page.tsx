import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">
      {/* Glowing Background Blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-700 blur-3xl rounded-full opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-500 blur-3xl rounded-full opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center gap-2 mb-4">
          <img
            src="https://cdn0.iconfinder.com/data/icons/software-development-19/66/11_female_developer_software_developer_female_designer_coding_expert_female_programmer_software_engineer-512.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-white">Iqra Ikram</span>
        </Link>

        {/* Contact Email */}
        <p className="text-white/70 text-sm mb-6">
          Made with ❤️ by Iqra Ikram —{" "}
          <a
            href="mailto:iqraikram58@gmail.com"
            className="text-pink-400 hover:underline"
          >
            iqraikram58@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a
            href="https://github.com/iqra-ikram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/iqra-ikram-9660732b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:iqraikram58@gmail.com"
            className="text-pink-400 hover:text-pink-300 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 transition"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Iqra Ikram. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
