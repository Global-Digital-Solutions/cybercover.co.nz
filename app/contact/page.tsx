import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Cyber Insurance Quote | Free NZ Broker Advice | CyberCover',
  description: 'Get a free cyber insurance quote from licensed NZ brokers. We compare policies from multiple insurers to find the right cover for your business. Respond within 1 business day.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[280px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-24 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">Get a Free Quote</h1>
          <p className="text-slate-200 text-lg">Licensed NZ cyber insurance brokers respond within 1 business day.</p>
        </div>
      </section>

      <main className="w-full">
        <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
          {/* Value Props */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Why Get a Quote Through CyberCover?</h2>
            <div className="space-y-6">
              {[
                { icon: '🎯', title: 'Cyber Specialists Only', desc: 'We focus exclusively on cyber insurance — not a generalist broker offering it as one product among many.' },
                { icon: '🔍', title: 'Multiple Insurers Compared', desc: 'We compare from Chubb, AIG, Zurich, Delta, QBE and more — not just one insurer\'s product.' },
                { icon: '📋', title: 'Plain-English Explanation', desc: 'We explain every policy in plain English so you know exactly what you\'re buying.' },
                { icon: '⚡', title: 'Fast Response', desc: 'Our brokers respond to all quote requests within one business day.' },
                { icon: '🤝', title: 'Claims Support', desc: 'Your dedicated broker supports you through any claim — not just at purchase.' },
                { icon: '💰', title: 'No Hidden Fees', desc: 'Our referral service is free to use. Any broker fees are disclosed clearly upfront.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">📞 Prefer to Talk First?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Email us at <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 font-semibold">hello@cover4you.co.nz</a> and a specialist will be in touch within one business day to discuss your needs before any quote is prepared.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Get a Cyber Insurance Quote — CyberCover.co.nz',
        url: 'https://cybercover.co.nz/contact/',
        description: 'Get a free cyber insurance quote from licensed NZ brokers.',
      })}} />
    </>
  );
}
