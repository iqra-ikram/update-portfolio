"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Website", description: "A sleek portfolio showcasing my projects.", image: "/alex.png", link: "https://alex-store-git-main-iqra-ikrams-projects.vercel.app/" },
  { title: "Online Furniture Rental", description: "A platform for renting Furniture Items.", image: "/ll.png", link: "https://growth-mind-set-iqra-ikram.streamlit.app/" },
  { title: "File Converter App", description: "File Converter & Cleaner", image: "/file.png", link: "https://growth-mind-set-iqra-ikram.streamlit.app/" },
  { title: "An Online Beauty Platform", description: "An online Beauty products platform.", image: "/mod.png", link: "https://html-css-website-1lg7.vercel.app/" },
  { title: "Blog CMS", description: "A content management system for blogs.", image: "/bl.png", link: "https://milestone-3-eosin-nu.vercel.app/" },
  { title: " Modern Login Page", description: "Login Page with Modern CSS", image: "/log.png", link: "https://mylogin-xi.vercel.app/" },
  { title: "Password Strenth Meter", description: "A simple Password Generator", image: "/ps.png", link: "https://password-meter-app.streamlit.app/" },
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
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-white ">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-100 shadow-lg rounded-2xl p-4 border border-gray-200 transition-all"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.link} target="_blank" className="mt-4 inline-block text-blue-600 hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          ← Previous
        </button>
        <span className="font-semibold">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
