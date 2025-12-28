'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface JobCardsProps {
  animationsEnabled: boolean;
}

const jobs = [
  {
    id: 1,
    titleEn: 'UI/UX Designer',
    titleJa: 'UI/UXデザイナー',
    description: '表層ではなく本質をデザインする仕事',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    bgColor: '#F5F0E8',
  },
  {
    id: 2,
    titleEn: 'Service Designer',
    titleJa: 'サービスデザイナー',
    description: '事業課題と人の体験を接続しビジネスの成功に貢献する',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bgColor: '#E8F0F5',
  },
  {
    id: 3,
    titleEn: 'Product Manager',
    titleJa: 'プロダクトマネージャー',
    description: '多種多様な事業の成長に関与できるクライアントワーク型',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bgColor: '#F5E8F0',
  },
  {
    id: 4,
    titleEn: 'Project Manager',
    titleJa: 'プロジェクトマネージャー',
    description: 'プロジェクトを成功に導くための計画・推進・調整を担う',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bgColor: '#E8F5E8',
  },
  {
    id: 5,
    titleEn: 'Sales',
    titleJa: 'セールス（営業）',
    description: 'クライアントの課題を深く理解し、デザインの力で解決を提案する',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bgColor: '#F0F5E8',
  },
  {
    id: 6,
    titleEn: 'Engineer',
    titleJa: 'エンジニア',
    description: '技術の力でデザインを実現し、ユーザーに価値を届ける',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bgColor: '#E8E8F5',
  },
  {
    id: 7,
    titleEn: 'And More...',
    titleJa: 'その他の職種',
    description: 'コーポレート、マーケティング、経営企画など、多様な職種でデザインの力を信じる仲間を募集しています',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    bgColor: '#F0F0F0',
    isWide: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function JobCards({ animationsEnabled }: JobCardsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        if (animationsEnabled) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [animationsEnabled]);

  return (
    <section ref={sectionRef} id="job" className="py-24 md:py-32 bg-[#F7F7F7]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={animationsEnabled ? 'hidden' : 'visible'}
          animate={isInView ? 'visible' : 'hidden'}
          variants={headerVariants}
        >
          <h2 className="text-xl md:text-[26px] lg:text-[38px] font-bold text-[#0066FF] mb-6">
            We're Hiring For 38 Roles.
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            グッドパッチでは、デザイナーだけではなく
            <br className="hidden sm:block" />
            デザイナー以外も多く在籍し、活躍しています
          </p>
        </motion.div>

        {/* Job Cards Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          initial={animationsEnabled ? 'hidden' : 'visible'}
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {jobs.map((job) => {
            const isWide = 'isWide' in job && job.isWide;

            return (
              <motion.div
                key={job.id}
                className={`group transition-all duration-500 ${
                  isWide ? 'col-span-2' : ''
                }`}
                variants={itemVariants}
              >
                {isWide ? (
                  /* Wide Card - Video Background with Centered Content */
                  <div className="relative aspect-[8/5]" style={{ marginBottom: '-10px', clipPath: 'inset(0 0 10px 0)' }}>
                    <div
                      className="relative w-full h-full overflow-hidden rounded-2xl"
                      style={{ backgroundColor: job.bgColor }}
                    >
                    {/* Video Background */}
                    <video
                      ref={(el) => { videoRefs.current[job.id - 1] = el; }}
                      autoPlay={animationsEnabled}
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    >
                      <source src="/final.webm" type="video/webm" />
                      <source src="/final (5).mp4" type="video/mp4" />
                    </video>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />
                    {/* Centered Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                      <p className="text-white font-semibold text-[10px] mb-0.5">
                        {job.titleEn}
                      </p>
                      <h3 className="text-sm font-bold text-white mb-1.5">
                        {job.titleJa}
                      </h3>
                      <p className="text-[10px] text-white/80 leading-relaxed mb-3 max-w-md">
                        {job.description}
                      </p>
                      <div className="flex flex-col gap-1.5 items-center">
                        <Link
                          href="#"
                          className="inline-flex items-center gap-1.5 bg-white text-[#0066FF] font-semibold rounded-full justify-center py-1.5 px-10 text-[10px] hover:bg-gray-100 transition-colors"
                        >
                          Entry
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-2.5 h-2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                        <Link
                          href="#"
                          className="text-[10px] font-medium text-white hover:underline transition-colors duration-200"
                        >
                          この職種の魅力
                        </Link>
                      </div>
                    </div>
                    </div>
                  </div>
                ) : (
                  /* Normal Card - Vertical Layout */
                  <>
                    {/* Video Container */}
                    <div
                      className="relative aspect-[4/5] overflow-hidden rounded-2xl"
                      style={{ backgroundColor: job.bgColor }}
                    >
                      <video
                        ref={(el) => { videoRefs.current[job.id - 1] = el; }}
                        autoPlay={animationsEnabled}
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center"
                      >
                        <source src="/final.webm" type="video/webm" />
                        <source src="/final (5).mp4" type="video/mp4" />
                      </video>
                    </div>

                    {/* Content */}
                    <div className="pt-3 text-center">
                      <p className="text-[#0066FF] font-semibold text-[10px] mb-0.5">
                        {job.titleEn}
                      </p>
                      <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                        {job.titleJa}
                      </h3>
                      <p className="text-[10px] text-gray-500 leading-relaxed mb-3 min-h-[1.5rem]">
                        {job.description}
                      </p>
                      <div className="flex flex-col gap-1.5 items-center">
                        <Link
                          href="#"
                          className="btn-primary justify-center py-1.5 px-10 text-[10px]"
                        >
                          Entry
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-2.5 h-2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                        <Link
                          href="#"
                          className="text-[10px] font-medium text-[#0066FF] hover:underline transition-colors duration-200"
                        >
                          この職種の魅力
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="#job-list"
            className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:gap-4 transition-all duration-300"
          >
            すべての職種を見る
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
