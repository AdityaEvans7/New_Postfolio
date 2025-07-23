import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'

const resumeData = {
  education: [
  {
    date: 'September 2022 - Present',
    title: 'Bachelor of Technology in Computer Science',
    description:
      'Pursuing core subjects such as Data Structures, Algorithms, Web Development, Operating Systems, and Database Management while working on real-world projects and competitive programming.',
    institution: '• Rajasthan Technical University',
  },
  {
    date: 'March 2019 - February 2021',
    title: 'Jr. College (12th)',
    description:
      'Focused on Physics, Chemistry, and Mathematics, building a strong foundation for technical education. Actively participated in science exhibitions and tech-related competitions.',
    institution: '• BSEB',
  },
  {
    date: 'April 2018 - February 2019',
    title: 'High School (10th)',
    description:
      'Completed foundational education with distinction, excelling in Mathematics and Science. Developed a keen interest in computer science and logical problem-solving.',
    institution: '• BSEB',
  },
],
 experience: [
  {
    date: 'June 2025 - July 2025',
    title: 'Frontend Developer Intern',
    description:
      'Developed responsive user interfaces using React, Tailwind CSS, and Framer Motion. Collaborated with designers to implement interactive components and improve UI/UX across web apps.',
    company: '• Skillcraft Technology',
  },
  {
    date: 'July 2024 - Aug 2024',
    title: 'Full Stack Developer Intern',
    description:
      'Worked on both frontend and backend using MERN stack. Implemented RESTful APIs, authentication flows, and optimized performance for a client-facing dashboard.',
    company: '• PMCS',
  },
],

}

export default function Resume() {
  return (
    <motion.div
      className="min-h-screen bg-[#1e1e1e] text-white px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-center text-4xl font-semibold mb-16">
        My <span className="text-white font-bold">Resume</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          {resumeData.education.map((item, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-lg mb-6 shadow hover:shadow-lg transition duration-300"
            >
              <p className="text-sm flex items-center gap-2 text-gray-300 mb-2">
                <FaCalendarAlt className="text-green-400" />
                <span>{item.date}</span>
              </p>
              <h3 className="text-lg text-lime-400 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.description}</p>
              <p className="text-gray-400 text-sm">{item.institution}</p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          {resumeData.experience.map((item, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-lg mb-6 shadow hover:shadow-lg transition duration-300"
            >
              <p className="text-sm flex items-center gap-2 text-gray-300 mb-2">
                <FaCalendarAlt className="text-green-400" />
                <span>{item.date}</span>
              </p>
              <h3 className="text-lg text-lime-400 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.description}</p>
              <p className="text-gray-400 text-sm">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
