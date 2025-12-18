"use client"
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Reels from './components/Reels';
import Filmography from './components/Filmography';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import HeadshotsLightbox from './components/HeadshotsLightbox';
import ScrollingMarquee from './components/ScrollingMarquee';
import FloatingElements from './components/FloatingElements';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHeadshotsOpen, setIsHeadshotsOpen] = useState(false);
  const [currentHeadshotIndex, setCurrentHeadshotIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Animate sections on scroll
      sectionRefs.current.forEach((section) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const triggerBottom = window.innerHeight * 0.8;
          
          if (sectionTop < triggerBottom) {
            section.classList.add('animate-fade-in-up');
          }
        }
      });

      // Parallax effect for hero background
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroSection.style.backgroundPosition = `center ${scrolled * parallaxSpeed}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openVideo = () => setIsVideoPlaying(true);
  const closeVideo = () => setIsVideoPlaying(false);

  const openHeadshots = (index = 0) => {
    setCurrentHeadshotIndex(index);
    setIsHeadshotsOpen(true);
  };

  const closeHeadshots = () => setIsHeadshotsOpen(false);

  const nextHeadshot = () => {
    setCurrentHeadshotIndex((prevIndex) => 
      prevIndex === headshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevHeadshot = () => {
    setCurrentHeadshotIndex((prevIndex) => 
      prevIndex === 0 ? headshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Head>
        <title>Mark Vega | Actor</title>
        <meta name="description" content="The official website of actor Mark Vega." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar scrolled={scrolled} />
      
      <main className="min-h-screen bg-neutral-950 text-white">
        <Hero onWatchReel={openVideo} />
        <FloatingElements />
        
        <ScrollingMarquee />
        
        <About refProp={el => sectionRefs.current[0] = el} />
        <Reels 
          refProp={el => sectionRefs.current[1] = el} 
          onWatchReel={openVideo}
          onOpenHeadshots={openHeadshots}
        />
        <Filmography refProp={el => sectionRefs.current[2] = el} />
        <Contact refProp={el => sectionRefs.current[3] = el} />
      </main>

      <Footer />
      
      <VideoModal isOpen={isVideoPlaying} onClose={closeVideo} />
      <HeadshotsLightbox 
        isOpen={isHeadshotsOpen} 
        currentIndex={currentHeadshotIndex}
        onClose={closeHeadshots}
        onNext={nextHeadshot}
        onPrev={prevHeadshot}
      />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(50px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          section {
            scroll-margin-top: 80px;
          }
        }

        /* Text selection color */
        ::selection {
          background: rgba(255, 255, 255, 0.2);
        }
        ::-moz-selection {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}