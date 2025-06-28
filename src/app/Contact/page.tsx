"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, User } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-20 bg-[#0f0c29] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-pink-600 opacity-20 rounded-full blur-2xl animate-ping"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Got a project idea or just want to say hi? Feel free to reach out using the form below.
        </p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-blue-400/20 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl text-left space-y-6"
        >
          {/* Name Field */}
          <div>
            <label className="block mb-2 text-sm text-pink-200 font-medium">Name</label>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg border border-pink-400/10">
              <User className="w-4 h-4 text-pink-300" />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm text-pink-200 font-medium">Email</label>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg border border-pink-400/10">
              <Mail className="w-4 h-4 text-pink-300" />
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block mb-2 text-sm text-pink-200 font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Let's collaborate..."
              className="w-full bg-white/10 border border-pink-400/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 transition text-white py-2 px-6 rounded-lg flex items-center gap-2 mx-auto"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
