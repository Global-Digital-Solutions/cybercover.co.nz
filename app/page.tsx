import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import HowItWorksAnimated from '@/components/HowItWorksAnimated';
import { businessTypes } from '@/data/business-types';
import { faqs } from '@/data/faqs';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Cyber Insurance NZ | Expert Broker Advice | CyberCover.co.nz',
  description: 'Expert cyber insurance for New Zealand businesses of all sizes. Free quotes from licensed NZ brokers. Protect against data breaches, ransomware and cyber extortion. Average breach costs $173,000 — get covered today.',
  openGraph: {
    title: 'Cyber Insurance NZ | CyberCover.co.nz',
    description: 'Expert cyber insurance for NZ businesses. Licensed brokers. Free quotes. Data breach, ransomware, business interruption cover.',
    type: 'website',
  },
};

const stats = [
  { number: '53%', label: 'of NZ businesses hit by cyber incident in 2025' },
  { number: '$173K', label: 'average data breach cost for NZ businesses' },
  { number: '6%', label: 'of small businesses currently insured' },
  { number: '50%', label: 'global ransomware increase in 2025' },
];

const coverageItems = [
  { icon: '💾', title: 'Data Breach Response', desc: 'Forensic investigation, legal advice, customer notification and credit monitoring costs — all covered from the moment you report an incident.' },
  { icon: '🦠', title: 'Ransomware & Extortion', desc: 'Ransom negotiation, extortion payment guidance, data recovery and full system restoration costs.' },
  { icon: '⏸️', title: 'Business Interruption', desc: 'Lost revenue and fixed costs while systems are unavailable following a cyber attack — keeping your business afloat.' },
  { icon: '⚖️', title: 'Third-Party Liability', desc: 'Defence and settlement costs for privacy claims made against you by customers, suppliers or third parties.' },
  { icon: '📧', title: 'Social Engineering Fraud', desc: "Business email compromise (BEC), invoice fraud and other social engineering losses — NZ's #1 cyber claim type." },
  { icon: '🏛️', title: 'Regulatory Defence', desc: 'Legal costs and penalties from Privacy Act 2020 investigations, including mandatory breach notification obligations.' },
  { icon: '📣', title: 'Crisis Management', desc: 'Expert PR, communications and reputational recovery support to protect your brand following a cyber incident.' },
  { icon: '🌐', title: 'Network Security Liability', desc: "Cover for claims arising from your systems being used to attack or infect a third party's network." },
];

const featuredBusinesses = businessTypes.slice(0, 8);
const homeFaqs = faqs.slice(0, 6);
const latestPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero — person at desk */}
      <section
        className="relative min-h-[600px] flex items-end"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-800/20" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600/20 border border-teal-500/40 rounded-full text-teal-300 text-sm font-semibold mb-6">
                <span>🔒</span> Specialist Cyber Insurance Brokers — New Zealand
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Cyber Insurance for<br />
                <span className="text-teal-400">New Zealand Businesses</span>
              </h1>
              <p className="text-lg text-slate-200 mb-6 max-w-xl leading-relaxed">
                Expert advice from dedicated NZ cyber insurance specialists. We compare policies from multiple licensed insurers to find the right protection at the best price for your business.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-teal-400 font-bold">✓</span> Free broker advice</div>
                <div className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-teal-400 font-bold">✓</span> Licensed NZ advisors</div>
                <div className="flex items-center gap-2 text-slate-300 text-sm"><span className="text-teal-400 font-bold">✓</span> Up to 6+ insurers compared</div>
              </div>
              <Link href="/contact/" className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 transition text-lg shadow-lg">
                Get a Free Quote →
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <QuoteForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Quote Form */}
      <section className="lg:hidden bg-slate-50 px-4 py-8">
        <div className="max-w-lg mx-auto">
          <QuoteForm compact />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-teal-600 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.number} className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{s.number}</div>
              <div className="text-teal-100 text-sm leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What Cyber Insurance Covers — PROMINENT dark section */}
      <section className="w-full bg-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-teal-600 text-white text-sm font-bold rounded-full mb-5 uppercase tracking-wide">What Cyber Insurance Covers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Complete Protection Against Every Cyber Threat</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">From data breach response to ransomware and regulatory defence — a comprehensive cyber policy covers your business across all stages of a cyber incident.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coverageItems.map((item) => (
              <div key={item.title} className="bg-slate-800 rounded-2xl p-6 border-2 border-slate-700 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-900/30 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-600/20 border border-teal-500/30 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/coverage/" className="inline-block px-8 py-3 border-2 border-teal-500 text-teal-400 font-bold rounded-xl hover:bg-teal-600 hover:text-white hover:border-teal-600 transition">
              Full Coverage Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Cyber Insurance */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">The Cyber Threat Reality</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Cyber Attacks Cost NZ Businesses an Average of $173,000
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                New Zealand businesses face a rapidly growing cyber threat. In 2025, 53% of NZ businesses reported a cyber incident — yet only 6% of small businesses have cyber insurance. The gap between risk and protection is one of the most significant vulnerabilities in the NZ economy.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Cyber insurance is no longer just for large corporates. As businesses of all sizes digitise their operations and hold more customer data, the exposure — and the obligation under the Privacy Act 2020 — applies equally to a sole trader as it does to a listed company.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our licensed NZ brokers specialise exclusively in cyber insurance. We understand the NZ threat landscape, the insurers active in this market, and how to structure cover that actually responds when you need it.
              </p>
              <Link href="/coverage/" className="inline-block px-6 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
                Explore Coverage Options →
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🏛️', title: 'Privacy Act 2020 Obligations', desc: 'All NZ businesses must notify the Privacy Commissioner of serious data breaches. Non-compliance carries penalties up to $350,000.' },
                { icon: '📧', title: "BEC is NZ's #1 Cyber Claim", desc: 'Business email compromise (invoice fraud, payment diversion) is the most common — and costly — cyber claim in New Zealand.' },
                { icon: '🦠', title: 'Ransomware Up 50% in 2025', desc: 'Ransomware attacks increased 50% globally in 2025, with NZ manufacturing and retail among the most targeted sectors.' },
                { icon: '⏱️', title: 'Recovery Takes Weeks', desc: 'The average recovery from a significant cyber incident takes 2–4 weeks. Business interruption losses can exceed the initial attack cost.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-teal-300 transition">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How CyberCover Works — animated steps */}
      <section className="w-full bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How CyberCover Works</h2>
            <p className="text-slate-600 text-lg">Expert broker support from quote to claim — so you can focus on your business.</p>
          </div>
          <HowItWorksAnimated />
        </div>
      </section>

      {/* Business Types */}
      <section className="w-full bg-slate-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-teal-900 text-teal-300 border border-teal-800 text-sm font-semibold rounded-full mb-4">Industry-Specific Cover</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Cyber Insurance for Every Business</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Every industry has unique cyber risks. Our specialists understand your sector and tailor cover accordingly.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {featuredBusinesses.map((biz) => (
              <Link
                key={biz.slug}
                href={`/businesses/${biz.slug}/`}
                className="relative rounded-2xl overflow-hidden min-h-48 flex flex-col justify-end group"
                style={{ backgroundImage: `url(${biz.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent group-hover:from-teal-950/90 transition-all duration-300" />
                <div className="relative p-4">
                  <div className="text-2xl mb-1">{biz.icon}</div>
                  <h3 className="font-bold text-white text-sm leading-tight">{biz.shortName}</h3>
                  <span className="text-teal-400 text-xs font-semibold">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/businesses/" className="inline-block px-6 py-3 border-2 border-teal-500 text-teal-400 font-bold rounded-lg hover:bg-teal-600 hover:text-white hover:border-teal-600 transition">
              View All Business Types →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose CyberCover */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">Why CyberCover</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Dedicated Cyber Insurance Expertise — Not a Generalist Broker
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Most business insurance brokers offer cyber insurance as one product among many. At CyberCover, it&apos;s all we do. Our specialists understand the nuances of cyber policy wordings, the insurers who actually pay claims, and how to structure cover that responds when you need it.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🎯', title: 'Cyber-Only Focus', desc: 'Dedicated specialists who know every policy wording, exclusion and insurer in the NZ market.' },
                  { icon: '🔍', title: 'Multi-Insurer Comparison', desc: 'We compare up to 6+ insurers to find the right fit for your specific risk profile and budget.' },
                  { icon: '📋', title: 'Plain-English Advice', desc: "No jargon. We explain exactly what's covered, what's not, and why — before you commit." },
                  { icon: '🤝', title: 'Claims Support', desc: 'When you need to claim, your dedicated broker is with you every step of the way.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-extrabold mb-4">The NZ Cyber Threat Landscape</h3>
              <div className="space-y-4">
                {[
                  { stat: '43%', label: 'of all NZ cybercrimes target small businesses' },
                  { stat: '$173K', label: 'average cost of a data breach for NZ businesses' },
                  { stat: '6%', label: 'of small NZ businesses currently insured' },
                  { stat: '2–4 weeks', label: 'average recovery time from a significant incident' },
                  { stat: '$350K', label: 'maximum Privacy Commissioner penalty for breaches' },
                  { stat: '$40–$100/mo', label: 'typical cyber insurance cost for small businesses' },
                ].map((item) => (
                  <div key={item.stat} className="flex items-center gap-4 py-3 border-b border-teal-500 last:border-0">
                    <div className="text-2xl font-extrabold text-teal-200 flex-shrink-0 min-w-24">{item.stat}</div>
                    <div className="text-teal-100 text-sm leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources (Blog) */}
      <section className="w-full bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">Insights & Guides</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Cyber Insurance Resources</h2>
            <p className="text-slate-600 text-lg">Expert guides on cyber risk, policy coverage, and protecting your NZ business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                <div className="h-48" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-2">{post.category}</span>
                  <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 hover:text-teal-600">
                    <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-100 pt-3">
                    <span>{post.readTime}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-NZ', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog/" className="inline-block px-6 py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-600 hover:text-white transition">
              All Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — at bottom above CTA */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full mb-4">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about cyber insurance for NZ businesses.</p>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <details key={i} className="bg-slate-50 border-2 border-slate-200 rounded-2xl group open:border-teal-400 open:shadow-md transition-all">
                <summary className="flex justify-between items-start gap-4 p-6 cursor-pointer list-none font-bold text-slate-900 hover:text-teal-600 transition-colors">
                  {faq.question}
                  <span className="w-6 h-6 bg-white group-open:bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-slate-500 group-open:text-teal-600 transition-colors text-sm font-bold border border-slate-200 group-open:border-teal-300">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-700 leading-relaxed text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact/" className="text-teal-600 font-semibold hover:text-teal-700 transition">
              Have more questions? Talk to a specialist →
            </Link>
          </div>
        </div>
      </section>

      {/* Get Protected Today — narrower with border */}
      <section className="w-full bg-slate-900 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Get Protected Today</h2>
            <p className="text-slate-300 text-lg">Licensed NZ cyber insurance brokers. Free advice. No obligation. Response within 1 business day.</p>
          </div>
          <div className="bg-white/5 border-2 border-teal-500/40 rounded-2xl p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://cybercover.co.nz/#organization',
            name: 'CyberCover',
            url: 'https://cybercover.co.nz',
            email: 'hello@cover4you.co.nz',
            description: 'Expert cyber insurance broker referral service for New Zealand businesses.',
            areaServed: { '@type': 'Country', name: 'New Zealand' },
          },
          {
            '@type': 'InsuranceAgency',
            '@id': 'https://cybercover.co.nz/#agency',
            name: 'CyberCover',
            url: 'https://cybercover.co.nz',
            areaServed: { '@type': 'Country', name: 'New Zealand' },
            serviceType: 'Cyber Insurance Broker Referral',
          },
          {
            '@type': 'WebSite',
            '@id': 'https://cybercover.co.nz/#website',
            url: 'https://cybercover.co.nz',
            name: 'CyberCover.co.nz',
            description: 'Cyber insurance comparison and broker referral for NZ businesses.',
            potentialAction: { '@type': 'SearchAction', target: 'https://cybercover.co.nz/blog/' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: homeFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          },
        ],
      })}} />
    </>
  );
}
