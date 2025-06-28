// app/thanks/page.tsx

"use client";

import { motion } from "framer-motion";
import { Smile } from "lucide-react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <Smile className="w-14 h-14 text-pink-400 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text mb-4">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Your message has been successfully sent. I’ll get back to you soon. 🚀
        </p>
        <Link
          href="/"
          className="text-white bg-pink-600 hover:bg-pink-700 transition px-6 py-2 rounded-lg"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default ThankYouPage;
