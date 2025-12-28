'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  animationsEnabled: boolean;
  onToggleAnimations: () => void;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Culture', href: '#culture' },
  { label: 'Job', href: '#job' },
  { label: 'People', href: '#people' },
  { label: 'Workstyle', href: '#workstyle' },
  { label: 'Process', href: '#process' },
];

const topBarLinks = [
  { label: 'キャリア採用', href: '#', active: true },
  { label: '新卒採用', href: '#' },
  { label: 'コーポレートサイト', href: 'https://goodpatch.com', external: true },
];

export default function Header({ animationsEnabled, onToggleAnimations }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-8 text-xs border-b border-gray-200/30">
            <div className="flex items-center gap-4">
              {topBarLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-4">
                  {index > 0 && <span className="text-gray-300">|</span>}
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`transition-colors duration-200 ${
                      link.active
                        ? 'text-[#0066FF] font-medium'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
            {/* Animation Toggle - Desktop */}
            <button
              onClick={onToggleAnimations}
              className="hidden sm:flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              <span>アニメーション</span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all duration-200 ${
                  animationsEnabled
                    ? 'bg-[#0066FF] text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {animationsEnabled ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 sm:gap-2 md:gap-4 group">
              <svg
                width="220"
                height="40"
                viewBox="0 0 220 40"
                fill="none"
                className="w-[140px] sm:w-[180px] md:w-[220px] h-auto transition-all duration-300 group-hover:scale-105"
              >
                {/* Goodpatch Logo */}
                <text
                  x="0"
                  y="30"
                  fill={isScrolled ? 'currentColor' : 'white'}
                  fontSize="30"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="-0.5"
                  className="transition-colors duration-300"
                >
                  Goo
                </text>
                <text
                  x="62"
                  y="30"
                  fill={isScrolled ? '#0066FF' : 'white'}
                  fontSize="30"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="-0.5"
                  className="transition-colors duration-300"
                >
                  d
                </text>
                <text
                  x="84"
                  y="30"
                  fill={isScrolled ? 'currentColor' : 'white'}
                  fontSize="30"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="-0.5"
                  className="transition-colors duration-300"
                >
                  patch
                </text>
              </svg>
              <span className={`font-medium text-lg transition-colors duration-300 ${isScrolled ? 'text-[#0066FF]' : 'text-white'}`}>Careers</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold hover:text-[#0066FF] link-underline transition-colors duration-200 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Entry Button */}
              <Link
                href="#job"
                className="btn-primary text-[6px] py-px px-1.5 leading-none"
              >
                Entry
                <span className="text-[5px] opacity-80">38職種</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-1.5 h-1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 -mr-2"
                aria-label="メニュー"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-600 hover:text-[#0066FF] transition-colors duration-200 py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={onToggleAnimations}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 py-2"
              >
                <span>アニメーション</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    animationsEnabled
                      ? 'bg-[#0066FF] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {animationsEnabled ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
