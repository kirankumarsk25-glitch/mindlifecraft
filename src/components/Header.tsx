"use client";

import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <FaLeaf className="h-8 w-8 mr-2" />
            <Link href="/" className="text-2xl font-bold">
              Mind Life Craft
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-green-200 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-200 transition-colors">
              About Us
            </Link>
            <Link href="/domains" className="hover:text-green-200 transition-colors">
              Domains
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button - can be expanded later */}
            <button className="text-white hover:text-green-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}