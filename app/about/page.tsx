import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About CyberCover | NZ Cyber Insurance Specialists | CyberCover.co.nz',
  description: 'CyberCover is a specialist cyber insurance broker referral service for New Zealand businesses. Free advice from licensed NZ advisors who understand the cyber threat landscape.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[300px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-24 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">About CyberCover</h1>
          <p className="text-slate-200 text-lg">Specialist cyber insurance expertise for New Zealand businesses.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2>Who We Are</h2>
          <p>CyberCover.co.nz is a specialist cyber insurance comparison and broker referral service operated by Cover4You — a trading style of GDS, NZ owned and operated. We exist because cyber insurance is complex, fast-moving, and critically important for businesses of all sizes — but finding the right cover has historically required navigating a market designed for large corporates.</p>

          <h2>Our Mission</h2>
          <p>We believe every New Zealand business — from a sole trader to a mid-sized enterprise — deserves access to expert cyber insurance advice without the complexity or cost typically associated with specialist brokers. Our mission is to make it easy, fast and affordable to get the right cyber cover.</p>

          <h2>What We Do</h2>
          <p>We are a broker referral service, not an insurer. When you submit a quote request through CyberCover.co.nz, your details are assessed by licensed NZ insurance advisors who specialise in cyber insurance. They compare policies from our panel of insurers — including Chubb, AIG, Zurich, Delta Insurance, QBE and Berkley Insurance — and present you with tailored options in plain English.</p>

          <h2>Our Expertise</h2>
          <p>The NZ cyber insurance market has changed rapidly. Underwriters are increasingly focused on risk quality, security controls, and claims history. Policy wordings differ significantly between insurers — particularly around ransomware sub-limits, social engineering cover, and business interruption waiting periods. Our specialists know these nuances and use them to protect your interests.</p>

          <h2>The NZ Cyber Landscape</h2>
          <p>New Zealand businesses face a growing and evolving cyber threat. CERT NZ reports millions of dollars in direct losses to cyber incidents each year. The Privacy Act 2020 created mandatory breach notification obligations that apply to every business that holds personal information. Despite this, only 6% of small businesses have cyber insurance — a protection gap our service exists to close.</p>

          <h2>Regulatory Information</h2>
          <p>CyberCover.co.nz is operated by Cover4You, a trading style of GDS. We are a registered financial advice provider. Our services are provided in accordance with the Financial Markets Conduct Act 2013. All financial advice is provided by licensed NZ insurance advisors. We may receive a referral fee from insurers when a policy is arranged through our service. Broker fees may apply on some products and are disclosed upfront.</p>

          <h2>ICNZ Fair Practice</h2>
          <p>All insurers we work with are recognised by the Insurance Council of New Zealand (ICNZ) or are Lloyd&apos;s of London underwriters operating in NZ. We are committed to the Fair Insurance Code standards of transparency, fairness and prompt claims handling.</p>
        </div>

        <div className="mt-12 bg-teal-50 border-2 border-teal-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Get Protected?</h2>
          <p className="text-slate-600 mb-6">Talk to a specialist today — free advice, no obligation.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition">
            Get a Free Quote →
          </Link>
        </div>
      </main>
    </>
  );
}
