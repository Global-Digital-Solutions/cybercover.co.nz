import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms of Service | CyberCover.co.nz', description: 'Terms of Service for CyberCover.co.nz — operated by Cover4You, a trading style of GDS.' };
export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 px-4"><div className="max-w-4xl mx-auto"><h1 className="text-3xl font-extrabold text-white">Terms of Service</h1><p className="text-slate-400 mt-2">Last updated: 30 April 2026</p></div></section>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <p>These terms govern your use of CyberCover.co.nz, operated by Cover4You, a trading style of GDS (NZ owned and operated).</p>
          <h2>Service Description</h2>
          <p>CyberCover.co.nz is a comparison and broker referral service. We are not an insurance underwriter or licensed insurer. We refer qualified enquiries to licensed NZ insurance advisors and brokers. Our referral service is free to use. Broker fees may apply on some products and are disclosed upfront.</p>
          <h2>General Information Only</h2>
          <p>All information on this website is general in nature and does not constitute personalised financial advice under the Financial Markets Conduct Act 2013. Always read the policy wording and consult a licensed adviser before purchasing insurance.</p>
          <h2>Accuracy of Information</h2>
          <p>We strive to ensure information on this site is current and accurate, but we make no warranty as to its completeness or accuracy. Insurance products and their terms change frequently. Always confirm details with your broker.</p>
          <h2>Contact</h2>
          <p>For any queries regarding these terms, contact us at <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a>.</p>
        </div>
      </main>
    </>
  );
}
