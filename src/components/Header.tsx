"use client";

import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { color } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
            setIsMobileMenuOpen(false);
        }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="bg-purple-50 text-blue-800 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src="./logo1.png" alt="Mind Life Craft Logo" width={50} height={50} style={{ backgroundColor: 'transparent' }} />
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
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <nav className="px-4 py-4 space-y-2">
              <Link 
                href="/" 
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/domains" 
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Domains
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}