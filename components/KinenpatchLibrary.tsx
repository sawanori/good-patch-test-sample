'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface KinenpatchLibraryProps {
  animationsEnabled: boolean;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function KinenpatchLibrary({ animationsEnabled }: KinenpatchLibraryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="kinenpatch-library" className="bg-[#F7F7F7] pt-[60px] md:pt-[100px]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.h2
          className="text-[32px] font-semibold text-[#0066FF] mb-8"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Kinenpatch Library
        </motion.h2>

        {/* Main Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Speaker Deck Card - Full Height */}
          <motion.div
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
              {/* Top: Slide Area */}
              <div className="relative aspect-video bg-[#0066FF] flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 p-4 text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  <span className="text-sm font-medium">Kinenpatch Tour 💙 / We are hiring!</span>
                  <span className="ml-auto text-xs opacity-60">SD</span>
                </div>
                <div className="text-xs text-white/60 px-4 -mt-2">by Kinenpatch Inc.</div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-white p-6">
                  <p className="text-xs opacity-60 mb-2">Kinenpatch</p>
                  <p className="text-3xl md:text-4xl font-bold mb-2">Kinenpatch Tour<span className="text-blue-300">●</span></p>
                  <p className="text-sm opacity-80">2025.10</p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom: Text and Button Area */}
              <div className="p-8 md:p-10 bg-white flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 text-xl mb-3">Company Profile</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  キンエンパッチの基本情報や働く魅力について知っておくといいポイントをスライドでまとめています。
                </p>
                <Link
                  href="https://speakerdeck.com/kinenpatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0066FF] text-white rounded-full px-5 h-[40px] w-fit hover:bg-[#0052CC] transition-colors"
                >
                  <span className="text-[14px] font-normal">View Larger</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: 2x2 Grid of 4 Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Blog Card */}
            <motion.div
              initial={animationsEnabled ? 'hidden' : 'visible'}
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="https://kinenpatch.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="mb-4">
                  <p className="text-xl font-bold text-[#0066FF]">Kinenpatch Blog</p>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">キンエンパッチブログ</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  2012年から運営・1,200以上の記事を公開中。ナレッジから人、カルチャーまでご覧いただけます。
                </p>
              </Link>
            </motion.div>

            {/* X (Twitter) Card */}
            <motion.div
              initial={animationsEnabled ? 'hidden' : 'visible'}
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="https://x.com/KinenpatchTokyo"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="mb-4">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">キンエンパッチの公式X</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  キンエンパッチの「今」を発信中。イベントや最新記事などを、いち早くご確認いただけます。
                </p>
              </Link>
            </motion.div>

            {/* note Card */}
            <motion.div
              initial={animationsEnabled ? 'hidden' : 'visible'}
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://note.com/kinenpatch"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="mb-4">
                  <svg className="w-7 h-7 text-[#41C9B4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">キンエンパッチの公式note</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  各メンバーが公開した記事などを、マガジン形式でまとめてご紹介しています。
                </p>
              </Link>
            </motion.div>

            {/* YouTube Card */}
            <motion.div
              initial={animationsEnabled ? 'hidden' : 'visible'}
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="https://www.youtube.com/@kinenpatch_yohaku"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="mb-4">
                  <svg className="w-7 h-7 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">キンエンパッチの「よはく」</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  社員や仕事について動画でご紹介。職種ごとのリアルをメンバーの声で。
                </p>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* More Links - Right aligned */}
        <motion.div
          className="text-right mt-8 pb-[60px] md:pb-[100px]"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="https://careers.kinenpatch.com/about/more/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-[#0066FF] transition-colors"
          >
            もっと知るリンク集
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
