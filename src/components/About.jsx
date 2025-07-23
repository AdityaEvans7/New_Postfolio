import React from 'react'
import { motion } from 'framer-motion'
import myImage from '../assets/book.jpg' // Replace with your actual image path

export default function About() {
  return (
    <motion.div
      className="min-h-screen  bg-[#1e1e1e] text-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={myImage}
          alt="Adtiya Kumar"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-semibold">
          About <span className="text-lime-400">Me</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a passionate full-stack developer skilled in crafting modern and responsive web and mobile applications. I love turning ideas into interactive digital experiences using technologies like React, Node.js, MongoDB, and React Native.
        </p>
        <p className="text-gray-400 text-sm">
          I'm also a part-time YouTube content creator running a channel called <strong>Filmi Baten</strong>, where I share stories, facts, and theories related to movies and superheroes. I'm continuously learning and building to improve both my dev and creative skills.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition">
            HIRE ME
          </button>
          <a
            href="https://drive.google.com/file/d/1KTPJCiAS9-JXDLF4edhOTikLcaNmg9-k/view"
            download
            className="bg-gray-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-700 transition"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </motion.div>
  )
}
