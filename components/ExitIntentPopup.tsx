'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'exitPopupLastShown';
const COOLDOWN_DAYS = 7;

function shouldShow(): boolean {
  try {
    const last = localStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    const diff = Date.now() - parseInt(last, 10);
    return diff > COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return true;
  }
}

function markShown() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {}
}

function DesktopPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-6 pointer-events-none">
      <div
        className="pointer-events-auto bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-6 max-w-sm w-full animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-label="Cyber insurance quote prompt"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-white font-semibold text-sm leading-snug">Not sure which cyber cover you need?</p>
        </div>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          Our specialist advisers match NZ businesses with the right policy — at the right price. It takes 2 minutes.
        </p>
        <Link
          href="/contact/"
          onClick={onClose}
          className="block w-full text-center py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition text-sm"
        >
          Get a Quote →
        </Link>
        <p className="text-xs text-slate-500 text-center mt-2">Free. No obligation. Licensed NZ brokers.</p>
      </div>
    </div>
  );
}

function MobileStickyBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t-2 border-teal-600 shadow-2xl px-4 py-3 flex items-center justify-between gap-3">
      <p className="text-white text-sm font-medium leading-snug flex-1">
        Need cyber cover? Talk to a specialist today.
      </p>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href="/contact/"
          onClick={onClose}
          className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition text-sm whitespace-nowrap"
        >
          Get a Quote
        </Link>
        <button onClick={onClose} className="text-slate-400 hover:text-white text-xl leading-none px-1" aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownRef = useRef(false);

  const show = () => {
    if (shownRef.current) return;
    if (!shouldShow()) return;
    shownRef.current = true;
    markShown();
    setVisible(true);
  };

  const close = () => setVisible(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    // Desktop: 20s timer activates exit intent listener
    if (window.innerWidth >= 768) {
      timerRef.current = setTimeout(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (e.clientY <= 10 && e.clientX > window.innerWidth * 0.5) {
            show();
            document.removeEventListener('mousemove', handleMouseMove);
          }
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
      }, 20000);
    } else {
      // Mobile: show sticky bar at 40% scroll depth
      const handleScroll = () => {
        const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrollPct >= 0.4) {
          show();
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!visible) return null;

  return isMobile ? (
    <MobileStickyBar onClose={close} />
  ) : (
    <DesktopPopup onClose={close} />
  );
}
