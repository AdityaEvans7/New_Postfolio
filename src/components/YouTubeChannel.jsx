import React from 'react'
import { motion } from 'framer-motion'
import channelBanner from '../assets/youtube.png' // Replace with your own image

export default function YouTubeChannel() {
  return (
    <motion.div
      className="min-h-[80vh] bg-[#1e1e1e] text-white py-16 px-4 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        My YouTube <span className="text-lime-400">Channel</span>
      </h1>
      <img
        src={channelBanner}
        alt="Filmi Baten YouTube Banner"
        className="rounded-xl shadow-lg w-full max-w-4xl mb-10"
      />

      <h2 className="text-3xl font-bold mb-4">
        🎬 Filmi <span className="text-lime-400">Baten</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mb-6">
        Your daily dose of movie magic! I run a growing YouTube channel with <strong>3.3K+ subscribers</strong> where I share
        <span className="text-lime-400 font-medium"> movie facts, superhero theories, film breakdowns, and hidden secrets </span>
        that fans love to watch and discuss. If you're into Marvel, DC, Netflix thrillers, or deep movie lore—this channel is for you!
      </p>

      <a
        href="https://www.youtube.com/@FilmiBatenn" // Update if needed
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 border border-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
      >
        🔴 Visit Channel
      </a>
    </motion.div>
  )
}
