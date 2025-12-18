"use client";
import { useEffect, useState } from 'react';

export default function ScrollingMarquee() {
  const [items] = useState([
    "Award Winning Performances",
    "Critically Acclaimed",
    "Now Showing in Theaters",
    "Featured in Major Productions"
  ]);

  return (
    <div className="w-full overflow-hidden bg-neutral-800/50 py-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10"></div>
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, index) => (
          <span key={index} className="mx-8 text-neutral-300 text-lg font-light">
            {item} • 
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}