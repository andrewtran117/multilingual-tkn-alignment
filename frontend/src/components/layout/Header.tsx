'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="container mx-auto px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Multilingual Token Alignment
        </Link>
      </div>
    </header>
  );
}
