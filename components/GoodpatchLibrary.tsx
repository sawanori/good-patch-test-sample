'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface GoodpatchLibraryProps {
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

export default function GoodpatchLibrary({ animationsEnabled }: GoodpatchLibraryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="goodpatch-library" className="bg-[#F7F7F7] py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#0066FF] mb-12"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Goodpatch Library
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Profile Slideshow */}
          <motion.div
            className="lg:col-span-1"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#0066FF] rounded-2xl overflow-hidden h-full">
              {/* Slideshow Placeholder */}
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      <span className="text-sm font-medium opacity-80">Goodpatch Tour / We are hiring!</span>
                    </div>
                    <p className="text-xs opacity-60">by Goodpatch Inc.</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold mb-2">Goodpatch Tour</p>
                    <p className="text-sm opacity-80">2025.10</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6 bg-white">
                <h3 className="font-bold text-gray-900 mb-2">Company Profile</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  グッドパッチの基本情報や働く魅力について知っておくといいポイントをスライドでまとめています。
                </p>
                <Link href="#" className="btn-outline-blue inline-flex">
                  View Larger
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog Card */}
            <motion.div
              initial={animationsEnabled ? 'hidden' : 'visible'}
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="https://goodpatch.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#0066FF]" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M8 8h32v32H8V8zm4 4v24h24V12H12zm4 4h16v2H16v-2zm0 6h16v2H16v-2zm0 6h10v2H16v-2z"/>
                  </svg>
                </div>
                <p className="text-xl font-bold text-[#0066FF] mb-2">Goodpatch Blog</p>
                <h3 className="font-bold text-gray-900 mb-3">グッドパッチブログ</h3>
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
                href="https://twitter.com/goodpatch"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M36.6 10.6h5.2l-11.4 13 13.4 17.8h-10.5l-8.2-10.8-9.4 10.8H10.5l12.2-13.9L9.6 10.6h10.7l7.4 9.8 8.9-9.8zm-1.8 27.7h2.9L15.4 13.6h-3.1l22.5 24.7z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">グッドパッチの公式X</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  グッドパッチの「今」を発信中。イベントや最新記事などを、いち早くご確認いただけます。
                </p>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* More Links */}
        <motion.div
          className="text-center mt-12"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:gap-4 transition-all duration-300"
          >
            もっと知るリンク集
            <svg
              width="20"
              height="20"
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
