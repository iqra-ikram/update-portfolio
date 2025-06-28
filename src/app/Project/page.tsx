"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Website", description: "A sleek portfolio showcasing my projects.", image: "/alex.png", link: "https://alex-store-git-main-iqra-ikrams-projects.vercel.app/" },
  { title: "Online Furniture Rental", description: "A platform for renting Furniture Items.", image: "/ll.png", link: "https://hackathone-eta.vercel.app/" },
  { title: "File Converter App", description: "File Converter & Cleaner", image: "/file.png", link: "https://growth-mind-set-iqra-ikram.streamlit.app/" },
  { title: "An Online Beauty Platform", description: "An online Beauty products platform.", image: "/mod.png", link: "https://html-css-website-1lg7.vercel.app/" },
  { title: "Blog CMS", description: "A content management system for blogs.", image: "/bl.png", link: "https://milestone-3-eosin-nu.vercel.app/" },
  { title: "Modern Login Page", description: "Login Page with Modern CSS", image: "/log.png", link: "https://mylogin-xi.vercel.app/" },
  { title: "Password Strength Meter", description: "A simple Password Generator", image: "/ps.png", link: "https://password-meter-app.streamlit.app/" },
  { title: "Mock Api", description: "Real-time Api Fetching Data", image: "/mockk.png", link: "https://mockapi-chi.vercel.app/" },
  { title: "Website For Company", description: "A Whitespace platform.", image: "/white.png", link: "https://whitespace-eta.vercel.app/" },
];

const itemsPerPage = 6;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen py-24 px-6 overflow-hidden">
      {/* Background Animated Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-30 blur-[150px] rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-30 blur-[150px] rounded-full animate-ping z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {selectedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-pink-500/30 transition-all duration-300 group"
            >
              <div className="p-4 flex flex-col h-full justify-between">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-blue-300 hover:text-pink-400 transition"
                >
                  ➤ View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-6 mt-14 text-sm font-medium"
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md hover:shadow-pink-400/40 disabled:opacity-30 transition"
          >
            ← Previous
          </button>
          <span className="text-gray-300">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-md hover:shadow-purple-400/40 disabled:opacity-30 transition"
          >
            Next →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
