import React from 'react'
import { motion } from 'framer-motion'
import { FaYoutube, FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaTools } from 'react-icons/fa'

const skills = [
  {
    category: 'Frontend Development',
    icon: <FaCode className="text-pink-400 text-xl" />,
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'React.js'],
  },
  {
    category: 'Backend Development',
    icon: <FaServer className="text-yellow-400 text-xl" />,
    items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
  },
  {
    category: 'App Development',
    icon: <FaMobileAlt className="text-green-400 text-xl" />,
    items: ['React Native', 'Android Studio'],
  },
  {
    category: 'UI / UX Design',
    icon: <FaPaintBrush className="text-blue-400 text-xl" />,
    items: ['Figma'],
  },
  {
    category: 'Programming & DSA',
    icon: <FaTools className="text-purple-400 text-xl" />,
    items: ['Java (Basic)', 'DSA (Basic)'],
  },
  {
    category: 'Content Creation',
    icon: <FaYoutube className="text-red-500 text-xl" />,
    items: ['YouTube Channel (Filmi Baten)', 'Video Scripting', 'Editing'],
  },
]

export default function Skills() {
  return (
    <motion.div
      className="min-h-screen bg-[#1e1e1e] text-white py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center text-4xl font-semibold mb-12">
        My <span className="text-lime-400">Skills</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#2a2a2a] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-xl font-semibold text-lime-300">{skill.category}</h3>
            </div>
            <ul className="list-disc ml-6 space-y-1 text-gray-300 text-sm">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
