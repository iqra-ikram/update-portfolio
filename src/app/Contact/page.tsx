"use client"
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-pink-50  shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center text-gray-600 mb-6">
          Feel free to reach out for collaborations or any inquiries!
        </p>
        <div className="mb-6 text-center">
          <p>Email: <a href="mailto:contact@codecrafting.com" className="text-blue-500">contactiqra12@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/iqra-ikram" className="text-blue-500"> My GitHub</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/iqra-ikram-9660732b4/" className="text-blue-500">My LinkedIn</a></p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
        {submitted && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
      </div>
    </div>
  );
}
