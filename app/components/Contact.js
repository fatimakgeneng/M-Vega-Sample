"use client";
import { Linkedin, Mail, Instagram } from 'lucide-react';

export default function Contact({ refProp }) {
  return (
    <section 
      id="contact" 
      className="py-20 bg-neutral-900 px-4 opacity-0 transition-all duration-1000"
      ref={refProp}
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get In Touch
        </h2>
        <p className="text-center mb-8 text-neutral-300">For all booking and inquiry information, please contact:</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a 
              href="mailto:mark@markvega.com" 
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-all duration-500 transform hover:scale-105"
            >
                <Mail size={20} />
                lorem@loremipsum.com
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-all duration-500 transform hover:scale-105"
            >
                <Linkedin size={20} />
                LinkedIn
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-all duration-500 transform hover:scale-105"
            >
                <Instagram size={20} />
                Instagram
            </a>
        </div>

        {/* Simple Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white transition-all duration-500 hover:scale-105 focus:scale-105" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white transition-all duration-500 hover:scale-105 focus:scale-105" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white transition-all duration-500 hover:scale-105 focus:scale-105"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-white text-neutral-950 py-3 rounded-md font-semibold transition-all duration-500 hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}