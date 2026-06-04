'use client';

import { FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';

interface QuoteFormProps {
  compact?: boolean;
  businessType?: string;
}

export default function QuoteForm({ compact = false, businessType = '' }: QuoteFormProps) {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        if (typeof value === 'string') data[key] = value;
      });

      const cfToken = await turnstileRef.current?.execute();
      if (!cfToken) {
        setError('Security check could not complete. Please try again.');
        setLoading(false);
        return;
      }

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, cfTurnstileToken: cfToken }),
      });

      if (res.ok) {
        router.push('/thank-you/');
      } else {
        const j = await res.json().catch(() => ({}));
        setError(j.error || 'Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch {
      setError('Unable to submit. Please check your connection and try again.');
      setLoading(false);
    }
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3 text-slate-900">
        <input type="hidden" name="_subject" value="New Cyber Insurance Quote — CyberCover.co.nz" />
        {businessType && <input type="hidden" name="business_type" value={businessType} />}
        <input type="text" name="name" required placeholder="Your name" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
        <input type="text" name="business" required placeholder="Business name" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
        <input type="email" name="email" required placeholder="Email address" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
        <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
        <TurnstileWidget ref={turnstileRef} />
        {error && <p className="text-xs text-red-600 text-center">{error}</p>}
        <button type="submit" disabled={loading} className="w-full py-3 bg-teal-600 disabled:bg-slate-400 text-white font-bold rounded-lg hover:bg-teal-700 transition text-sm">
          {loading ? 'Sending…' : 'Get A Quote →'}
        </button>
        <p className="text-xs text-slate-500 text-center">Free advice. No obligation. Licensed NZ brokers.</p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-teal-100 p-8 shadow-lg text-slate-900">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Get Your Free Cyber Insurance Quote</h3>
      <input type="hidden" name="_subject" value="New Cyber Insurance Quote — CyberCover.co.nz" />
      {businessType && <input type="hidden" name="business_type" value={businessType} />}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name *</label>
          <input type="text" name="name" required placeholder="Jane Smith" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Business Name *</label>
          <input type="text" name="business" required placeholder="Acme Ltd" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address *</label>
          <input type="email" name="email" required placeholder="jane@acme.co.nz" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
          <input type="tel" name="phone" placeholder="021 123 4567" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Industry / Business Type</label>
          <select name="industry" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white">
            <option value="">Select your industry</option>
            <option>Small Business</option>
            <option>Healthcare / Medical</option>
            <option>Legal / Law Firm</option>
            <option>Accounting / Finance</option>
            <option>Retail / eCommerce</option>
            <option>Technology</option>
            <option>Financial Services</option>
            <option>Construction</option>
            <option>Education</option>
            <option>Hospitality</option>
            <option>Professional Services</option>
            <option>Manufacturing</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Annual Revenue (approx.)</label>
          <select name="revenue" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white">
            <option value="">Select range</option>
            <option>Under $500K</option>
            <option>$500K - $2M</option>
            <option>$2M - $5M</option>
            <option>$5M - $10M</option>
            <option>$10M+</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Current Cyber Cover?</label>
        <select name="current_cover" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white">
          <option value="">Select one</option>
          <option>No current cover - looking for first policy</option>
          <option>Yes, looking to compare / switch</option>
          <option>Yes, policy renewing soon</option>
          <option>Unsure</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Anything else we should know?</label>
        <textarea name="message" rows={3} placeholder="e.g. specific concerns, data types held, existing security measures..." className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none" />
      </div>
      <TurnstileWidget ref={turnstileRef} />
      {error && <p className="text-sm text-red-600 mb-3 text-center">{error}</p>}
      <button type="submit" disabled={loading} className="w-full py-4 bg-teal-600 disabled:bg-slate-400 text-white font-bold rounded-xl hover:bg-teal-700 transition text-lg">
        {loading ? 'Sending…' : 'Get My Quote →'}
      </button>
      <p className="text-sm text-slate-500 mt-3 text-center">Free advice. No obligation. Licensed NZ brokers respond within 1 business day.</p>
    </form>
  );
}
