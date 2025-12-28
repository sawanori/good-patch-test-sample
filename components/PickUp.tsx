'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface PickUpProps {
  animationsEnabled: boolean;
}

const pickupItems = [
  {
    id: 1,
    type: 'youtube',
    title: '佐久間さん、HP作らせてください【働く理由を赤裸々告白・ラランドニシダも参戦！？】',
    date: '2025.12.18',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80',
    href: '#',
  },
  {
    id: 2,
    type: 'youtube',
    title: 'どうしてデザイナーから執行役員に？デザイナーのキャリアの相談室（前編）',
    date: '2025.09.22',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
    href: '#',
  },
  {
    id: 3,
    type: 'note',
    title: '世界最先端AI企業 OpenAIのデザイナーに求められる「曖昧さへの耐性」',
    date: '2025.08.03',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
    href: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function PickUp({ animationsEnabled }: PickUpProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="pick-up" className="bg-white py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#0066FF] mb-12"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pick Up
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={animationsEnabled ? 'hidden' : 'visible'}
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {pickupItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Link
                href={item.href}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                {/* Platform Badge */}
                <div className="p-4 pb-0 flex items-center gap-2">
                  {item.type === 'youtube' ? (
                    <>
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-700">YouTube</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2v-4h2v4zm0-6h-2V9h2v2z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-700">note</span>
                    </>
                  )}
                </div>

                {/* Thumbnail */}
                <div className="p-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.type === 'youtube' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-300">
                    {item.title}
                    <svg className="inline-block ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
