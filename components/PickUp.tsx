'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface PickUpProps {
  animationsEnabled: boolean;
}

type PickupType = 'youtube' | 'note' | 'spotify';

interface PickupItem {
  id: number;
  type: PickupType;
  title: string;
  date: string;
  datetime: string;
  thumbnail: string;
  href: string;
}

const pickupItems: PickupItem[] = [
  {
    id: 1,
    type: 'youtube',
    title: '佐久間さん、HP作らせてください【働く理由を赤裸々告白・ラランドニシダも参戦！？】',
    date: '2025.12.18',
    datetime: '2025-12-18',
    thumbnail: 'https://careers.goodpatch.com/wp-content/uploads/2025/12/IMG_1780.jpg',
    href: 'https://www.youtube.com/watch?v=ho_4Y3mWLOI',
  },
  {
    id: 2,
    type: 'youtube',
    title: 'どうしてデザイナーから執行役員に？デザイナーのキャリアの相談室（前編）',
    date: '2025.09.22',
    datetime: '2025-09-22',
    thumbnail: 'https://careers.goodpatch.com/wp-content/uploads/2025/11/OIkcu_5RV20.jpg',
    href: 'https://www.youtube.com/watch?v=OIkcu_5RV20',
  },
  {
    id: 3,
    type: 'note',
    title: '世界最先端AI企業 OpenAIのデザイナーに求められる「曖昧さへの耐性」',
    date: '2025.08.03',
    datetime: '2025-08-03',
    thumbnail: 'https://careers.goodpatch.com/wp-content/uploads/2025/11/rectangle_large_type_2_f854b6e08f7904fd2b14b6dd2c25d431.webp',
    href: 'https://note.com/naofumit/n/n8e4afd8933d1',
  },
  {
    id: 4,
    type: 'spotify',
    title: 'デザインシステム「Sparkle Design」の裏側について運営メンバーと語る会',
    date: '2025.07.10',
    datetime: '2025-07-10',
    thumbnail: 'https://careers.goodpatch.com/wp-content/uploads/2025/11/dummy_pickup_3.png',
    href: 'https://open.spotify.com/episode/7qkHlPXGBaqyNw7Y5NcNGT',
  },
];

function PlatformIcon({ type }: { type: PickupType }) {
  switch (type) {
    case 'youtube':
      return (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#FF0000" />
            <path d="M9.5 8.5v7l6-3.5-6-3.5z" fill="white" />
          </svg>
          <span className="text-[11px]">YouTube</span>
        </>
      );
    case 'note':
      return (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#41C9B4" />
            <path d="M7 7h6v2H7V7zm0 4h10v2H7v-2zm0 4h8v2H7v-2z" fill="white" />
          </svg>
          <span className="text-[11px]">note</span>
        </>
      );
    case 'spotify':
      return (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#1DB954" />
            <path
              d="M16.5 11c-2.5-1.5-6.5-1.6-8.8-.9-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 2.7-.8 7.2-.7 10 1 .4.2.5.7.3 1-.2.4-.7.5-1.1.3zm-.3 2.3c-2.1-1.3-5.3-1.7-7.8-.9-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 2.8-.9 6.4-.4 8.8 1.1.3.2.4.6.2.9-.2.3-.6.4-.8.1zm-1 2.2c-1.8-1.1-4-.8-5.3-.5-.3.1-.5-.1-.6-.3-.1-.3.1-.5.3-.6 1.5-.4 4-.7 6.1.6.2.1.3.5.1.7-.1.2-.4.3-.6.1z"
              fill="white"
            />
          </svg>
          <span className="text-[11px]">Spotify</span>
        </>
      );
  }
}

export default function PickUp({ animationsEnabled }: PickUpProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="pick-up" className="bg-white py-[60px] md:py-[100px]">
      <div className="mx-auto box-content max-w-[1120px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.h2
          className="text-[32px] font-semibold leading-[1.2] text-[#0066FF]"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pick Up
        </motion.h2>

        {/* Cards Container - Horizontal scroll on SP */}
        <div className="mt-8 -mx-4 md:mx-0 overflow-hidden">
          <motion.ul
            className="
              grid gap-4
              md:grid-cols-2 lg:grid-cols-4
              max-md:grid-cols-none max-md:grid-flow-col max-md:auto-cols-[minmax(300px,80%)]
              max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory
              max-md:px-4 max-md:-mx-4
              scrollbar-hide
            "
            aria-label={`Pick Up一覧（${pickupItems.length}件）`}
            initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pickupItems.map((item, index) => (
              <li
                key={item.id}
                className={`
                  flex snap-start
                  ${index === 0 ? 'max-md:pl-4' : ''}
                  ${index === pickupItems.length - 1 ? 'max-md:pr-4' : ''}
                `}
              >
                <div className="flex flex-col overflow-hidden rounded-[12px] bg-[#F4F4F7] group w-full relative">
                  {/* Platform Badge */}
                  <div className="flex items-center gap-1 px-7 py-2">
                    <PlatformIcon type={item.type} />
                  </div>

                  {/* Thumbnail */}
                  <div className="aspect-[260/145] w-full overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[600ms] ease-in-out group-hover:duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-7 pb-5 pt-7">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} - ${item.date}（新しいウィンドウで開く）`}
                      className="text-[15px] leading-[1.7] group-hover:text-[#0066FF] transition-colors duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:h-full before:w-full rounded"
                    >
                      {item.title}
                      <span className="inline-flex h-[14px] w-[14px] items-center justify-center overflow-hidden ml-1">
                        <svg
                          className="h-[14px] w-[14px] text-[#0066FF] -rotate-45"
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
                    <time
                      className="mt-auto pt-14 text-[12px] leading-[1.5] text-gray-500"
                      dateTime={item.datetime}
                    >
                      {item.date}
                    </time>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
