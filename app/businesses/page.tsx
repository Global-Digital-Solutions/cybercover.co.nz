import type { Metadata } from 'next';
import Link from 'next/link';
import { businessTypes } from '@/data/business-types';

export const metadata: Metadata = {
  title: 'Cyber Insurance by Business Type | CyberCover.co.nz',
  description: 'Cyber insurance tailored to your industry. Find expert cover for small businesses, healthcare, legal, retail, technology, financial services and more NZ business types.',
};

export default function BusinessesPage() {
  return (
    <>
      <section className="relative min-h-[300px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Cyber Insurance by Business Type</h1>
          <p className="text-slate-200 text-lg max-w-2xl">Every industry has unique cyber risks. Find guidance tailored to your sector.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((biz) => (
            <Link key={biz.slug} href={`/businesses/${biz.slug}/`} className="block bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group">
              <div className="h-40 relative" style={{ backgroundImage: `url(${biz.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-2xl">{biz.icon}</span>
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{biz.name}</h2>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{biz.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">From {biz.avgPremium}</span>
                  <span className="text-teal-600 font-semibold text-sm">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
