import React from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-center text-sm text-gray-300 py-10 px-4">
      <p className="mb-6">
        Copyright © 2025 Aditya Evans. All rights reserved 
      </p>

      <div className="flex justify-center gap-4">
        <a href="https://www.facebook.com/share/19cvH6ZZau/" className="bg-[#2b2b2b] hover:bg-lime-400 text-lime-400 hover:text-black p-3 rounded-full transition">
          <Facebook size={20} />
        </a>
        
        {/* X (formerly Twitter) Icon */}
        <a href="https://x.com/TheAditya777?t=oHfudPdGZ5PDn8OU6HnBWA&s=09" className="bg-[#2b2b2b] hover:bg-lime-400 text-lime-400 hover:text-black p-3 rounded-full transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.53 3H21L14.5 10.29L22 21H15.57L10.75 14.78L5.19 21H2L9 13.12L2 3H8.61L13 8.87L17.53 3ZM16.3 19H17.97L7.76 4.88H6.04L16.3 19Z" />
          </svg>
        </a>

        <a href="https://www.instagram.com/evansaditya9?igsh=MXMxcHBiZWZ2bmUyNA==" className="bg-[#2b2b2b] hover:bg-lime-400 text-lime-400 hover:text-black p-3 rounded-full transition">
          <Instagram size={20} />
        </a>
        <a href="https://www.linkedin.com/in/aditya-kumar-mandal-72b480289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-[#2b2b2b] hover:bg-lime-400 text-lime-400 hover:text-black p-3 rounded-full transition">
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  )
}
