"use client";
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-500" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white z-10 transition-all duration-500 hover:scale-110" onClick={onClose}>
        <X size={32} />
      </button>
      <div className="relative w-full max-w-4xl aspect-video transition-all duration-500 scale-95 animate-in">
        <iframe 
          src="https://youtu.be/wgZi696UraI?si=peAh8qHM2r4NGRww"
          className="w-full h-full rounded-lg transition-all duration-500"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Mark Vega Demo Reel"
        ></iframe>
      </div>
    </div>
  );
}