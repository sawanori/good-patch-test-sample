'use client';

import { useRef } from 'react';
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
      { name: '【Design Div】UI/UXデザイナー', href: 'https://hrmos.co/pages/kinenpatchhr/jobs/0000010' },
      { name: '【Design Div】サービスデザイナー', href: 'https://hrmos.co/pages/kinenpatchhr/jobs/0000059' },
      { name: '【Design Div】Jr.UI/UXデザイナー（Product & Service Design）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】BX Designer', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】BX Director', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】クリエイティブディレクター（Product & Service Design）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】デザインマネージャー', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】Jr.サービスデザイナー', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
    ],
  },
  {
    id: 'pm',
    title: 'Product & Project Management',
    jobs: [
      { name: '【Design Div】PdM（プロダクトマネージャー／グロース担当）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】プロジェクトマネージャー', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【ReDesigner】PdM（プロダクトマネージャー）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】プロジェクトマネージャー（BX）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
    ],
  },
  {
    id: 'business',
    title: 'Business',
    jobs: [
      { name: '【Market Design Div】パートナーアライアンスセールス', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Market Design Div】アカウントセールス（マネージャー候補）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Market Design Div】アカウントセールス', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【ReDesigner】カスタマーサクセス', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【ReDesigner】セールス', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Market Design Div】インサイドセールス', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    jobs: [
      { name: '【HRmony AI】フルスタックエンジニア', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Layermate/業務委託】AIプロダクトエンジニア', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Layermate】フルスタックエンジニア', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【ReDesigner】フルスタックエンジニア', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】フロントエンドエンジニア', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【Design Div】テックリード', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate & HR',
    jobs: [
      { name: '【管理部】経理財務（マネジャー）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【管理部】総務担当', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【管理部】経理財務', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【管理部】経営企画（IR主担当、FP&Aサポート）', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【人事部】採用担当', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
      { name: '【人事部】HRBP', href: 'https://hrmos.co/pages/kinenpatchhr/jobs' },
    ],
  },
];

function JobCategory({ category }: { category: typeof jobCategories[0] }) {
  return (
    <section className="mt-20 first:mt-0 md:mt-8 first:md:mt-0">
      <h3 className="font-semibold text-[28px] leading-[1.2] md:text-[20px] mb-4">
        {category.title}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
        {category.jobs.map((job, index) => (
          <li key={index} className="border-b border-[#D9D9D9]">
            <Link
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 py-4 text-[15px] leading-[1.5] hover:text-[#0066FF] md:text-[14px] transition-colors"
            >
              <span className="h-[22px] w-[22px] overflow-hidden rounded-full bg-white flex-shrink-0">
                <img
                  src="/icon_gp_circle.webp"
                  width={22}
                  height={22}
                  alt=""
                  aria-hidden="true"
                />
              </span>
              <span className="inline-block flex-1">{job.name}</span>
              <span className="inline-flex items-center justify-center overflow-hidden flex-shrink-0">
                <svg
                  className="w-[13px] h-[13px] text-[#0066FF] -rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z"
                  />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function JoinUs({ animationsEnabled }: JoinUsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="join-us" className="bg-[#F7F7F7] pt-20">
      {/* Hero Card - 2 Column Layout */}
      <div className="mx-auto box-content max-w-[1280px] px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[12px] bg-[#0066FF]"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.15, 0.93, 0.67, 0.99] }}
        >
          {/* Text Content - Right on PC, Bottom on SP */}
          <div className="flex flex-col justify-center p-8 md:p-10 lg:p-20 order-2 md:order-2">
            <div>
              <p className="text-[13px] font-medium leading-none text-white">
                We're hiring!
              </p>
              <h2 className="mt-5 font-bold text-[24px] md:text-[32px] leading-[1.2] text-white">
                現在38職種募集中！
              </h2>
            </div>
            <div>
              <p className="font-bold text-[14px] md:text-[15px] leading-[1.8] tracking-[0.04em] text-white mt-6">
                デザイナー、マネージャー、エンジニア、セールスなど
                <br className="hidden md:block" />
                多種多様な職種を募集しています。
                <br className="hidden md:block" />
                募集要項およびエントリーはこちら。
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="https://hrmos.co/pages/kinenpatchhr/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0066FF] font-bold text-[15px] md:text-[16px] rounded-full px-7 h-[48px] hover:bg-gray-100 transition-colors"
              >
                <span>募集要項・エントリー</span>
                <svg
                  className="w-[13px] h-[13px] -rotate-45"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Video/Image - Left on PC, Top on SP */}
          <div className="relative order-1 md:order-1 aspect-[4/3] md:aspect-auto">
            <video
              autoPlay={animationsEnabled}
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/career_08_joinus_master_comp.mp4" type="video/mp4" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Join Kinenpatch"
                className="h-full w-full object-cover"
              />
            </video>
          </div>
        </motion.div>
      </div>

      {/* Job Categories List */}
      <div id="job-list" className="mx-auto box-content max-w-[1280px] px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px]">
        <motion.div
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {jobCategories.map((category) => (
            <JobCategory key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
