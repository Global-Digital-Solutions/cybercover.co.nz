import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Cyber Insurance Coverage Guide NZ | What\'s Covered | CyberCover',
  description: 'Complete guide to cyber insurance coverage in New Zealand. Data breach response, ransomware, business interruption, social engineering, regulatory defence and more.',
};

const coverageTypes = [
  {
    id: 'data-breach',
    icon: '💾',
    title: 'Data Breach Response',
    subtitle: 'When your customer or employee data is exposed',
    description: 'A data breach is one of the most costly and stressful events a business can face. First-party breach response cover activates immediately, funding the specialist resources needed to contain, investigate and remediate.',
    whatsCovered: ['IT forensic investigation to determine cause and scope', 'Legal advice on Privacy Act 2020 notification obligations', 'Individual notifications to affected customers/employees', 'Call centre setup to handle enquiries', 'Credit monitoring services for affected individuals', 'Public relations and media statement support', 'Regulatory liaison with the Office of the Privacy Commissioner'],
    example: 'A healthcare provider\'s patient management system is breached, exposing 3,000 patient records. Cyber insurance funds the IT forensic investigation ($25,000), legal advice and notification costs ($35,000), credit monitoring for affected patients ($20,000), and PR support ($8,000).',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ransomware',
    icon: '🦠',
    title: 'Ransomware & Cyber Extortion',
    subtitle: 'When criminals encrypt your systems and demand payment',
    description: 'Ransomware is one of the most disruptive and costly cyber threats facing NZ businesses. Modern ransomware groups combine encryption with data theft, creating a "double extortion" scenario. Expert response is critical.',
    whatsCovered: ['24/7 incident response team activation', 'Specialist ransomware negotiator access', 'Ransom payment funding (subject to legal guidance)', 'Decryption key verification and testing', 'System restoration and data recovery costs', 'Business interruption losses during recovery', 'Threat intelligence and post-incident hardening advice'],
    example: 'A manufacturing company\'s production systems are hit by ransomware. Cyber insurance funds the incident response team ($20,000), negotiation resulting in a reduced settlement ($60,000), system restoration ($45,000), and 3 weeks of business interruption losses ($90,000).',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'business-interruption',
    icon: '⏸️',
    title: 'Business Interruption',
    subtitle: 'Lost revenue when your systems go down',
    description: 'When a cyber attack takes your systems offline, the clock starts immediately on lost revenue. Business interruption cover compensates for income lost during the period your operations are impaired — often the largest component of a cyber claim.',
    whatsCovered: ['Lost net revenue during the recovery period', 'Fixed ongoing costs (rent, salaries, loan repayments)', 'Extra expenses to maintain operations', 'Dependent business interruption (if a key supplier is attacked)', 'Cloud service outage cover (on some policies)'],
    example: 'A legal firm\'s case management system is encrypted by ransomware. The firm is unable to operate at full capacity for 18 days during recovery. Business interruption cover pays $140,000 in lost billings and ongoing fixed costs during the period.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'liability',
    icon: '⚖️',
    title: 'Third-Party Cyber Liability',
    subtitle: 'When others claim against your business',
    description: 'If your business suffers a breach that exposes customer or third-party data, those affected parties may pursue compensation claims. Third-party liability cover protects your business from these claims.',
    whatsCovered: ['Defence costs against privacy breach claims', 'Compensation and settlement payments', 'Network security liability (if your systems attack others)', 'Media liability for content-related cyber claims', 'Regulatory investigation defence costs', 'Fines and penalties where legally insurable'],
    example: 'A retail business suffers a database breach exposing 8,000 customer credit card records. Twenty customers suffer financial fraud and bring claims. Cyber liability cover funds $180,000 in legal defence and settlement costs.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'social-engineering',
    icon: '📧',
    title: 'Social Engineering & Fraud',
    subtitle: 'Business email compromise and invoice fraud',
    description: 'Social engineering fraud — particularly business email compromise (BEC) — is the most common cyber claim in New Zealand. It requires no hacking: criminals impersonate trusted parties to trick businesses into making fraudulent payments.',
    whatsCovered: ['Fraudulent payment instructions (CEO fraud)', 'Invoice fraud via email impersonation', 'Supplier email compromise losses', 'Telephone fraud (vishing)', 'Funds transfer fraud'],
    example: 'A construction company receives what appears to be an email from their long-term supplier, advising of changed bank account details. Staff transfer $95,000 to the fraudulent account before the fraud is discovered. Social engineering cover reimburses the loss.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'regulatory',
    icon: '🏛️',
    title: 'Regulatory Defence & Fines',
    subtitle: 'Privacy Commissioner investigations and penalties',
    description: 'The Privacy Act 2020 gives the Privacy Commissioner significant investigatory and enforcement powers. If your business suffers a notifiable breach, you may face an investigation — and potentially significant penalties.',
    whatsCovered: ['Legal costs to respond to Privacy Commissioner investigations', 'Representation in Human Rights Review Tribunal proceedings', 'Regulatory fines and penalties (where legally insurable)', 'Compliance guidance and remediation advice', 'Mandatory notification costs'],
    example: 'An aged care provider suffers a breach affecting resident health records and is investigated by the Privacy Commissioner. Regulatory defence cover funds $45,000 in legal representation and compliance costs.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crisis',
    icon: '📣',
    title: 'Crisis Management & PR',
    subtitle: 'Protecting your reputation when it matters most',
    description: 'A significant cyber incident can permanently damage your business reputation. Crisis management cover funds specialist PR and communications support to manage your public response and protect customer trust.',
    whatsCovered: ['Specialist PR firm fees', 'Media statement drafting and management', 'Customer communication strategy', 'Social media monitoring and response', 'Reputational harm assessment', 'Brand recovery campaigns'],
    example: 'A retail business suffers a high-profile data breach that attracts media coverage. Crisis management cover funds a specialist PR firm ($35,000) to manage media enquiries, customer communications and brand recovery activity.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  },
];

const coverageFaqs = faqs.filter(f => f.category === 'Coverage');

export default function CoveragePage() {
  return (
    <>
      <section className="relative min-h-[320px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">Cyber Insurance Coverage Guide</h1>
          <p className="text-slate-200 text-lg max-w-2xl">Everything covered by a comprehensive NZ cyber insurance policy — explained in plain English.</p>
        </div>
      </section>

      <main className="w-full">
        {/* Intro */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-4">A comprehensive cyber insurance policy in New Zealand covers two types of loss: <strong>first-party losses</strong> (costs your business incurs directly from a cyber incident) and <strong>third-party liability</strong> (claims made against your business by customers, partners or regulators). Below, we break down each coverage component in detail.</p>
          <p className="text-slate-600 leading-relaxed">Not every policy covers every component — and limits, sub-limits and excesses vary significantly between insurers. Our brokers help you identify the gaps before you buy.</p>
        </section>

        {/* Coverage Sections */}
        <section className="w-full">
          {coverageTypes.map((cov, idx) => (
            <div key={cov.id} id={cov.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{cov.icon}</span>
                      <div>
                        <h2 className="text-2xl font-extrabold text-slate-900">{cov.title}</h2>
                        <p className="text-teal-600 font-semibold text-sm">{cov.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed">{cov.description}</p>
                    <h3 className="font-bold text-slate-900 mb-3">What&apos;s Covered:</h3>
                    <ul className="space-y-2 mb-6">
                      {cov.whatsCovered.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-slate-700">
                          <span className="text-teal-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-lg p-4">
                      <p className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-1">Real World Example</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{cov.example}</p>
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-lg h-64 lg:h-80" style={{ backgroundImage: `url(${cov.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Coverage FAQs</h2>
            <div className="space-y-4">
              {coverageFaqs.map((faq, i) => (
                <details key={i} className="bg-white border-2 border-slate-200 rounded-2xl group open:border-teal-400">
                  <summary className="flex justify-between items-start gap-4 p-6 cursor-pointer list-none font-bold text-slate-900 hover:text-teal-600 transition-colors">
                    {faq.question}
                    <span className="w-6 h-6 bg-slate-100 group-open:bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-slate-500 group-open:text-teal-600">▾</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-700 text-sm leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <section className="bg-slate-900 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Get Cover Tailored to Your Business</h2>
            <p className="text-slate-300 text-center mb-8">Our brokers will match you with the right policy for your specific risk profile — not just the cheapest option.</p>
            <QuoteForm compact />
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: coverageFaqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
      })}} />
    </>
  );
}
