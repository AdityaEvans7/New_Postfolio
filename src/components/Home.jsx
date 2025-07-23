import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import doubleHero from '../assets/suit.jpg'

export default function Home() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 }) // Re-trigger when 30% in view

  return (
   <section
  id="home"
  className="relative h-screen bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url(${doubleHero})`,
    backgroundPosition: '47% center' // Shift image to right
  }}
>



      <motion.div
        ref={ref}
        className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center text-white px-4"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-20 space-y-2">
          
          <motion.h2
            className="text-white text-2xl md:text-3xl self-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hey, I'm
          </motion.h2>

          <motion.h1
            className="text-3xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-lime-400">Aditya </span>
            <span
              className="text-transparent stroke-white stroke-1"
              style={{
                WebkitTextStroke: '1px #e2d7d5',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Kr.
            </span>{' '}
            Mandal
          </motion.h1>

          <motion.p
            className="uppercase tracking-widest text-lime-500 self-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A Software Engineer
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
