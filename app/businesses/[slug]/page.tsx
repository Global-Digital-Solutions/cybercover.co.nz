import type { Metadata } from 'next';
import Link from 'next/link';
import { businessTypes } from '@/data/business-types';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return businessTypes.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const biz = businessTypes.find((b) => b.slug === slug);
  if (!biz) return { title: 'Not Found' };
  return { title: biz.metaTitle, description: biz.metaDescription };
}

export default async function BusinessTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const biz = businessTypes.find((b) => b.slug === slug);

  if (!biz) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Not Found</h1>
        <Link href="/businesses/" className="text-teal-600 font-semibold">← All Business Types</Link>
      </main>
    );
  }

  const related = businessTypes.filter((b) => b.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end" style={{ backgroundImage: `url(${biz.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <Link href="/businesses/" className="text-teal-400 hover:text-white transition mb-4 inline-block text-sm font-semibold">← All Business Types</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{biz.icon}</span>
            <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-semibold">Cyber Insurance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            Cyber Insurance for {biz.name}
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl">{biz.description}</p>
        </div>
      </section>

      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2 space-y-10">
            {/* Key Fact Banner */}
            <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-2xl p-5">
              <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Industry Insight</p>
              <p className="text-slate-800 font-semibold">{biz.keyFact}</p>
            </div>

            {/* Why Need Cyber */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Why {biz.shortName} Businesses Need Cyber Insurance</h2>
              <p className="text-slate-700 leading-relaxed text-lg">{biz.whyNeedCyber}</p>
            </div>

            {/* Top Risks */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Top Cyber Risks for {biz.shortName} Businesses</h2>
              <ul className="space-y-3">
                {biz.topRisks.map((risk) => (
                  <li key={risk} className="flex gap-3 items-start">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs font-bold">!</span>
                    </span>
                    <span className="text-slate-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage Needs */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended Coverage for {biz.shortName} Businesses</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {biz.coverageNeeds.map((need) => (
                  <div key={need} className="flex gap-2 items-center p-3 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-400 transition">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span className="text-slate-700 text-sm font-medium">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Typical Premium Range</h2>
              <div className="text-3xl font-extrabold text-teal-400 mb-2">{biz.avgPremium}</div>
              <p className="text-slate-300 text-sm leading-relaxed">Premiums vary based on revenue, data held, security controls in place, and coverage limits selected. Our brokers will find the best rate for your specific profile from multiple insurers.</p>
            </div>

            {/* Related Types */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Other Business Types</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((b) => (
                  <Link key={b.slug} href={`/businesses/${b.slug}/`} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-teal-400 hover:shadow-sm transition">
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-slate-700 text-sm font-medium">{b.name}</span>
                    <span className="text-teal-500 ml-auto text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="bg-teal-50 border-2 border-teal-600 rounded-2xl p-6 mb-6 sticky top-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Get a Quote for {biz.shortName}</h3>
              <p className="text-sm text-slate-600 mb-4">Free advice from licensed NZ brokers. Respond within 1 business day.</p>
              <QuoteForm compact businessType={biz.name} />
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-6">
              <h3 className="font-bold text-slate-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[['Coverage Guide', '/coverage/'], ['Compare Insurers', '/compare/'], ['Blog & Guides', '/blog/'], ['Contact Us', '/contact/']].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-teal-600 hover:text-teal-700 font-semibold">→ {label}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Cyber Insurance for ${biz.name}`,
        description: biz.whyNeedCyber,
        provider: { '@type': 'Organization', name: 'CyberCover', url: 'https://cybercover.co.nz' },
        areaServed: { '@type': 'Country', name: 'New Zealand' },
        serviceType: 'Cyber Insurance Broker Referral',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cybercover.co.nz/' },
          { '@type': 'ListItem', position: 2, name: 'Business Types', item: 'https://cybercover.co.nz/businesses/' },
          { '@type': 'ListItem', position: 3, name: biz.name, item: `https://cybercover.co.nz/businesses/${slug}/` },
        ],
      })}} />
    </>
  );
}
