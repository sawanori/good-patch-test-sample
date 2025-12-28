'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface JobCardsProps {
  animationsEnabled: boolean;
}

interface Job {
  id: number;
  titleEn: string;
  titleJa: string;
  description: string;
  image: string;
  bgColor: string;
  isWide?: boolean;
}

interface JobCardItemProps {
  job: Job;
  index: number;
  animationsEnabled: boolean;
  videoRef: (el: HTMLVideoElement | null) => void;
}

const jobs: Job[] = [
  {
    id: 1,
    titleEn: 'UI/UX Designer',
    titleJa: 'UI/UXデザイナー',
    description: '表層ではなく本質をデザインする仕事',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bgColor: '#F5F0E8',
  },
  {
    id: 2,
    titleEn: 'Service Designer',
    titleJa: 'サービスデザイナー',
    description: '事業課題と人の体験を接続しビジネスの成功に貢献する',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bgColor: '#E8F0F5',
  },
  {
    id: 3,
    titleEn: 'Product Manager',
    titleJa: 'プロダクトマネージャー',
    description: '多種多様な事業の成長に関与できるクライアントワーク型',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bgColor: '#F5E8F0',
  },
  {
    id: 4,
    titleEn: 'Project Manager',
    titleJa: 'プロジェクトマネージャー',
    description: 'プロジェクトの成功に向けてチームを導く',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80',
    bgColor: '#E8F5F0',
  },
  {
    id: 5,
    titleEn: 'Frontend Engineer',
    titleJa: 'フロントエンドエンジニア',
    description: 'デザインを実現する技術力でプロダクトを形にする',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
    bgColor: '#F0E8F5',
  },
  {
    id: 6,
    titleEn: 'BX Designer',
    titleJa: 'BXデザイナー',
    description: 'ブランド体験を通じて企業価値を高める',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
    bgColor: '#F5F0E8',
  },
  {
    id: 7,
    titleEn: 'Join Our Team',
    titleJa: 'キンエンパッチで働く',
    description: '私たちと一緒にデザインの力で世界を前進させましょう',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    bgColor: '#0066FF',
    isWide: true,
  },
];

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

// 個別のカードコンポーネント - 親コンテナのInView状態を受け取る
function JobCardItem({ job, index, animationsEnabled, videoRef, isContainerInView }: JobCardItemProps & { isContainerInView: boolean }) {
  const isWide = job.isWide;

  // スタッガーアニメーション: 各カードに0.5秒ずつ遅延を追加（よりゆっくり1枚ずつ出現）
  const staggerDelay = 0.8 + index * 0.5;

  return (
    <motion.div
      className={`group ${isWide ? 'col-span-2 md:col-span-3 lg:col-span-2' : ''}`}
      initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
      animate={isContainerInView ? { opacity: 1, y: 0 } : (animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 })}
      transition={{
        duration: 1.0,
        delay: animationsEnabled && isContainerInView ? staggerDelay : 0,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {isWide ? (
        /* Wide Card - Video Background with Centered Content */
        <div className="relative aspect-[8/5] md:aspect-[12/5] lg:aspect-[8/5]" style={{ marginBottom: '-10px', clipPath: 'inset(0 0 10px 0)' }}>
          <div
            className="relative w-full h-full overflow-hidden rounded-2xl"
            style={{ backgroundColor: job.bgColor }}
          >
            {/* Video Background */}
            <video
              ref={videoRef}
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
              <div className="flex flex-col gap-2 items-center">
                <Link
                  href="#"
                  className="inline-flex items-center justify-between bg-white text-[#0066FF] rounded-full px-4 h-[34px] min-w-[130px] hover:bg-gray-100 transition-colors"
                >
                  <span className="text-[14px] font-normal">Entry</span>
                  <span className="ml-auto inline-flex items-center justify-center">
                    <svg className="w-[11px] h-[11px] -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor">
                      <path d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-[12px] font-medium text-white hover:underline transition-colors duration-200"
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
              ref={videoRef}
              autoPlay={animationsEnabled}
              loop
              muted
              playsInline
              poster={job.image}
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
            <div className="flex flex-col gap-2 items-center">
              <Link
                href="#"
                className="inline-flex items-center justify-between bg-[#0066FF] text-white rounded-full px-4 h-[34px] min-w-[130px] hover:bg-[#0052CC] transition-colors"
              >
                <span className="text-[14px] font-normal">Entry</span>
                <span className="ml-auto inline-flex items-center justify-center">
                  <svg className="w-[11px] h-[11px] -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </span>
              </Link>
              <Link
                href="#"
                className="text-[12px] font-medium text-[#0066FF] hover:underline transition-colors duration-200"
              >
                この職種の魅力
              </Link>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function JobCards({ animationsEnabled }: JobCardsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isGridInView = useInView(gridRef, { once: true, margin: '-80px', amount: 0.1 });

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
    <section ref={sectionRef} id="job" className="py-[60px] md:py-[100px] bg-[#F7F7F7]">
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
            キンエンパッチでは、デザイナーだけではなく
            <br className="hidden sm:block" />
            デザイナー以外も多く在籍し、活躍しています
          </p>
        </motion.div>

        {/* Job Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {jobs.map((job, index) => (
            <JobCardItem
              key={job.id}
              job={job}
              index={index}
              animationsEnabled={animationsEnabled}
              videoRef={(el) => { videoRefs.current[job.id - 1] = el; }}
              isContainerInView={isGridInView}
            />
          ))}
        </div>

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
