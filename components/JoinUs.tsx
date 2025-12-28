'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface JoinUsProps {
  animationsEnabled: boolean;
}

const jobCategories = [
  {
    id: 'design',
    title: 'Design',
    jobs: [
      '【Design Div】UI/UXデザイナー',
      '【Design Div】サービスデザイナー',
      '【Design Div】Jr.UI/UXデザイナー（ポテンシャル枠）',
      '【Design Div】BXデザイナー',
    ],
  },
  {
    id: 'pm',
    title: 'Product & Project Management',
    jobs: [
      '【Design Div】PdM（プロダクトマネージャー／グロース担当）',
      '【Design Div】プロジェクトマネージャー',
      '【ReDesigner】PdM（プロダクトマネージャー）',
    ],
  },
  {
    id: 'business',
    title: 'Business',
    jobs: [
      '【Market Design Div】パートナーアライアンスセールス',
      '【Market Design Div】アカウントセールス（マネージャー候補）',
      '【Market Design Div】アカウントセールス',
      '【ReDesigner】カスタマーサクセス',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    jobs: [
      '【HRmony AI】フルスタックエンジニア',
      '【Layermate/業務委託】AIプロダクトエンジニア',
      '【Layermate】フルスタックエンジニア',
      '【ReDesigner】フルスタックエンジニア',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate & HR',
    jobs: [
      '【管理部】経理財務（マネジャー）',
      '【管理部】総務担当',
      '【管理部】経理財務',
      '【管理部】経営企画（IR主担当、FP&Aサポート）',
    ],
  },
];

function JobAccordion({ category }: { category: typeof jobCategories[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors">
          {category.title}
        </h3>
        <div className={`w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:border-[#0066FF] ${isOpen ? 'rotate-180 bg-[#0066FF] border-[#0066FF]' : ''}`}>
          <svg
            className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-[#0066FF]'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.jobs.map((job, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#E6F0FF] group/job transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700 group-hover/job:text-[#0066FF]">
                  {job}
                </span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover/job:text-[#0066FF] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function JoinUs({ animationsEnabled }: JoinUsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="join-us" className="bg-[#F7F7F7]">
      {/* Hero Banner */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Join Goodpatch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.p
              className="text-[#0066FF] font-semibold text-sm mb-4"
              initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              We're hiring!
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              現在38職種募集中！
            </motion.h2>
            <motion.p
              className="text-white/80 text-base md:text-lg leading-relaxed"
              initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              デザイナー、マネージャー、エンジニア、セールスなど多種多様な職種を募集しています。募集要項およびエントリーは各ポジションの詳細ページからお願いいたします。
            </motion.p>
          </div>
        </div>
      </div>

      {/* Job List Accordion */}
      <div id="job-list" className="container-custom py-16 md:py-24">
        <motion.div
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {jobCategories.map((category) => (
            <JobAccordion key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
