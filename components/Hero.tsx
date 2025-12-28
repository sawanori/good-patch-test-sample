'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  animationsEnabled: boolean;
}

export default function Hero({ animationsEnabled }: HeroProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // テキストアニメーションの制御
  useEffect(() => {
    if (!animationsEnabled || !textRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');
    chars.forEach((char, i) => {
      (char as HTMLElement).style.animationDelay = `${i * 0.03}s`;
    });
  }, [animationsEnabled]);

  // 動画の再生/停止制御
  useEffect(() => {
    if (!videoRef.current) return;

    if (animationsEnabled) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [animationsEnabled]);

  const mainTextPart1 = 'あなたのやりたいことは、';
  const mainTextPart2 = 'デザインかもしれない';
  const charsPart1 = mainTextPart1.split('');
  const charsPart2 = mainTextPart2.split('');

  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-24">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/final (6).mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
      </div>


      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-12 lg:px-24 flex items-end pb-24 sm:pb-32 min-h-[90vh]">
        <div className="max-w-3xl sm:ml-8 lg:ml-12">
          {/* Main Heading - Character by character animation */}
          <h1
            ref={textRef}
            className={`text-[32px] md:text-[30px] lg:text-[34px] font-bold mb-6 leading-tight tracking-tight sm:whitespace-nowrap text-white ${
              animationsEnabled ? '' : ''
            }`}
          >
            {animationsEnabled ? (
              <>
                {charsPart1.map((char, i) => (
                  <span
                    key={i}
                    className="char inline-block opacity-0 animate-fade-in"
                    style={{ animationFillMode: 'forwards' }}
                  >
                    {char}
                  </span>
                ))}
                <br className="sm:hidden" />
                {charsPart2.map((char, i) => (
                  <span
                    key={i + charsPart1.length}
                    className="char inline-block opacity-0 animate-fade-in"
                    style={{ animationFillMode: 'forwards' }}
                  >
                    {char}
                  </span>
                ))}
              </>
            ) : (
              <>
                あなたのやりたいことは、
                <br className="sm:hidden" />
                デザインかもしれない
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm md:text-base text-white mb-10 ${
              animationsEnabled ? 'animate-fade-in' : ''
            }`}
            style={{ opacity: animationsEnabled ? 0 : 1, animationFillMode: 'forwards' }}
          >
            ようこそ、キンエンパッチの採用サイトへ
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-row gap-3 sm:gap-4 mb-[50px] ${
              animationsEnabled ? 'animate-fade-in delay-500' : ''
            }`}
            style={{ opacity: animationsEnabled ? 0 : 1, animationFillMode: 'forwards' }}
          >
            <Link href="#job" className="inline-flex items-center justify-between gap-1.5 bg-[#0066FF] text-white rounded-full pl-5 pr-4 h-[40px] min-w-[160px] hover:bg-[#0052CC] transition-colors">
              <span className="text-[14px] font-normal">Entry</span>
              <span className="text-[11px] font-bold leading-none">38職種</span>
              <svg className="w-[11px] h-[11px] -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor">
                <path d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Link>
            <Link href="#" className="inline-flex items-center justify-between gap-1.5 bg-white text-gray-900 rounded-full pl-5 pr-4 h-[40px] min-w-[160px] border border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors">
              <span className="text-[14px] font-normal">新卒</span>
              <span className="text-[11px] text-gray-500 font-bold leading-none">27卒</span>
              <svg className="w-[11px] h-[11px] -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor">
                <path d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
          animationsEnabled ? 'animate-float' : ''
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
            <div
              className={`w-1.5 h-3 bg-gray-400 rounded-full ${
                animationsEnabled ? 'animate-bounce' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
