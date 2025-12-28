'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WhatWeBelieveProps {
  animationsEnabled: boolean;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function WhatWeBelieve({ animationsEnabled }: WhatWeBelieveProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={animationsEnabled ? 'hidden' : 'visible'}
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0066FF] mb-4">
            What we believe.
          </h2>
          <p className="text-gray-500 text-base">
            この採用サイトで伝えたい私たちの想い
          </p>
        </motion.div>
      </div>

      {/* Main Image - Full Width */}
      <motion.div
        className="relative overflow-hidden mb-12"
        initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="グッドパッチのオフィス"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <div className="container-custom">
        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg"
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p>
              これは、グッドパッチが創業以来はじめて作った採用サイトです。デザイン会社だからこそ多くのデザイナーに出会いたい。同時に、デザインの力を信じるビジネス職やエンジニアとも数多く出会いたい。会社を魅力的に見せる演出ではなく、ありのままのリアルを見てほしい。
            </p>
            <p>
              その想いで、150名を超える社員が協力し、10万字以上の文章を書き上げました。私たちらしいと思い、AIを使った遊び心も加えています。全員で作り上げたこの採用サイトを通じて、あなたが働く選択肢の一つにグッドパッチが加われば、嬉しい限りです。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
