"use client";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const headshots = [
  "https://i.pinimg.com/1200x/f1/fb/70/f1fb703df9a17e43a4180fbbf79e8fbc.jpg",
  "https://static.livebooks.com/d83c385466b046478be0d0cf58471552/i/afef33598a0c4f35886d0b0b34c57377/1/GCuCv726gZycFxatRCb7iU/1IMG_7612.jpg",
  "https://static.livebooks.com/d83c385466b046478be0d0cf58471552/i/e03bed7b16da4f57b7646bef6ad64ef4/1/GCuCv726gZycFxatRCb7iU/7IMG_2965.jpg",
  "https://static.livebooks.com/d83c385466b046478be0d0cf58471552/i/da0da7d6d1954c9ca2bdb9179add9026/1/GCuCv726gZycFxatRCb7iU/5IMG_7611.jpg"
];

export default function HeadshotsLightbox({ isOpen, currentIndex, onClose, onNext, onPrev }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-500" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white z-10 transition-all duration-500 hover:scale-110" onClick={onClose}>
        <X size={32} />
      </button>
      <button 
        className="absolute left-4 text-white z-10 p-2 bg-black/50 rounded-full transition-all duration-500 hover:scale-110"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        className="absolute right-4 text-white z-10 p-2 bg-black/50 rounded-full transition-all duration-500 hover:scale-110"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <ChevronRight size={32} />
      </button>
      <div className="relative max-w-4xl max-h-full transition-all duration-500 scale-95 animate-in" onClick={(e) => e.stopPropagation()}>
        <img 
          src={headshots[currentIndex]} 
          alt={`Headshot ${currentIndex + 1}`} 
          className="max-w-full max-h-full object-contain rounded-lg transition-all duration-500"
        />
      </div>
    </div>
  );
}