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
    { label: 'グッドパッチの噂', href: '#' },
    { label: '生成AI活用の現状', href: '#' },
    { label: 'ストーリー', href: '#' },
    { label: '未来', href: '#' },
    { label: '歴史', href: '#' },
    { label: '経営陣', href: '#' },
    { label: 'もっと知るリンク集', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="about" className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="About Goodpatch"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
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
            <p className="text-gray-500 text-sm mb-4">グッドパッチの基本</p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              1ページで分かるグッドパッチ
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              知っておくといい基本情報を1ページにまとめました。
              <br />
              グッドパッチを知る入口としてご覧ください。
            </p>

            <Link href="#" className="btn-outline-blue mb-8 inline-flex">
              View Overview
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
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
    { label: 'グッドパッチのバリュー（価値観）', href: '#' },
    { label: 'グッドパッチの社内用語', href: '#' },
    { label: 'グッドパッチのナレッジ', href: '#' },
  ];

  return (
    <section ref={sectionRef} id="culture" className="bg-white py-24 md:py-32 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Culture at Goodpatch"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            {/* Decorative Text */}
            <div className="mb-4">
              <span className="text-2xl font-bold text-[#0066FF] font-serif italic">カルチャ〜!</span>
            </div>

            <p className="text-[#0066FF] font-semibold text-sm mb-2">Culture</p>
            <p className="text-gray-500 text-sm mb-4">グッドパッチのカルチャー</p>

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
    <section ref={sectionRef} id="people" className="bg-white py-24 md:py-32 border-t border-gray-100">
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
            <p className="text-gray-500 text-sm mb-4">グッドパッチで働く人々</p>
          </motion.div>

          <motion.p
            className="text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            グッドパッチの力の源は、なんといっても「人」。
            <br />
            デザイナー以外にも多種多様なスペシャリストが共に働いています。
            <br />
            グッドパッチを動かしている人々の生の声をご覧ください。
          </motion.p>
        </div>

        {/* People Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
          initial={animationsEnabled ? 'hidden' : 'visible'}
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="社員インタビュー"
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-semibold">社員インタビュー</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80"
              alt="座談会"
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-semibold">座談会</p>
            </div>
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
    <section ref={sectionRef} id="workstyle" className="bg-[#F7F7F7] py-24 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80"
                alt="Workstyle at Goodpatch"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            {/* Decorative Text */}
            <div className="mb-4">
              <span className="text-xl font-bold text-[#0066FF]">大事な<br />やつだ</span>
            </div>

            <p className="text-[#0066FF] font-semibold text-sm mb-2">Workstyle</p>
            <p className="text-gray-500 text-sm mb-4">グッドパッチの環境</p>

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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
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
    <section ref={sectionRef} id="process" className="bg-[#F7F7F7] py-24 md:py-32 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
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

          {/* Content */}
          <motion.div
            initial={animationsEnabled ? 'hidden' : 'visible'}
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            {/* Decorative Text */}
            <div className="mb-4">
              <span className="text-xl font-bold text-[#0066FF]">さぞ</span>
            </div>

            <p className="text-[#0066FF] font-semibold text-sm mb-2">Process</p>
            <p className="text-gray-500 text-sm mb-4">グッドパッチの選考</p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              選考プロセス
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              グッドパッチの選考の面接回数や期間などについて
              <br />
              詳しくご説明しています。
            </p>

            <Link href="#" className="btn-outline-blue mb-8 inline-flex">
              View Hiring
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
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
