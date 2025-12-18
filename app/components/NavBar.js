"use client";
import { Linkedin, Mail, Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white z-50 transition-all duration-500 hover:scale-105 hover:opacity-80">
          Mark Vega
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['About', 'Reels', 'Filmography', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-neutral-300 hover:text-white transition-all duration-500 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 transition-all duration-500 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-neutral-950/95 backdrop-blur-md flex flex-col items-center justify-center space-y-10 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {['Hero', 'About', 'Reels', 'Filmography', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-3xl font-medium text-neutral-300 hover:text-white transition-all duration-500 transform hover:scale-110"
              onClick={closeMenu}
              style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}