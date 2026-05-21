import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quote Request Received | CyberCover.co.nz',
  description: 'Thank you — your cyber insurance quote request has been received. A licensed NZ broker will be in touch within 1 business day.',
  robots: 'noindex',
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-24">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Quote Request Received!</h1>
        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
          Thank you for contacting CyberCover. One of our licensed NZ cyber insurance brokers will review your details and be in touch within <strong>1 business day</strong> with tailored options.
        </p>
        <div className="bg-white rounded-2xl border-2 border-teal-100 p-6 mb-8 text-left">
          <h2 className="font-bold text-slate-900 mb-3">What happens next?</h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-3"><span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>A specialist reviews your business risk profile</li>
            <li className="flex gap-3"><span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>We compare policies from multiple NZ-active insurers</li>
            <li className="flex gap-3"><span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>You receive tailored options with a clear explanation</li>
            <li className="flex gap-3"><span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>No pressure — take your time to decide</li>
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">Back to Home</Link>
          <Link href="/blog/" className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-lg hover:border-teal-400 hover:text-teal-600 transition">Read Our Guides</Link>
        </div>
      </div>
    </main>
  );
}
