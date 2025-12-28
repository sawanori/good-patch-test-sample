'use client';

import Link from 'next/link';

const footerLinks = {
  about: {
    title: 'About',
    links: [
      { label: '1ページで分かるグッドパッチ', href: '#' },
      { label: 'グッドパッチの事業', href: '#' },
      { label: 'グッドパッチ、10の噂', href: '#' },
      { label: '生成AI活用の現状', href: '#' },
      { label: 'グッドパッチ・ストーリー', href: '#' },
      { label: 'グッドパッチの未来', href: '#' },
      { label: '企業のデザインシフトの歴史', href: '#' },
      { label: 'グッドパッチの経営陣', href: '#' },
      { label: 'グッドパッチをもっと知るリンク集', href: '#' },
    ],
  },
  culture: {
    title: 'Cluture',
    links: [
      { label: 'ビジョンとミッション', href: '#' },
      { label: 'グッドパッチのバリュー（価値観）', href: '#' },
      { label: 'グッドパッチの社内用語', href: '#' },
      { label: 'グッドパッチのナレッジ', href: '#' },
    ],
  },
  job: {
    title: 'Job',
    links: [
      { label: 'UI/UXデザイナー', href: '#' },
      { label: 'サービスデザイナー', href: '#' },
      { label: 'プロダクトマネージャー（PdM）', href: '#' },
      { label: 'プロジェクトマネージャー（PM）', href: '#' },
      { label: 'セールス（営業）', href: '#' },
      { label: 'エンジニア', href: '#' },
    ],
  },
  people: {
    title: 'People',
    links: [
      { label: '社員インタビュー', href: '#' },
      { label: '座談会', href: '#' },
    ],
  },
  workstyle: {
    title: 'Workstyle',
    links: [
      { label: '社員アンケート', href: '#' },
      { label: 'グッドパッチのPeople Experience', href: '#' },
      { label: 'オンボーディング', href: '#' },
      { label: '育成・学習機会', href: '#' },
      { label: '評価と報酬', href: '#' },
      { label: 'キャリアパス', href: '#' },
      { label: '福利厚生', href: '#' },
    ],
  },
  process: {
    title: 'Process',
    links: [
      { label: '選考プロセス', href: '#' },
      { label: 'リエントリー制度', href: '#' },
      { label: 'アルムナイ／一一', href: '#' },
      { label: 'よくある質問', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8">
      <div className="container-custom">
        {/* Top Section - Logo and CTAs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16 pb-16 border-b border-gray-200">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <svg
              width="160"
              height="28"
              viewBox="0 0 160 28"
              fill="none"
              className="transition-transform duration-300 group-hover:scale-105"
            >
              <text
                x="0"
                y="22"
                fill="currentColor"
                fontSize="22"
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="-0.5"
              >
                Goo
              </text>
              <text
                x="46"
                y="22"
                fill="#0066FF"
                fontSize="22"
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="-0.5"
              >
                d
              </text>
              <text
                x="62"
                y="22"
                fill="currentColor"
                fontSize="22"
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="-0.5"
              >
                patch
              </text>
            </svg>
            <span className="text-[#0066FF] font-medium text-base">Careers</span>
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="#job" className="btn-primary">
              Entry
              <span className="text-sm opacity-80">38職種</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link href="#" className="btn-secondary">
              新卒
              <span className="text-sm text-gray-500">27卒</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#0066FF] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Goodpatch Inc. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
