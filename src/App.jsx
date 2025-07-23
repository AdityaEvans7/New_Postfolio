import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Skills from './components/Skills'
import About from './components/About'
import YouTubeChannel from './components/YouTubeChannel'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="skills"><Skills /></div>
      <div id="resume"><Resume /></div>
      <div id="about"><About /></div>
      <div ><YouTubeChannel /></div>
      <div id="contact"><Contact /></div>
      <div><Footer /></div>
    </div>
  )
}
