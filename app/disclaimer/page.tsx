import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Disclaimer | CyberCover.co.nz', description: 'Disclaimer for CyberCover.co.nz — operated by Cover4You, a trading style of GDS.' };
export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 px-4"><div className="max-w-4xl mx-auto"><h1 className="text-3xl font-extrabold text-white">Disclaimer</h1></div></section>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2>Not an Insurer</h2>
          <p>CyberCover.co.nz is operated by Cover4You, a trading style of GDS. Cover4You is a broker referral service — not an insurance underwriter, insurer or direct insurer. We do not underwrite any insurance policies.</p>
          <h2>General Advice Only</h2>
          <p>All content on this website is general in nature and does not constitute personalised financial advice under the Financial Markets Conduct Act 2013. Insurance needs vary significantly between businesses. Always obtain personalised advice from a licensed insurance advisor before purchasing any policy.</p>
          <h2>Referral Fees</h2>
          <p>Cover4You may receive a referral fee from insurers or brokers when a policy is arranged through our service. This does not affect the price you pay. Broker fees, where applicable, are disclosed upfront before you commit to any policy.</p>
          <h2>All Providers Recognised in NZ</h2>
          <p>All insurance providers we refer to are recognised insurers operating in New Zealand under applicable regulatory frameworks.</p>
          <h2>Contact</h2>
          <p>For any queries, contact us at <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a>.</p>
        </div>
      </main>
    </>
  );
}
