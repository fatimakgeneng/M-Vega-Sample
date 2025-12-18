"use client";
import { Play, Youtube } from 'lucide-react';

const headshots = [
  "https://i.pinimg.com/1200x/f1/fb/70/f1fb703df9a17e43a4180fbbf79e8fbc.jpg",
  "https://static.livebooks.com/d83c385466b046478be0d0cf58471552/i/afef33598a0c4f35886d0b0b34c57377/1/GCuCv726gZycFxatRCb7iU/1IMG_7612.jpg",
  "https://static.livebooks.com/d83c385466b046478be0d0cf58471552/i/e03bed7b16da4f57b7646bef6ad64ef4/1/GCuCv726gZycFxatRCb7iU/7IMG_2965.jpg",
  "https://static.livebooks.com/d83c385466b046478be0d0cf58471552/i/da0da7d6d1954c9ca2bdb9179add9026/1/GCuCv726gZycFxatRCb7iU/5IMG_7611.jpg"
];

export default function Reels({ refProp, onWatchReel, onOpenHeadshots }) {
  return (
    <section 
      id="reels" 
      className="py-20 bg-neutral-900 px-4 opacity-0 transition-all duration-1000"
      ref={refProp}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Reels & Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Demo Reel */}
          <div className="group">
            <h3 className="text-xl font-semibold mb-4">Demo Reel</h3>
            <div 
              className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden relative cursor-pointer transition-all duration-500 hover:scale-105"
              onClick={onWatchReel}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Youtube size={48} className="opacity-50 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
                <Play size={20} className="mr-2" />
                Play Video
              </div>
            </div>
          </div>
          {/* Headshots */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Headshots</h3>
            <div className="grid grid-cols-2 gap-4">
              {headshots.map((headshot, index) => (
                <div 
                  key={index}
                  className="aspect-[3/4] bg-neutral-800 rounded-lg overflow-hidden transition-all duration-500 hover:grayscale-0 grayscale hover:scale-105 cursor-pointer"
                  onClick={() => onOpenHeadshots(index)}
                  style={{ backgroundImage: `url(${headshot})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}