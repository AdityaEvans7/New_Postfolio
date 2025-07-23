import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);


  return (
    <>
      {/* Main Navbar */}
     <nav
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-10 uppercase text-sm tracking-wide mx-auto">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-lime-400 hover:text-lime-300 transition duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    {/* Mobile Menu Icon */}
    <button
  className="md:hidden absolute right-6 top-4 text-lime-400 z-50"
  onClick={() => setIsOpen(true)}
  aria-label="Open menu"
>
  <Menu size={28} />
</button>

  </div>
</nav>


      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-[60] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-lime-500">
          <div className="text-lg font-semibold text-lime-400">Menu</div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-lime-400"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col justify-center items-center h-full gap-8 uppercase text-sm px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lime-400 hover:text-lime-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
