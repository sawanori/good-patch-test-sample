'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface InfoSectionsProps {
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

// About Section
function AboutSection({ animationsEnabled }: { animationsEnabled: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const links = [
    { label: '事業', href: '#' },
    { label: 'キンエンパッチの噂', href: '#' },
    { label: '生成AI活用の現状', href: '#' },
    { label: 'ストーリー', href: '#' },
    { label: '未来', href: '#' },
    { label: '歴史', href: '#' },
    { label: '経営陣', href: '#' },
    { label: 'もっと知るリンク集', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="about" className="bg-white py-[60px] md:py-[100px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image - SP: bottom (order-2), Tablet/PC: left (order-1) */}
          <motion.div
            className="order-2 md:order-1"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="About Kinenpatch"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content - SP: top (order-1), Tablet/PC: right (order-2) */}
          <motion.div
            className="order-1 md:order-2"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            {/* Icon */}
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#0066FF" strokeWidth="2" />
                <circle cx="20" cy="20" r="8" fill="#0066FF" />
              </svg>
            </div>

            <p className="text-[#0066FF] font-semibold text-sm mb-2">About</p>
            <p className="text-gray-500 text-sm mb-4">キンエンパッチの基本</p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              1ページで分かるキンエンパッチ
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              知っておくといい基本情報を1ページにまとめました。
              <br />
              キンエンパッチを知る入口としてご覧ください。
            </p>

            <Link href="#" className="btn-outline-blue mb-8 inline-flex">
              View Overview
              <svg className="w-[13px] h-[13px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor">
                <path d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Link>

            {/* Links */}
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0066FF] transition-colors group"
                >
                  <svg className="w-4 h-4 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                  <span className="group-hover:underline">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Culture Section
function CultureSection({ animationsEnabled }: { animationsEnabled: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const links = [
    { label: 'ビジョンとミッション', href: '#' },
    { label: 'キンエンパッチのバリュー（価値観）', href: '#' },
    { label: 'キンエンパッチの社内用語', href: '#' },
    { label: 'キンエンパッチのナレッジ', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="culture" className="bg-white py-[60px] md:py-[100px] border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image - SP: bottom (order-2), Tablet/PC: left (order-1) */}
          <motion.div
            className="order-2 md:order-1"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Culture at Kinenpatch"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content - SP: top (order-1), Tablet/PC: right (order-2) */}
          <motion.div
            className="order-1 md:order-2"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            {/* Decorative Text */}
            <div className="mb-4">
              <span className="text-2xl font-bold text-[#0066FF] font-serif italic">カルチャ〜!</span>
            </div>

            <p className="text-[#0066FF] font-semibold text-sm mb-2">Culture</p>
            <p className="text-gray-500 text-sm mb-4">キンエンパッチのカルチャー</p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              私たちが大切にしていること
            </h3>

            {/* Links */}
            <div className="space-y-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0066FF] transition-colors group"
                >
                  <svg className="w-4 h-4 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                  <span className="group-hover:underline">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// People Section
function PeopleSection({ animationsEnabled }: { animationsEnabled: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const peopleLinks = [
    { label: '社員インタビュー', href: '#' },
    { label: '座談会', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="people" className="bg-white py-[60px] md:py-[100px] border-t border-gray-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Icon */}
          <motion.div
            className="mb-6"
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto">
              <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z" fill="#0066FF" fillOpacity="0.1"/>
              <path d="M24 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#0066FF"/>
              <path d="M24 44c5.52 0 10.5-2.24 14.1-5.86-1.4-3.14-6.4-5.14-14.1-5.14s-12.7 2-14.1 5.14C13.5 41.76 18.48 44 24 44z" fill="#0066FF"/>
            </svg>
          </motion.div>

          <motion.div
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[#0066FF] font-semibold text-sm mb-2">People</p>
            <p className="text-gray-500 text-sm mb-4">キンエンパッチで働く人々</p>
          </motion.div>

          <motion.p
            className="text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            キンエンパッチの力の源は、なんといっても「人」。
            <br />
            デザイナー以外にも多種多様なスペシャリストが共に働いています。
            <br />
            キンエンパッチを動かしている人々の生の声をご覧ください。
          </motion.p>
        </div>

        {/* People Cards */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-12"
          initial={animationsEnabled ? 'hidden' : 'visible'}
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          <div className="rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="社員インタビュー"
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80"
              alt="座談会"
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex justify-center gap-8"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {peopleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0066FF] transition-colors group"
            >
              <svg className="w-4 h-4 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h8" />
              </svg>
              <span className="group-hover:underline">{link.label}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Workstyle Section
function WorkstyleSection({ animationsEnabled }: { animationsEnabled: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const links = [
    { label: 'People Experience', href: '#' },
    { label: 'オンボーディング', href: '#' },
    { label: '育成・学習機会', href: '#' },
    { label: '評価と報酬', href: '#' },
    { label: 'キャリアパス', href: '#' },
    { label: '福利厚生', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="workstyle" className="bg-[#F7F7F7] py-[60px] md:py-[100px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image - SP: bottom (order-2), Tablet/PC: left (order-1) */}
          <motion.div
            className="order-2 md:order-1"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80"
                alt="Workstyle at Kinenpatch"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content - SP: top (order-1), Tablet/PC: right (order-2) */}
          <motion.div
            className="order-1 md:order-2"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            {/* Decorative Text */}
            <div className="mb-4">
              <span className="text-xl font-bold text-[#0066FF]">大事な<br />やつだ</span>
            </div>

            <p className="text-[#0066FF] font-semibold text-sm mb-2">Workstyle</p>
            <p className="text-gray-500 text-sm mb-4">キンエンパッチの環境</p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              社員アンケート
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              約130名の社員に対して率直な意見を募った
              <br />
              アンケート結果を公開しています。
            </p>

            <Link href="#" className="btn-outline-blue mb-8 inline-flex">
              View Survey
              <svg className="w-[13px] h-[13px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor">
                <path d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Link>

            {/* Links */}
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0066FF] transition-colors group"
                >
                  <svg className="w-4 h-4 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                  <span className="group-hover:underline">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection({ animationsEnabled }: { animationsEnabled: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const links = [
    { label: 'リエントリー制度', href: '#' },
    { label: 'アルムナイ採用', href: '#' },
    { label: 'よくある質問(Q&A)', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="process" className="bg-[#F7F7F7] py-[60px] md:py-[100px] border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image - SP: bottom (order-2), Tablet/PC: left (order-1) */}
          <motion.div
            className="order-2 md:order-1"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                alt="Hiring Process"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content - SP: top (order-1), Tablet/PC: right (order-2) */}
          <motion.div
            className="order-1 md:order-2"
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            {/* Decorative Text */}
            <div className="mb-4">
              <span className="text-xl font-bold text-[#0066FF]">さぞ</span>
            </div>

            <p className="text-[#0066FF] font-semibold text-sm mb-2">Process</p>
            <p className="text-gray-500 text-sm mb-4">キンエンパッチの選考</p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              選考プロセス
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              キンエンパッチの選考の面接回数や期間などについて
              <br />
              詳しくご説明しています。
            </p>

            <Link href="#" className="btn-outline-blue mb-8 inline-flex">
              View Hiring
              <svg className="w-[13px] h-[13px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="currentColor">
                <path d="M5.845 2.22a.75.75 0 0 1 1.06 0L9.23 4.543c.41.41.41 1.075 0 1.485L6.905 8.352a.75.75 0 0 1-1.06-1.061l1.25-1.251H.75a.75.75 0 0 1 0-1.5h6.354l-1.26-1.26a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Link>

            {/* Links */}
            <div className="space-y-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0066FF] transition-colors group"
                >
                  <svg className="w-4 h-4 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                  <span className="group-hover:underline">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function InfoSections({ animationsEnabled }: InfoSectionsProps) {
  return (
    <>
      <AboutSection animationsEnabled={animationsEnabled} />
      <CultureSection animationsEnabled={animationsEnabled} />
      <PeopleSection animationsEnabled={animationsEnabled} />
      <WorkstyleSection animationsEnabled={animationsEnabled} />
      <ProcessSection animationsEnabled={animationsEnabled} />
    </>
  );
}
