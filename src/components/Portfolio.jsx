import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Images
import movieImg from "../assets/projects/movieappp.jpg";
import wallet from "../assets/projects/walletapp.jpg";
import todoImg from "../assets/projects/dogweb.jpg";
import tictactoeImg from "../assets/projects/spider.png";
import mentalImg from "../assets/projects/walletui.png";
import realEstateImg from "../assets/projects/realeweb.jpg";
import newzapp from "../assets/projects/newzapp.jpg";
import sneakerImg from "../assets/projects/romansn.png";
import newsweb from "../assets/projects/newsweb.png";

// ✅ Project data
const allProjects = [
  {
    title: "Movie App",
    description: "Built using React and TMDB API to explore latest movies.",
    link: "https://your-movie-app-link.com",
    category: "App Development",
    image: movieImg,
  },
  {
    title: "Dog Adoption Website",
    description:
      "A platform to facilitate dog adoption with user-friendly features.",
    link: "https://your-dog-adoption-website-link.com",
    category: "Web Development",
    image: todoImg,
  },
  {
    title: "Spider Man Poster",
    description: "A visually stunning poster design for the Spider Man movie.",
    link: "https://your-spider-man-poster-link.com",
    category: "UI/UX Design",
    image: tictactoeImg,
  },
  {
    title: "My Wallet App",
    description:
      "A secure and user-friendly wallet app built with React Native.",
    link: "https://your-wallet-app-link.com",
    category: "App Development",
    image: wallet,
  },
  {
    title: "Real Estate Website",
    description:
      "A platform to facilitate real estate transactions with user-friendly features.",
    link: "https://your-real-estate-website-link.com",
    category: "Web Development",
    image: realEstateImg,
  },
  {
    title: "Sneaker Website UI",
    description: "This is the Basically sneaker website UI with Figma.",
    link: "#",
    category: "UI/UX Design",
    image: sneakerImg,
  },
  {
    title: "NEWS App",
    description:
      "A secure and user-friendly news app built with React Native and NewsIO Api.",
    link: "https://your-news-app-link.com",
    category: "App Development",
    image: newzapp,
  },
  {
    title: "NewsMania Website",
    description:
      "A platform to explore the latest news articles and news paper with user-friendly features.",
    link: "https://your-news-mania-website-link.com",
    category: "Web Development",
    image: newsweb,
  },
  {
    title: "My Wallet App UI",
    description:
      "This is the Basically income expense tracker app UI with Figma.",
    link: "#",
    category: "UI/UX Design",
    image: mentalImg,
  },
];

const categories = ["All", "Web Development", "App Development", "UI/UX Design"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects.slice(0, 4) // show only 6 projects in All
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="p-8 min-h-screen bg-[#1e1e1e] text-white"
    >
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        My <span className="text-lime-500">Works</span>
      </motion.h1>

      {/* 🔘 Category Filters */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`uppercase text-sm tracking-wide transition duration-200 ${
              activeCategory === cat
                ? "text-lime-400 border-b-2 border-lime-500"
                : "text-gray-400 hover:text-lime-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🧩 Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.a
            href={project.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ 
              opacity: 0, 
              x: idx % 2 === 0 ? -100 : 100 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0 
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="group bg-lime-400 text-black rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="w-full h-60 sm:h-72 md:h-64 lg:h-60 xl:h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fill transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1 text-black">
                {project.title}
              </h2>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
