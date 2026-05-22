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
  return {
    title: biz.metaTitle,
    description: biz.metaDescription,
    alternates: { canonical: `https://www.cybercover.co.nz/businesses/${slug}/` },
    openGraph: {
      title: biz.metaTitle,
      description: biz.metaDescription,
      url: `https://www.cybercover.co.nz/businesses/${slug}/`,
      siteName: 'CyberCover',
      images: [{ url: biz.image, width: 1200, height: 630, alt: `Cyber Insurance for ${biz.name} NZ` }],
      type: 'website',
      locale: 'en_NZ',
    },
    twitter: {
      card: 'summary_large_image',
      title: biz.metaTitle,
      description: biz.metaDescription,
      images: [biz.image],
    },
  };
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Cyber Insurance for ${biz.name}`,
    description: biz.whyNeedCyber,
    provider: { '@type': 'Organization', name: 'CyberCover', url: 'https://www.cybercover.co.nz' },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    serviceType: 'Cyber Insurance Broker Referral',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NZD',
      description: `Cyber insurance from ${biz.avgPremium}. Free quotes from licensed NZ brokers.`,
    },
  };

  const faqSchema = biz.faqs && biz.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: biz.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cybercover.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Business Types', item: 'https://www.cybercover.co.nz/businesses/' },
      { '@type': 'ListItem', position: 3, name: biz.name, item: `https://www.cybercover.co.nz/businesses/${slug}/` },
    ],
  };

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

            {/* Long Form Content */}
            {biz.longFormContent && (
              <div
                className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:font-extrabold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-ul:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: biz.longFormContent }}
              />
            )}

            {/* Author Byline */}
            <div className="border-t border-slate-200 pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-xl">🛡️</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Written by the CyberCover Advisory Team</p>
                  <p className="text-slate-500 text-sm">Licensed NZ insurance advisors specialising in cyber risk for New Zealand businesses. All content reviewed for accuracy and NZ regulatory compliance.</p>
                  <p className="text-slate-400 text-xs mt-1">Last updated: May 2026 · <Link href="/contact/" className="text-teal-600 hover:text-teal-700">Get personalised advice →</Link></p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            {biz.faqs && biz.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {biz.faqs.map((faq, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-50 px-5 py-4">
                        <p className="font-semibold text-slate-900">{faq.q}</p>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-slate-700 leading-relaxed text-sm">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                {[['Coverage Guide', '/coverage/'], ['Compare Insurers', '/compare/'], ['Resources & Guides', '/blog/'], ['Contact Us', '/contact/']].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-teal-600 hover:text-teal-700 font-semibold">→ {label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Why CyberCover?</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span className="text-teal-500">✓</span> Licensed NZ insurance advisors</li>
                <li className="flex gap-2"><span className="text-teal-500">✓</span> Multiple insurers compared</li>
                <li className="flex gap-2"><span className="text-teal-500">✓</span> Free, no-obligation advice</li>
                <li className="flex gap-2"><span className="text-teal-500">✓</span> NZ-owned and operated</li>
                <li className="flex gap-2"><span className="text-teal-500">✓</span> Respond within 1 business day</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
