export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-does-cyber-insurance-cover-nz',
    title: 'What Does Cyber Insurance Actually Cover? A Plain-English Guide for NZ Businesses',
    excerpt: 'Confused by the jargon in cyber insurance policies? This plain-English guide breaks down exactly what is and isn\'t covered — from ransomware to data breaches — for New Zealand businesses.',
    author: 'CyberCover Team',
    date: '2026-04-15',
    category: 'Coverage Guide',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read',
    content: `
<h2>What Does Cyber Insurance Cover in New Zealand?</h2>
<p>Cyber insurance policies can seem complex — but at their core, they protect your business against two types of loss: what happens to you (first-party cover) and claims made against you by others (third-party liability).</p>

<h3>First-Party Cover: Your Own Business Costs</h3>
<p>When your business suffers a cyber attack, the costs start mounting immediately. First-party cover pays for:</p>
<ul>
<li><strong>IT forensic investigation</strong> — specialist cyber investigators determine how the attack happened and what was affected</li>
<li><strong>Data breach notification</strong> — costs to notify affected customers and employees under the Privacy Act 2020</li>
<li><strong>Ransomware extortion payments</strong> — subject to legal guidance and insurer approval</li>
<li><strong>Business interruption</strong> — lost revenue when your systems are down</li>
<li><strong>System restoration</strong> — rebuilding or restoring compromised systems and data</li>
<li><strong>Crisis communications and PR</strong> — managing your reputation during and after an incident</li>
<li><strong>Legal advice</strong> — guidance on obligations under the Privacy Act 2020 and other regulations</li>
</ul>

<h3>Third-Party Liability Cover: Claims Against Your Business</h3>
<p>If a cyber attack exposes your customers' data, they may make claims against your business. Third-party liability cover includes:</p>
<ul>
<li><strong>Privacy liability</strong> — defence and settlement costs for claims by affected individuals</li>
<li><strong>Network security liability</strong> — if your systems are used to attack another business</li>
<li><strong>Regulatory investigations</strong> — defence against Privacy Commissioner investigations and proceedings</li>
<li><strong>Media liability</strong> — for content-related cyber claims</li>
</ul>

<h3>What's Typically NOT Covered</h3>
<p>It's equally important to understand exclusions. Most cyber policies do not cover:</p>
<ul>
<li>War, terrorism and nation-state attacks (some policies are broadening this)</li>
<li>Bodily injury or physical property damage</li>
<li>Intentional or fraudulent acts by the policyholder</li>
<li>Pre-existing incidents known before the policy started</li>
<li>Unencrypted data on lost or stolen devices (without appropriate security controls)</li>
</ul>

<h3>Key Questions to Ask Your Broker</h3>
<p>When reviewing a cyber insurance policy, always ask:</p>
<ul>
<li>Is ransomware extortion cover included, and what is the sub-limit?</li>
<li>Is social engineering / business email compromise (BEC) included or excluded?</li>
<li>What is the business interruption waiting period?</li>
<li>What are the incident response services included?</li>
<li>Are regulatory fines and penalties covered (where legally insurable)?</li>
</ul>

<p>The CyberCover team are licensed NZ insurance advisors who can walk you through any policy in plain English before you commit. Get in touch for a no-obligation review.</p>
    `,
  },
  {
    slug: 'privacy-act-2020-nz-businesses',
    title: 'The Privacy Act 2020 and Your Business: What You Need to Know',
    excerpt: 'New Zealand\'s Privacy Act 2020 introduced mandatory breach notification obligations for all businesses. Here\'s what that means for your cyber risk — and how insurance helps.',
    author: 'CyberCover Team',
    date: '2026-04-08',
    category: 'Regulation',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    content: `
<h2>What the Privacy Act 2020 Means for NZ Businesses</h2>
<p>The Privacy Act 2020 replaced New Zealand's previous privacy legislation and introduced significant new obligations for all businesses that collect and hold personal information about New Zealanders.</p>

<h3>Mandatory Breach Notification</h3>
<p>The most significant change for businesses is the mandatory breach notification requirement. Under the Act, you must notify the Office of the Privacy Commissioner (OPC) and affected individuals when a privacy breach occurs that has caused — or is likely to cause — serious harm.</p>
<p>Serious harm includes situations where individuals may suffer financial loss, physical harm, significant humiliation, or where sensitive information is exposed. In practice, most significant data breaches will meet this threshold.</p>

<h3>The Cost of Notification</h3>
<p>Notifying affected individuals sounds straightforward, but the costs add up quickly. For a business with 5,000 customers, a breach notification programme typically includes:</p>
<ul>
<li>Legal review of notification obligations and content</li>
<li>Individual notification letters or emails</li>
<li>Call centre setup to handle customer enquiries</li>
<li>Credit monitoring services where financial data was exposed</li>
<li>Media statement and communications management</li>
</ul>
<p>These costs can easily reach $50,000–$150,000 for a mid-sized NZ business — and cyber insurance covers all of them.</p>

<h3>Penalties for Non-Compliance</h3>
<p>Failing to notify when required is an offence under the Privacy Act. The Privacy Commissioner can refer matters to the Human Rights Review Tribunal, which can award compensation of up to $350,000. Criminal fines of up to $10,000 apply for certain offences including obstruction and false statements.</p>

<h3>Practical Steps for Businesses</h3>
<p>To meet your Privacy Act obligations, businesses should:</p>
<ul>
<li>Maintain a data register — know what personal data you hold and where</li>
<li>Have an incident response plan that includes a breach notification process</li>
<li>Train staff to recognise and report potential breaches promptly</li>
<li>Appoint a Privacy Officer (required under the Act)</li>
<li>Ensure cyber insurance covers breach response and regulatory defence</li>
</ul>

<h3>How Cyber Insurance Helps</h3>
<p>Cyber insurance policies specifically address Privacy Act compliance by covering: legal advice on notification obligations, notification costs, regulatory investigation defence, and any resulting penalties (where legally insurable). This allows businesses to respond quickly and correctly without worrying about whether they can afford to comply.</p>
    `,
  },
  {
    slug: 'ransomware-new-zealand-threat-insurance',
    title: 'Ransomware in New Zealand: The Rising Threat and How Insurance Helps',
    excerpt: 'Ransomware attacks on NZ businesses surged in 2025. We break down how these attacks work, what they cost, and exactly how cyber insurance responds when your business is hit.',
    author: 'CyberCover Team',
    date: '2026-03-22',
    category: 'Cyber Threats',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    content: `
<h2>The Ransomware Threat to NZ Businesses</h2>
<p>Ransomware attacks increased 50% globally in 2025, with New Zealand businesses among those targeted. Manufacturing and retail saw particularly sharp increases in both attack frequency and claim costs.</p>

<h3>How Ransomware Attacks Work</h3>
<p>Ransomware is malicious software that encrypts your business's files and systems, making them inaccessible. Attackers then demand a payment — typically in cryptocurrency — in exchange for the decryption key. Modern ransomware groups also steal data before encrypting it, threatening to publish it unless a second "confidentiality" payment is made (double extortion).</p>
<p>The most common entry points in NZ include: phishing emails with malicious attachments, compromised remote desktop protocol (RDP) connections, unpatched software vulnerabilities, and compromised third-party vendors with access to your systems.</p>

<h3>The Real Cost of a Ransomware Attack</h3>
<p>Many businesses focus on the ransom itself, but this is often the smallest component of total costs. A typical ransomware attack on an NZ SMB results in:</p>
<ul>
<li><strong>Ransom payment</strong>: $50,000–$500,000+ (though payment is not always recommended)</li>
<li><strong>System restoration</strong>: 2–4 weeks of recovery work, often costing $20,000–$80,000</li>
<li><strong>Business interruption</strong>: Revenue loss during downtime — potentially $5,000–$50,000/day</li>
<li><strong>Forensic investigation</strong>: $15,000–$40,000 to determine cause and scope</li>
<li><strong>Legal and notification costs</strong>: $10,000–$50,000 if customer data was compromised</li>
<li><strong>PR and reputational costs</strong>: Variable but significant</li>
</ul>

<h3>Should You Pay the Ransom?</h3>
<p>This is one of the most complex decisions businesses face during an attack. The answer depends on many factors: whether functional backups exist, the nature of the data stolen, legal implications of payment, and whether payment will actually result in data recovery. Paying also funds criminal enterprises and may not guarantee restoration. Cyber insurers have specialist negotiators who advise on this decision — never make the call alone.</p>

<h3>How Cyber Insurance Responds to Ransomware</h3>
<p>A comprehensive cyber insurance policy responds to ransomware by providing: immediate access to a 24/7 cyber incident response team, specialist ransomware negotiators, ransom payment funding (subject to legal guidance), system restoration and data recovery costs, business interruption losses, and if data was stolen, breach notification support.</p>

<h3>Prevention: What Insurers Look For</h3>
<p>Insurers are increasingly focused on your ransomware resilience. Key controls that reduce both your risk and your premiums include: multi-factor authentication (MFA) on all remote access and email, immutable offline backups tested regularly, prompt software patching, endpoint detection and response (EDR) tools, and a documented incident response plan.</p>
    `,
  },
  {
    slug: 'how-much-does-cyber-insurance-cost-nz',
    title: 'How Much Does Cyber Insurance Cost in New Zealand in 2026?',
    excerpt: 'Cyber insurance premiums in NZ range from $40 to $1,000+ per month depending on your business size and sector. Here\'s a detailed breakdown of what drives cost — and how to reduce your premium.',
    author: 'CyberCover Team',
    date: '2026-03-10',
    category: 'Cost & Value',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    content: `
<h2>What Does Cyber Insurance Cost in New Zealand?</h2>
<p>Cyber insurance premiums in New Zealand currently range from around $40 per month for a small sole trader to $1,000+ per month for large organisations in high-risk sectors. The good news: market conditions in 2026 are competitive, with more insurers entering the NZ market and premiums stabilising after several years of increases.</p>

<h3>Typical Cost Ranges by Business Size</h3>
<ul>
<li><strong>Sole traders and micro businesses</strong> (under $500K revenue): $40–$80/month</li>
<li><strong>Small businesses</strong> ($500K–$2M revenue): $80–$200/month</li>
<li><strong>Medium businesses</strong> ($2M–$10M revenue): $200–$600/month</li>
<li><strong>Larger businesses</strong> ($10M+ revenue): $600–$2,000+/month</li>
</ul>

<h3>What Drives Your Cyber Insurance Premium?</h3>
<p>Several factors determine how much you'll pay:</p>
<ul>
<li><strong>Annual revenue</strong> — the primary driver, as it determines potential business interruption exposure</li>
<li><strong>Industry sector</strong> — healthcare, financial services and technology pay more due to higher risk and regulatory exposure</li>
<li><strong>Volume and sensitivity of personal data held</strong> — more records = higher notification costs if breached</li>
<li><strong>Security controls in place</strong> — MFA, backups, patching all reduce your premium</li>
<li><strong>Coverage limits selected</strong> — higher limits cost more</li>
<li><strong>Deductible / excess amount</strong> — accepting a higher excess reduces your premium</li>
<li><strong>Claims history</strong> — prior cyber incidents will increase your premium</li>
</ul>

<h3>How to Reduce Your Cyber Insurance Premium</h3>
<p>The single most effective thing most NZ businesses can do to reduce their premium is to implement multi-factor authentication (MFA) across all systems — particularly email (Microsoft 365 / Google Workspace), remote access and accounting software. Insurers now commonly offer premium discounts of 15–25% for businesses with MFA deployed.</p>
<p>Other impactful steps include: maintaining and testing regular offsite backups, keeping all software and operating systems patched and up to date, running security awareness training for staff, and having a documented incident response plan.</p>

<h3>Is Cyber Insurance Worth It?</h3>
<p>The average data breach costs an NZ business $173,000. With cyber insurance available from $40–$100/month for small businesses, the premium pays for itself many times over in the event of a claim. Even if you never make a claim, most policies include access to 24/7 cyber incident response resources and legal helplines that have ongoing value.</p>

<h3>Getting the Right Quote</h3>
<p>Because cyber insurance is a specialist product and premiums vary significantly between insurers for the same risk, it pays to get multiple quotes. CyberCover's licensed brokers compare policies from Chubb, AIG, Zurich, Delta Insurance, QBE and other NZ-active underwriters to find the right fit at the best price for your business.</p>
    `,
  },
  {
    slug: 'small-business-cyber-insurance-nz-why-covered',
    title: 'Only 6% of NZ Small Businesses Have Cyber Insurance — Here\'s Why That Needs to Change',
    excerpt: 'Despite 43% of NZ small businesses being targeted by cybercrime, only 6% have cyber insurance. We explore the protection gap — and what it costs when you\'re uninsured.',
    author: 'CyberCover Team',
    date: '2026-02-25',
    category: 'Small Business',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    content: `
<h2>The NZ Small Business Cyber Protection Gap</h2>
<p>The numbers are stark: 43% of all cybercrimes in New Zealand target small businesses, yet only 6% of small business owners have cyber insurance. This gap represents one of the most significant uninsured risks in the NZ economy.</p>

<h3>Why Small Businesses Are Targeted</h3>
<p>Many small business owners believe cybercriminals only target large corporations. The reality is the opposite — small businesses are attractive targets precisely because they typically have: fewer dedicated IT resources, weaker security controls, less sophisticated staff training, and valuable customer and financial data that can be exploited.</p>
<p>Cybercriminals often use automated tools to scan for vulnerable systems across thousands of businesses simultaneously. Being small provides no protection.</p>

<h3>The Common Misconceptions</h3>
<p>The low uptake of cyber insurance among NZ small businesses is driven by several misconceptions:</p>
<ul>
<li><em>"We're too small to be a target"</em> — False. Size is irrelevant to automated attacks.</li>
<li><em>"We have antivirus so we're protected"</em> — Antivirus alone does not prevent modern attacks.</li>
<li><em>"It's too expensive"</em> — Policies start from around $40/month.</li>
<li><em>"Our IT company handles security"</em> — IT support is prevention; insurance covers what happens when prevention fails.</li>
<li><em>"We could cover the cost ourselves"</em> — The average breach costs $173,000 — most small businesses cannot self-insure this.</li>
</ul>

<h3>What Happens When an Uninsured Business Is Breached</h3>
<p>Without cyber insurance, small businesses face the full cost of a cyber incident alone. This includes: forensic IT investigation ($15,000–$40,000), legal advice on Privacy Act obligations, notification of affected customers, reputational damage and customer loss, and any liability claims from affected parties. Many small NZ businesses have closed or permanently downsized following a significant cyber incident — not because of the attack itself, but because of the uninsured financial burden that followed.</p>

<h3>How Cyber Insurance Protects Small Businesses</h3>
<p>Cyber insurance gives small businesses access to resources they could never afford independently: a 24/7 incident response team, specialist forensic investigators, legal counsel, PR support and claims funding — all coordinated by experienced professionals. It transforms a potentially business-ending event into a manageable, recoverable situation.</p>

<h3>The Cost of Inaction</h3>
<p>At $40–$100/month, cyber insurance for a small NZ business is typically less than many businesses spend on coffee supplies. Weighed against a potential $173,000 average breach cost — or a worst-case scenario that closes the business — the case for cover is overwhelming.</p>
    `,
  },
  {
    slug: 'business-email-compromise-nz-most-common-claim',
    title: 'Business Email Compromise: NZ\'s Most Common Cyber Claim Explained',
    excerpt: 'Business email compromise (BEC) is the number one cyber claim in New Zealand — and it doesn\'t require any technical hacking. Here\'s how it works and how to protect your business.',
    author: 'CyberCover Team',
    date: '2026-02-10',
    category: 'Cyber Threats',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    content: `
<h2>Business Email Compromise: NZ's Most Costly Cyber Threat</h2>
<p>Business email compromise (BEC) — also called social engineering fraud — is consistently the most common and costly cyber claim made by NZ businesses. It accounted for the majority of cyber incidents in 2025 and doesn't require any sophisticated hacking: it relies entirely on human deception.</p>

<h3>How BEC Attacks Work</h3>
<p>A BEC attack typically follows a predictable pattern:</p>
<ul>
<li><strong>Reconnaissance</strong> — attackers research your business, identifying key contacts, suppliers, payment processes and executives through public information, LinkedIn and previous email breaches</li>
<li><strong>Impersonation</strong> — attackers send emails appearing to come from a trusted party: your CEO, a key supplier, your bank, or a lawyer involved in a transaction</li>
<li><strong>Urgency and deception</strong> — the email creates urgency: "urgent payment required", "bank account change effective immediately", "confidential — do not discuss"</li>
<li><strong>Payment diversion</strong> — staff, believing the request is legitimate, transfer funds to a fraudulent account</li>
</ul>

<h3>Common BEC Scenarios in New Zealand</h3>
<p>The most common BEC attacks on NZ businesses include: CEO fraud (impersonating executives to request urgent transfers), supplier invoice fraud (fake invoices with redirected bank accounts), conveyancing fraud (intercepting property purchase payments), and trust account attacks (targeting lawyers and real estate agents).</p>

<h3>Why Human Error is Hard to Prevent</h3>
<p>Sophisticated BEC emails are often near-impossible to distinguish from legitimate communications. They may use a compromised legitimate email account (making them technically genuine), reference real transaction details obtained through research, and be timed to coincide with legitimate business activity. Even trained and vigilant staff can be deceived.</p>

<h3>Does Cyber Insurance Cover BEC?</h3>
<p>This is critical: BEC cover varies significantly between policies. Some policies include social engineering fraud (cyber crime) as standard, while others exclude it or offer it only as an optional add-on. Given BEC is NZ's most common cyber loss, always confirm with your broker that your policy explicitly covers social engineering fraud, and check the sub-limit — some policies cap this cover at a lower amount than the overall policy limit.</p>

<h3>Prevention Tips</h3>
<p>While insurance provides the financial safety net, prevention remains important. Key steps include: implementing a dual-authorisation process for any payment over a set threshold, calling back to a known number to verify any payment change request, training staff to verify urgent payment requests through a separate channel, and implementing email authentication (DMARC, DKIM, SPF) to reduce impersonation.</p>
    `,
  },
];
