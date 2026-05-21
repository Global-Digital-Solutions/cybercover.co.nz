import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Making a Cyber Insurance Claim | CyberCover.co.nz',
  description: 'What to do if your business suffers a cyber attack. How to make a cyber insurance claim, who to contact, and steps to take immediately to protect your business.',
};

export default function ClaimsPage() {
  return (
    <>
      <section className="relative min-h-[280px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-24 w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Making a Cyber Insurance Claim</h1>
          <p className="text-slate-200 text-lg">What to do immediately if your business suffers a cyber incident.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-red-800 mb-2">🚨 Suffering a Cyber Attack Right Now?</h2>
          <p className="text-red-700 mb-3">Contact your insurer&apos;s 24/7 cyber incident hotline immediately. Do not attempt to restore systems, pay a ransom, or delete any files before speaking to your insurer.</p>
          <p className="text-red-700 text-sm">If you&apos;re not yet insured, contact us: <a href="mailto:hello@cover4you.co.nz" className="font-bold underline">hello@cover4you.co.nz</a></p>
        </div>

        <div className="prose max-w-none">
          <h2>Step-by-Step: What To Do When You&apos;re Attacked</h2>

          <div className="not-prose space-y-4 mb-8">
            {[
              { step: '1', title: 'Contact Your Insurer Immediately', desc: 'Call your insurer\'s 24/7 cyber incident hotline. This is the single most important first step. Most policies require prompt notification, and your insurer will coordinate the entire response — don\'t go it alone.' },
              { step: '2', title: 'Isolate Affected Systems', desc: 'Disconnect affected computers from the network and internet to prevent the attack from spreading. Do not turn them off — this may destroy evidence needed for the forensic investigation.' },
              { step: '3', title: 'Preserve Evidence', desc: 'Do not wipe, restore from backup, or otherwise alter affected systems until the forensic team has examined them. Evidence preservation is critical both for the investigation and for your claim.' },
              { step: '4', title: 'Do Not Pay a Ransom Without Guidance', desc: 'If you\'ve been hit by ransomware, do not pay without first consulting your insurer. They have specialist negotiators who may be able to reduce the demand or find decryption alternatives.' },
              { step: '5', title: 'Notify Your Broker', desc: 'Contact your CyberCover broker, who will help you navigate the claims process, liaise with the insurer, and coordinate the response team on your behalf.' },
              { step: '6', title: 'Assess Privacy Act Obligations', desc: 'Work with your insurer\'s legal team to determine whether the breach requires notification to the Privacy Commissioner and affected individuals under the Privacy Act 2020.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Insurer Contact Information</h2>
          <p>Your 24/7 breach hotline details will be on your policy schedule. Key NZ-active insurers with incident response services include:</p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'Chubb', phone: 'Via policy schedule', notes: '24/7 global cyber response' },
              { name: 'AIG', phone: 'Via policy schedule', notes: 'CyberEdge incident team' },
              { name: 'Zurich', phone: 'Via policy schedule', notes: 'NZ-based claims support' },
              { name: 'Delta Insurance', phone: 'Via policy schedule', notes: 'NZ specialist — rapid response' },
              { name: 'QBE', phone: 'Via policy schedule', notes: '24/7 incident support' },
              { name: 'Berkley', phone: 'Via policy schedule', notes: 'Global incident response team' },
            ].map((ins) => (
              <div key={ins.name} className="bg-white border border-slate-200 rounded-xl p-4">
                <h4 className="font-bold text-slate-900 mb-1">{ins.name}</h4>
                <p className="text-slate-500 text-xs mb-1">{ins.notes}</p>
                <p className="text-teal-600 text-sm font-semibold">{ins.phone}</p>
              </div>
            ))}
          </div>

          <h2>Complaints Process</h2>
          <p>If you have a complaint about how your claim has been handled, please follow these steps:</p>
          <ol>
            <li>First, raise the issue directly with your insurer&apos;s complaints team. They must acknowledge your complaint within 5 business days and respond within 10 business days.</li>
            <li>If unresolved, you may escalate to your broker (CyberCover / Cover4You) at <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a></li>
            <li>If still unresolved, you may contact an approved dispute resolution scheme: <strong>Financial Services Complaints Ltd (FSCL)</strong> or <strong>Insurance & Financial Services Ombudsman (IFSO)</strong></li>
          </ol>

          <h2>Vulnerable Customer Support</h2>
          <p>A significant cyber incident can be deeply stressful. If you need additional support during a claim, please let your broker know. We are committed to treating all customers fairly, including those in vulnerable circumstances.</p>
          <ul>
            <li><strong>MoneyTalks</strong> (free financial helpline): 0800 345 123</li>
            <li><strong>Lifeline</strong> (mental health support): 0800 543 354</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact/" className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition">
            Talk to a Specialist →
          </Link>
        </div>
      </main>
    </>
  );
}
