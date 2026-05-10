import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-extrabold text-white text-lg tracking-tight">
                Cyber<span className="text-teal-400">Cover</span><span className="text-slate-500 font-semibold">.co.nz</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Free broker referral service for NZ businesses. We compare cyber insurance from multiple licensed insurers so you don&apos;t have to.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-teal-900 text-teal-300 border border-teal-800 text-xs rounded-full">🔐 Cyber Specialists</span>
              <span className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 text-xs rounded-full">🤝 Free Advice</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              {[['Home', '/'], ['Coverage Guide', '/coverage/'], ['Compare Insurers', '/compare/'], ['Resources & Guides', '/blog/'], ['About Us', '/about/'], ['Contact', '/contact/'], ['Making a Claim', '/claims/'], ['Disclaimer', '/disclaimer/']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-slate-400 hover:text-teal-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Business Types */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">By Business</h3>
            <ul className="space-y-1.5 text-xs">
              {[['Small Business', '/businesses/small-business/'], ['Healthcare', '/businesses/healthcare/'], ['Legal Firms', '/businesses/legal-firms/'], ['Retail & eCommerce', '/businesses/retail-ecommerce/'], ['Technology', '/businesses/technology/'], ['Financial Services', '/businesses/financial-services/'], ['Construction', '/businesses/construction/'], ['Professional Services', '/businesses/professional-services/']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-slate-400 hover:text-teal-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <Link href="/businesses/" className="inline-block mt-3 text-xs font-semibold text-teal-400 hover:text-teal-300">View all 19 types →</Link>
          </div>

          {/* Coverage Types */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Coverage</h3>
            <ul className="space-y-1.5 text-xs">
              {[['Data Breach Response', '/coverage/#data-breach'], ['Ransomware Cover', '/coverage/#ransomware'], ['Business Interruption', '/coverage/#business-interruption'], ['Cyber Liability', '/coverage/#liability'], ['Social Engineering', '/coverage/#social-engineering'], ['Regulatory Defence', '/coverage/#regulatory'], ['Crisis Management', '/coverage/#crisis']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-slate-400 hover:text-teal-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-500 mb-1 text-xs">Email</p>
                <a href="mailto:hello@cover4you.co.nz" className="text-slate-400 hover:text-teal-400 transition-colors break-all text-xs">hello@cover4you.co.nz</a>
              </div>
              <div className="pt-2">
                <p className="text-slate-500 mb-1 text-xs">24/7 Breach Hotline</p>
                <p className="text-slate-400 text-xs">Available to policyholders via insurer</p>
              </div>
              <div className="pt-3">
                <p className="text-slate-500 mb-2 text-xs">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-teal-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-5">Trusted by NZ Businesses</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🔐', title: 'Cyber Specialists', sub: 'Dedicated cyber insurance expertise' },
              { icon: '⚡', title: 'Fast Response', sub: 'Quote within one business day' },
              { icon: '🔍', title: 'Multiple Insurers', sub: 'Up to 6+ insurers compared' },
              { icon: '🛡️', title: 'Licensed Advisors', sub: 'NZ-based, FMCA registered' },
            ].map((b) => (
              <div key={b.title} className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 hover:border-teal-600 transition-colors">
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{b.title}</p>
                  <p className="text-slate-400 text-xs leading-tight">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How This Site Works */}
        <div className="border-t border-slate-800 pt-8 mb-6">
          <div className="bg-slate-800 rounded-xl p-5 text-xs text-slate-400">
            <p className="font-semibold text-slate-300 mb-2">How This Site Works</p>
            <p className="leading-relaxed">
              CyberCover.co.nz is a comparison and referral service operated by Cover4You — not an insurance underwriter or licensed insurer. We compare information from multiple insurers and refer qualified enquiries to licensed NZ insurance advisers and brokers. Our referral service is free to use. Broker fees may apply on some products — these are disclosed upfront. All information on this site is general in nature and does not constitute personalised financial advice under the Financial Markets Conduct Act 2013. Always read the policy wording and consult a licensed adviser before purchasing.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {year} Cover4You, a trading style of GDS. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              {[['Privacy Policy', '/privacy/'], ['Terms of Service', '/terms/'], ['Disclaimer', '/disclaimer/'], ['Making a Claim', '/claims/'], ['About Us', '/about/']].map(([label, href]) => (
                <Link key={href} href={href} className="hover:text-teal-400 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
