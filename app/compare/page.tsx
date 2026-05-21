import type { Metadata } from 'next';
import Link from 'next/link';
import { insurers } from '@/data/insurers';

export const metadata: Metadata = {
  title: 'Compare Cyber Insurance Providers NZ | CyberCover.co.nz',
  description: 'Compare cyber insurance providers available in New Zealand. Chubb, AIG, Zurich, Delta Insurance, QBE and more. Expert broker advice to find the right fit.',
};

const badgeColors: Record<string, string> = {
  violet: 'bg-violet-100 text-violet-700 border-violet-200',
  teal: 'bg-teal-100 text-teal-700 border-teal-200',
  sky: 'bg-sky-100 text-sky-700 border-sky-200',
  emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  amber: 'bg-amber-100 text-amber-700 border-amber-200',
};

// Financial strength and market ratings (AM Best + broker market assessments)
const insurerRatings: Record<string, { amBest: string; amBestLabel: string; marketScore: number; claimsScore: number; nzPresence: string }> = {
  chubb: { amBest: 'A++', amBestLabel: 'Superior', marketScore: 4.8, claimsScore: 4.9, nzPresence: 'Local NZ team' },
  aig: { amBest: 'A', amBestLabel: 'Excellent', marketScore: 4.5, claimsScore: 4.6, nzPresence: 'Local NZ team' },
  zurich: { amBest: 'A+', amBestLabel: 'Superior', marketScore: 4.6, claimsScore: 4.7, nzPresence: 'Local NZ team' },
  delta: { amBest: 'B++', amBestLabel: 'Good', marketScore: 4.4, claimsScore: 4.5, nzPresence: 'NZ-founded' },
  qbe: { amBest: 'A', amBestLabel: 'Excellent', marketScore: 4.3, claimsScore: 4.4, nzPresence: 'Local NZ team' },
  berkley: { amBest: 'A+', amBestLabel: 'Superior', marketScore: 4.2, claimsScore: 4.3, nzPresence: 'Regional office' },
};

const featureMatrix = [
  { feature: 'Data Breach Response', chubb: true, aig: true, zurich: true, delta: true, qbe: true, berkley: true },
  { feature: 'Ransomware Extortion', chubb: true, aig: true, zurich: true, delta: true, qbe: true, berkley: true },
  { feature: 'Business Interruption', chubb: true, aig: true, zurich: true, delta: true, qbe: '✓ (waiting period)', berkley: true },
  { feature: 'Social Engineering / BEC', chubb: true, aig: true, zurich: '✓ (optional)', delta: true, qbe: '✓ (optional)', berkley: true },
  { feature: 'Third-Party Liability', chubb: true, aig: true, zurich: true, delta: true, qbe: true, berkley: true },
  { feature: 'Regulatory Defence', chubb: true, aig: true, zurich: true, delta: true, qbe: '✓ (sub-limit)', berkley: true },
  { feature: 'Crisis Management / PR', chubb: true, aig: true, zurich: true, delta: '✓ (limited)', qbe: true, berkley: true },
  { feature: '24/7 Incident Hotline', chubb: true, aig: true, zurich: true, delta: true, qbe: true, berkley: true },
  { feature: 'NZ-Based Claims', chubb: true, aig: true, zurich: true, delta: true, qbe: true, berkley: false },
  { feature: 'Tech E&O Combined', chubb: true, aig: '✓ (optional)', zurich: false, delta: false, qbe: true, berkley: true },
];

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} className={`w-3 h-3 ${i <= Math.round(score) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-slate-500 ml-1">{score}</span>
    </div>
  );
}

export default function ComparePage() {
  const insurerSlugs = ['chubb', 'aig', 'zurich', 'delta', 'qbe', 'berkley'];

  return (
    <>
      <section className="relative min-h-[300px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Compare Cyber Insurance Providers</h1>
          <p className="text-slate-200 text-lg max-w-2xl">Detailed feature comparison and financial strength ratings for major cyber insurers in the New Zealand market.</p>
        </div>
      </section>

      <main className="w-full">

        {/* Feature Matrix — AT TOP with prominent border */}
        <section className="bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Coverage Feature Comparison</h2>
              <p className="text-slate-500 text-sm">Side-by-side comparison of core policy features, financial strength ratings, and NZ market presence.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border-2 border-teal-500 shadow-lg shadow-teal-100">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="text-left px-5 py-4 font-bold text-sm min-w-48">Coverage Feature</th>
                    {insurers.map((ins) => (
                      <th key={ins.slug} className="text-center px-3 py-4 font-bold whitespace-nowrap text-xs">{ins.name}</th>
                    ))}
                  </tr>
                  {/* AM Best rating row */}
                  <tr className="bg-teal-700/80 text-teal-100 text-xs">
                    <td className="px-5 py-2 font-semibold text-teal-200">AM Best Rating</td>
                    {insurerSlugs.map((slug) => {
                      const r = insurerRatings[slug];
                      return (
                        <td key={slug} className="text-center px-3 py-2">
                          <span className="font-bold text-white">{r.amBest}</span>
                          <span className="block text-teal-300 text-xs">{r.amBestLabel}</span>
                        </td>
                      );
                    })}
                  </tr>
                  {/* Market score row */}
                  <tr className="bg-slate-50 border-b-2 border-teal-200">
                    <td className="px-5 py-2 text-xs font-semibold text-slate-500">Market Rating</td>
                    {insurerSlugs.map((slug) => {
                      const r = insurerRatings[slug];
                      return (
                        <td key={slug} className="text-center px-3 py-2">
                          <StarRating score={r.marketScore} />
                        </td>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-5 py-3.5 text-slate-700 font-medium text-sm">{row.feature}</td>
                      {insurerSlugs.map((slug) => {
                        const val = row[slug as keyof typeof row];
                        return (
                          <td key={slug} className="text-center px-3 py-3.5">
                            {val === true ? <span className="text-emerald-500 font-bold text-base">✓</span> :
                             val === false ? <span className="text-slate-300 text-base">—</span> :
                             <span className="text-xs text-slate-500">{val}</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  {/* Claims score row */}
                  <tr className="bg-teal-50 border-t-2 border-teal-200">
                    <td className="px-5 py-3.5 text-teal-700 font-bold text-sm">Claims Handling Score</td>
                    {insurerSlugs.map((slug) => {
                      const r = insurerRatings[slug];
                      return (
                        <td key={slug} className="text-center px-3 py-3.5">
                          <StarRating score={r.claimsScore} />
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="bg-teal-50">
                    <td className="px-5 py-3 text-teal-700 font-bold text-sm">NZ Presence</td>
                    {insurerSlugs.map((slug) => {
                      const r = insurerRatings[slug];
                      return (
                        <td key={slug} className="text-center px-3 py-3 text-xs text-slate-600">{r.nzPresence}</td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-4">* AM Best ratings current as of 2025. Market and claims ratings reflect broker assessments based on policy wordings, claims experience and NZ market feedback. This table shows general product capabilities — actual policy terms, limits and premiums vary. Confirm with your broker before purchasing.</p>
          </div>
        </section>

        {/* Disclaimer note */}
        <section className="max-w-4xl mx-auto px-4 py-6">
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
            <p className="text-slate-700 text-sm leading-relaxed"><strong className="text-teal-700">Important:</strong> This comparison provides a general overview of insurer strengths and is not a substitute for personalised broker advice. Policy wordings, limits, sub-limits and premiums vary significantly. Our brokers will compare actual policy terms for your specific business — <Link href="/contact/" className="text-teal-600 font-semibold hover:underline">get a free quote to see tailored options</Link>.</p>
          </div>
        </section>

        {/* Insurer Cards */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Insurer Profiles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insurers.map((ins) => {
              const ratings = insurerRatings[ins.slug];
              return (
                <div key={ins.slug} className="bg-white rounded-2xl border-2 border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-900">{ins.name}</h2>
                        <p className="text-slate-500 text-sm">{ins.specialty}</p>
                      </div>
                      {ins.badge && ins.badgeColor && (
                        <span className={`px-2 py-1 text-xs font-bold rounded-full border ml-2 flex-shrink-0 ${badgeColors[ins.badgeColor] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                          {ins.badge}
                        </span>
                      )}
                    </div>
                    {ratings && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-extrabold text-teal-700 bg-teal-50 border border-teal-200 rounded px-2 py-0.5">AM Best {ratings.amBest} — {ratings.amBestLabel}</span>
                      </div>
                    )}
                    <div className="flex gap-6 mb-4">
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Market Rating</p>
                        <StarRating score={ratings?.marketScore || ins.rating} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Claims Score</p>
                        <StarRating score={ratings?.claimsScore || ins.rating} />
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Coverage Highlights</p>
                      <ul className="space-y-1">
                        {ins.coverageHighlights.slice(0, 4).map((h) => (
                          <li key={h} className="flex gap-2 text-xs text-slate-600">
                            <span className="text-teal-500 font-bold flex-shrink-0">✓</span>{h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Best For</p>
                      <p className="text-sm text-slate-700">{ins.bestFor}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 px-6 py-4">
                    <Link href="/contact/" className="block w-full text-center py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition text-sm">
                      Get a Quote →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-600 py-16 px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Insurer Is Right for You?</h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">Our brokers do the comparison work for you — matching your specific risk profile to the right insurer and policy at the best available price.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition shadow-lg">
            Get a Free Comparison Quote →
          </Link>
        </section>
      </main>
    </>
  );
}
