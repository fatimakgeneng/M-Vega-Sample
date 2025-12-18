"use client";
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero({ onWatchReel }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Actor & Model";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative bg-gradient-to-t from-neutral-950 to-neutral-800 overflow-hidden">
      {/* Background Image - Adjusted to show full face */}
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/71/6d/a2/716da2b258d82fca07d2f1859a5ecfb6.jpg')] bg-cover bg-center bg-top opacity-40 transition-all duration-1000 hover:scale-105"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Mark Vega</h1>
        <p className="text-xl md:text-2xl mb-8 text-neutral-300 min-h-[2rem]">
          {displayText}<span className="animate-pulse">|</span>
        </p>
        <button onClick={onWatchReel} className="inline-flex items-center justify-center bg-white text-neutral-950 px-8 py-4 rounded-md font-semibold transition-all duration-500 hover:bg-neutral-200 hover:scale-105 hover:shadow-xl hover:shadow-white/10 animate-pulse-slow">
          <Play className="mr-2" size={20} />
          Watch Reel
        </button>
      </div>
    </section>
  );
}