'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JobCards from '@/components/JobCards';
import WhatWeBelieve from '@/components/WhatWeBelieve';
import InfoSections from '@/components/InfoSections';
import PickUp from '@/components/PickUp';
import GoodpatchLibrary from '@/components/GoodpatchLibrary';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

export default function Home() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for saved preference
    const savedPreference = localStorage.getItem('animationsEnabled');
    if (savedPreference !== null) {
      setAnimationsEnabled(savedPreference === 'true');
    }

    // Small delay for smooth initial load
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleAnimations = () => {
    const newValue = !animationsEnabled;
    setAnimationsEnabled(newValue);
    localStorage.setItem('animationsEnabled', String(newValue));
  };

  return (
    <div
      className={`min-h-screen transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Grain overlay for video-like effect */}
      {animationsEnabled && <div className="grain-overlay" />}

      <Header
        animationsEnabled={animationsEnabled}
        onToggleAnimations={handleToggleAnimations}
      />

      <main>
        <Hero animationsEnabled={animationsEnabled} />
        <JobCards animationsEnabled={animationsEnabled} />
        <WhatWeBelieve animationsEnabled={animationsEnabled} />
        <InfoSections animationsEnabled={animationsEnabled} />
        <PickUp animationsEnabled={animationsEnabled} />
        <GoodpatchLibrary animationsEnabled={animationsEnabled} />
        <JoinUs animationsEnabled={animationsEnabled} />
      </main>

      <Footer />
    </div>
  );
}
