import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy | CyberCover.co.nz', description: 'Privacy Policy for CyberCover.co.nz — operated by Cover4You, a trading style of GDS.' };
export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 px-4"><div className="max-w-4xl mx-auto"><h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1><p className="text-slate-400 mt-2">Last updated: 30 April 2026</p></div></section>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <p>CyberCover.co.nz is operated by Cover4You, a trading style of GDS (NZ owned and operated). We are committed to protecting your personal information in accordance with the Privacy Act 2020.</p>
          <h2>Information We Collect</h2>
          <p>We collect personal information you provide through our quote forms, including your name, contact details, business information and insurance requirements. We use this information solely to provide insurance broker referral services and to contact you with relevant insurance options.</p>
          <h2>How We Use Your Information</h2>
          <p>Your information is used to: assess your insurance needs, connect you with appropriate licensed NZ insurance advisors, respond to your enquiries, and improve our service. We do not sell your personal information to third parties.</p>
          <h2>Disclosure</h2>
          <p>We share your information with licensed NZ insurance advisors and brokers for the purpose of arranging a quote. We may share information with insurers as required to arrange cover. All parties are required to comply with the Privacy Act 2020.</p>
          <h2>Contact</h2>
          <p>For privacy enquiries, contact us at <a href="mailto:hello@cover4you.co.nz">hello@cover4you.co.nz</a>. You have the right to access and correct your personal information under the Privacy Act 2020.</p>
        </div>
      </main>
    </>
  );
}
