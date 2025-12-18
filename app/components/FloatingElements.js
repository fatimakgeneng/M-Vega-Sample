"use client";
import { useEffect, useState } from 'react';

export default function FloatingElements() {
  const [positions, setPositions] = useState([]);
  
  useEffect(() => {
    // Create random floating elements
    const newPositions = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setPositions(newPositions);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            animation: `float ${pos.duration}s ease-in-out ${pos.delay}s infinite`
          }}
        ></div>
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}