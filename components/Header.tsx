'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { businessTypes } from '@/data/business-types';

const featuredBusinesses = businessTypes.slice(0, 10);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${isScrolled ? 'shadow-md' : 'shadow-none'} bg-white border-b border-slate-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
              Cyber<span className="text-teal-600">Cover</span><span className="text-slate-400 font-semibold">.co.nz</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Business Types Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors flex items-center gap-1">
                By Business
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-slate-100">
                {featuredBusinesses.map((b) => (
                  <Link key={b.slug} href={`/businesses/${b.slug}/`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 first:rounded-t-xl">
                    {b.icon} {b.shortName}
                  </Link>
                ))}
                <Link href="/businesses/" className="block px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 border-t border-slate-100 rounded-b-xl">
                  View all business types →
                </Link>
              </div>
            </div>

            <Link href="/coverage/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Coverage</Link>
            <Link href="/compare/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Compare</Link>
            <Link href="/blog/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Resources</Link>
          </nav>

          {/* CTA */}
          <Link href="/contact/" className="hidden sm:inline-block px-5 py-2 bg-teal-600 text-white rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
            Get a Quote
          </Link>

          {/* Mobile toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Toggle menu">
            <svg className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-200">
            <button onClick={() => setIsBusinessOpen(!isBusinessOpen)} className="w-full text-left px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 flex justify-between items-center">
              By Business
              <svg className={`w-4 h-4 transition-transform ${isBusinessOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isBusinessOpen && (
              <div className="bg-slate-50">
                {featuredBusinesses.map((b) => (
                  <Link key={b.slug} href={`/businesses/${b.slug}/`} onClick={() => setIsMenuOpen(false)} className="block px-8 py-2 text-sm text-slate-700 hover:text-teal-600">
                    {b.icon} {b.shortName}
                  </Link>
                ))}
                <Link href="/businesses/" onClick={() => setIsMenuOpen(false)} className="block px-8 py-2 text-sm font-semibold text-teal-700">View all →</Link>
              </div>
            )}
            {[['Coverage', '/coverage/'], ['Compare', '/compare/'], ['Resources', '/blog/']].map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50">{label}</Link>
            ))}
            <div className="px-4 py-3 border-t border-slate-200 mt-2">
              <Link href="/contact/" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
