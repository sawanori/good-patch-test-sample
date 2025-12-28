'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function YouTubeWidget() {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="YouTubeウィジェットを開く"
      >
        <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span className="font-medium text-gray-900">YouTube</span>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="閉じる"
        >
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Video Thumbnail */}
      <Link
        href="https://www.youtube.com/@goodpatch"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
      >
        <div className="aspect-video bg-gray-100 relative">
          <img
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=400&q=80"
            alt="YouTube Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link
          href="https://www.youtube.com/@goodpatch"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <p className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0066FF] transition-colors">
            佐久間さん、HP作らせてください【働く理由を赤裸々告白・ラランドニシダも参戦！？】
            <svg className="inline-block ml-1 w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </p>
        </Link>
      </div>
    </div>
  );
}
