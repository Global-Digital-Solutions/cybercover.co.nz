export interface BusinessType {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  image: string;
  description: string;
  whyNeedCyber: string;
  topRisks: string[];
  coverageNeeds: string[];
  avgPremium: string;
  keyFact: string;
  metaTitle: string;
  metaDescription: string;
  longFormContent: string;
  faqs: { q: string; a: string }[];
}

export const businessTypes: BusinessType[] = [
  {
    slug: 'small-business',
    name: 'Small Businesses',
    shortName: 'Small Business',
    icon: '🏪',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    description: 'Small businesses are prime targets for cybercriminals — often with less security infrastructure but valuable customer data.',
    whyNeedCyber: 'Small businesses account for 43% of all cyber attacks in New Zealand. With customer payment data, employee records and business finances all stored digitally, the impact of a breach can be devastating — and without insurance, most small businesses cannot recover.',
    topRisks: ['Business email compromise (BEC)', 'Ransomware attacks', 'Payment fraud', 'Phishing scams targeting staff', 'Customer data theft'],
    coverageNeeds: ['Data breach response', 'Business interruption', 'Ransomware extortion', 'Third-party liability', 'Notification costs'],
    avgPremium: '$50–$120/month',
    keyFact: 'Only 6% of small NZ businesses have cyber insurance — yet 43% have been targeted.',
    metaTitle: 'Cyber Insurance for Small Businesses NZ | CyberCover',
    metaDescription: 'Protect your small business from cyber attacks. Get tailored cyber insurance quotes from NZ brokers. From $50/month. Free advice from licensed advisors.',
    longFormContent: `
<h2>The Cyber Threat Facing Small NZ Businesses in 2026</h2>
<p>Small businesses in New Zealand are experiencing a surge in targeted cyber attacks. In 2025, cyber incidents reported to CERT NZ rose significantly, with small and medium businesses accounting for the majority of victims. The misconception that cybercriminals only target large corporations is dangerously outdated — automated attack tools allow criminals to probe thousands of small businesses simultaneously, looking for weak passwords, unpatched software and poorly secured remote access.</p>
<p>The average cost of a cyber breach for a small NZ business is $173,000. For most small businesses, that figure is simply unsurvivable without insurance. And yet only 6% of small NZ businesses currently hold cyber insurance cover — one of the lowest uptake rates in the developed world.</p>

<h2>What Makes Small Businesses Attractive Targets</h2>
<p>Contrary to popular belief, small businesses are often more attractive to cybercriminals than large enterprises. Large businesses invest heavily in cybersecurity, employ dedicated IT security teams, and maintain sophisticated monitoring systems. Small businesses, by contrast, typically rely on consumer-grade security, have no dedicated IT security staff, and rarely run penetration testing or security audits.</p>
<p>Small NZ businesses commonly hold more valuable data than their owners realise: customer payment details, employee IRD numbers, supplier banking details, confidential pricing information and years of business correspondence. This data has significant value on dark web marketplaces — and once stolen, it is sold and resold multiple times.</p>

<h2>The Most Common Cyber Attacks on Small NZ Businesses</h2>
<h3>Business Email Compromise (BEC)</h3>
<p>BEC is the single most common and costly cyber claim across NZ businesses of all sizes. In a BEC attack, criminals impersonate your CEO, a key supplier or your bank — sending convincing emails that request urgent payment transfers or changes to banking details. Staff, believing the request to be legitimate, authorise payments to fraudulent accounts. Losses range from a few thousand dollars to hundreds of thousands.</p>
<h3>Ransomware</h3>
<p>Ransomware encrypts all of your business files — documents, accounting records, customer data, emails — and demands payment for the decryption key. For small businesses without proper offsite backups, this can mean permanent data loss. Even with backups, restoration typically takes two to four weeks, during which your business cannot operate normally.</p>
<h3>Phishing and Credential Theft</h3>
<p>Phishing emails trick staff into entering their usernames and passwords on fake login pages. Once attackers have your email or accounting software credentials, they can access years of business data, redirect payments, and impersonate you to your customers and suppliers. Microsoft 365 and Xero accounts are among the most commonly compromised platforms targeting NZ small businesses.</p>

<h2>Privacy Act 2020: Your Legal Obligations</h2>
<p>If your business holds any personal information about customers, employees or suppliers — and virtually every business does — you are subject to the Privacy Act 2020. This legislation requires you to notify the Office of the Privacy Commissioner and affected individuals when a breach occurs that is likely to cause serious harm. Failure to notify is an offence. The notification process itself — legal advice, customer communications, call centre support, credit monitoring — typically costs $20,000–$80,000 for a small business.</p>
<p>Cyber insurance covers all of these notification costs, as well as the legal advice you need to understand and meet your obligations in the immediate aftermath of a breach.</p>

<h2>What Small Business Cyber Insurance Actually Covers</h2>
<p>A well-structured cyber insurance policy for a small NZ business includes several key components. First-party coverage pays for your own business losses: IT forensic investigation, data restoration, business interruption losses, ransomware response, crisis communications and regulatory notification costs. Third-party liability coverage responds to claims made against your business by customers or other parties whose data was compromised in the breach.</p>
<p>Importantly, most policies also include access to a 24/7 cyber incident response hotline — so when something goes wrong at 2am on a Saturday, you have immediate access to specialist response teams rather than trying to manage the situation alone.</p>

<h2>How Much Does Small Business Cyber Insurance Cost?</h2>
<p>For most small NZ businesses, cyber insurance premiums range from $50 to $120 per month — less than most businesses spend on coffee or stationery. Premiums are primarily driven by your annual revenue, the volume and sensitivity of customer data you hold, and the security controls you have in place. Businesses with multi-factor authentication (MFA) on email and accounting software, regular tested backups, and up-to-date software typically pay at the lower end of the range.</p>
<p>Our licensed NZ brokers compare policies from multiple underwriters — including Chubb, AIG, Zurich, Delta Insurance and QBE — to find the right cover at the best available price for your specific business profile.</p>

<h2>Practical Steps to Reduce Your Risk (and Your Premium)</h2>
<p>While cyber insurance provides the financial protection when something goes wrong, there are practical steps every small business can take to reduce their risk. Enable multi-factor authentication on your email, accounting software and any cloud services. Ensure you have regular automated backups that are stored offsite — ideally with a cloud backup service that maintains multiple restore points. Keep all software and operating systems updated with security patches. Train your staff to recognise phishing emails and verify unexpected payment requests through a separate channel. These measures will reduce both your cyber risk and your insurance premium.</p>
    `,
    faqs: [
      { q: 'Do I need cyber insurance if I already have IT support?', a: 'Yes. IT support helps prevent attacks, but cyber insurance pays for what happens when prevention fails — legal fees, notification costs, lost revenue and data recovery. These costs go well beyond what IT support covers.' },
      { q: 'What is the minimum cyber cover a small NZ business should have?', a: 'At minimum, look for a policy covering data breach response (including Privacy Act notification costs), business interruption, ransomware extortion, and business email compromise / social engineering fraud. Check that BEC cover is explicitly included — some policies exclude it or apply low sub-limits.' },
      { q: 'How quickly does cyber insurance respond after an incident?', a: 'Most policies provide immediate access to a 24/7 cyber incident response hotline the moment you suspect an incident. You don\'t need to wait for a formal claim to be lodged — specialist response teams activate immediately to help contain and manage the situation.' },
      { q: 'Will cyber insurance cover a breach caused by staff error?', a: 'Yes. Most cyber insurance policies cover incidents arising from staff error, including clicking on phishing links, mis-sending data to the wrong recipient, and falling for social engineering scams. Intentional wrongdoing by directors is typically excluded, but accidental employee actions are generally covered.' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Medical Practices',
    shortName: 'Healthcare',
    icon: '🏥',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Medical practices hold highly sensitive patient health records — making them one of the most targeted sectors for cybercrime.',
    whyNeedCyber: 'Healthcare is one of the most targeted industries globally. Patient health records are worth up to 10x more than financial data on the dark web. A single breach can violate the Privacy Act, trigger Health Information Privacy Code obligations, and permanently damage patient trust.',
    topRisks: ['Patient record theft', 'Ransomware disrupting clinical systems', 'Health Information Privacy Code breaches', 'Connected medical device vulnerabilities', 'Insider threats'],
    coverageNeeds: ['Patient data breach response', 'Regulatory defence', 'Business interruption', 'Cyber extortion', 'Notification & credit monitoring'],
    avgPremium: '$120–$350/month',
    keyFact: 'Healthcare records sell for up to $250 per record on the dark web — 10x the value of credit card data.',
    metaTitle: 'Cyber Insurance for Healthcare & Medical Practices NZ | CyberCover',
    metaDescription: 'Specialist cyber insurance for NZ medical practices and healthcare providers. Protect patient data and comply with Privacy Act obligations.',
    longFormContent: `
<h2>Why Healthcare is Cybercriminals' Most Valued Target</h2>
<p>Patient health records contain a uniquely rich combination of personal information: full name, date of birth, IRD number, contact details, insurance information, banking details, and detailed health history. This combination makes healthcare records worth up to $250 per record on dark web marketplaces — ten times the value of a stolen credit card number. For a medical practice with 5,000 patients, a full database breach could represent over $1 million in stolen data value.</p>
<p>The consequences extend far beyond the financial: a breach of patient health information can permanently destroy the trust relationship between clinician and patient, trigger regulatory action from the Privacy Commissioner, and result in professional sanctions from regulatory bodies including the Medical Council of New Zealand.</p>

<h2>The Dual Regulatory Framework: Privacy Act and Health Information Privacy Code</h2>
<p>Healthcare providers in New Zealand operate under a dual layer of privacy regulation. The Privacy Act 2020 applies to all personal information held by any organisation, requiring mandatory breach notification when a breach is likely to cause serious harm. Separately, the Health Information Privacy Code 2020 sets specific, more stringent standards for health information — including stricter rules on collection, access, storage and disclosure.</p>
<p>A breach of patient health information will almost always trigger obligations under both frameworks simultaneously. Meeting these obligations requires specialist legal advice, careful drafting of notification communications, and potentially extensive engagement with the Office of the Privacy Commissioner. The cost of managing these regulatory obligations alone can reach $50,000–$150,000 for a mid-sized practice — before any claims from affected patients are considered.</p>

<h2>Ransomware: The Existential Threat to Clinical Operations</h2>
<p>Ransomware attacks on healthcare systems have a dimension unique to this sector: they don't just cost money, they can directly harm patients. When clinical systems are locked by ransomware, appointment booking systems fail, patient records are inaccessible, prescriptions cannot be checked against records, and in some cases diagnostic equipment is affected. Several large-scale ransomware attacks on healthcare providers internationally have required emergency diversion of patients to alternative facilities.</p>
<p>The November 2025 Manage My Health breach in New Zealand — which compromised 120,000 patient records — demonstrated how rapidly healthcare data breaches can become national news stories, triggering immediate regulatory scrutiny and widespread patient concern. Smaller practices are equally vulnerable and must be equally prepared.</p>

<h2>Connected Medical Devices: An Emerging Cyber Risk</h2>
<p>Modern medical practices increasingly rely on internet-connected devices: digital imaging systems, patient monitoring equipment, PACS systems and electronic prescribing tools. Many of these devices run on legacy operating systems that no longer receive security updates, creating vulnerabilities that cannot easily be patched. Attackers who gain access to the network through a connected device can move laterally to reach patient record systems and clinical data.</p>
<p>Cyber insurance for healthcare providers should specifically address coverage for incidents arising from connected medical device vulnerabilities — this is a growing area of claims activity that not all general commercial cyber policies adequately address.</p>

<h2>What Healthcare Cyber Insurance Covers</h2>
<p>A specialist cyber insurance policy for NZ healthcare providers covers: immediate cyber incident response and forensic investigation, patient data breach notification (including legal review and patient communications), Health Information Privacy Code regulatory defence, business interruption losses during system downtime, ransomware extortion response and negotiations, system restoration, and credit monitoring services for affected patients. Some policies also provide access to specialist healthcare cyber response teams with clinical operations experience.</p>

<h2>Cyber Insurance Cost for Medical Practices</h2>
<p>Cyber insurance premiums for NZ medical practices typically range from $120 to $350 per month depending on practice size, the volume of patient records held, and the security controls in place. Practices with electronic health record (EHR) systems that include strong access controls, regular backups, and multi-factor authentication for clinical staff generally qualify for lower premiums. Our specialist brokers understand the healthcare sector and can structure cover that addresses the specific regulatory environment NZ medical practices operate in.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover breaches under the Health Information Privacy Code?', a: 'Yes. Specialist healthcare cyber policies cover regulatory defence costs arising from investigations under both the Privacy Act 2020 and the Health Information Privacy Code 2020, including engagement with the Office of the Privacy Commissioner.' },
      { q: 'Are connected medical devices covered under cyber insurance?', a: 'Coverage for connected medical device incidents varies between policies. When obtaining cover, specifically ask your broker whether cyber incidents originating from or involving medical devices are explicitly included. Some policies require this as an endorsement.' },
      { q: 'What happens if ransomware locks our patient records?', a: 'Your cyber insurance policy activates immediately — providing access to a 24/7 incident response team, specialist ransomware negotiators, system restoration specialists, and business interruption cover for lost revenue during downtime. The goal is to restore clinical operations as rapidly as possible.' },
      { q: 'Do telehealth providers need cyber insurance?', a: 'Telehealth providers face heightened cyber risk due to the volume of sensitive consultations conducted over digital channels. Video consultation recordings, patient portal access and integrated EHR systems all create significant data exposure. Cyber insurance is strongly recommended for all telehealth operations.' },
    ],
  },
  {
    slug: 'legal-firms',
    name: 'Legal Firms & Law Practices',
    shortName: 'Legal',
    icon: '⚖️',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    description: 'Law firms hold highly confidential client data, trust account funds and privileged communications — all valuable targets.',
    whyNeedCyber: 'Legal firms are high-value targets due to client privilege, trust account access, and commercial deal data. A breach of client confidentiality can result in professional indemnity claims, Law Society disciplinary action, and client loss. Trust account fraud via business email compromise is a growing threat.',
    topRisks: ['Trust account fraud (BEC)', 'Client confidential data breach', 'Ransomware locking case management systems', 'Privileged communications theft', 'Law Society regulatory action'],
    coverageNeeds: ['Cyber crime / funds transfer fraud', 'Data breach response', 'Business interruption', 'Third-party liability', 'Regulatory investigation defence'],
    avgPremium: '$150–$400/month',
    keyFact: 'BEC attacks on law firm trust accounts are one of the fastest-growing cyber claims in NZ.',
    metaTitle: 'Cyber Insurance for Law Firms NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ law firms. Protect client data, trust accounts and privileged communications. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Why Law Firms Are Prime Cyber Targets</h2>
<p>Law firms present a uniquely attractive target profile for cybercriminals. They hold client privileged communications, commercially sensitive deal information, trust account funds, and extensive personal data about clients and counterparties. The combination of high-value financial transactions, privileged information and often limited cybersecurity investment makes legal practices among the most frequently targeted professional service firms in New Zealand.</p>
<p>The New Zealand Law Society's rules on trust accounting create particular risk. Law firms routinely hold significant client funds in trust — and trust account fraud via business email compromise is consistently one of the highest-value cyber crime categories affecting NZ legal practices.</p>

<h2>Trust Account Fraud: The Highest-Value Risk</h2>
<p>Trust account BEC attacks follow a sophisticated pattern. Criminals monitor legal firm email communications — often after gaining access to an email account through a phishing attack — waiting for high-value transactions such as property settlements, commercial acquisitions or estate distributions. When a transaction is imminent, they intercept or impersonate communications, substituting fraudulent banking details at the critical moment of payment.</p>
<p>A single successful trust account fraud can result in losses of $200,000 to well over $1 million. The firm may face demands for immediate restitution from affected clients, Law Society disciplinary proceedings, and professional indemnity claims — all simultaneously. Cyber insurance with dedicated social engineering fraud cover is essential protection against this specific risk.</p>

<h2>Privileged Communications: A Unique Exposure</h2>
<p>Stolen legal privileged communications have enormous value beyond their use in fraud. Commercial litigation strategies, settlement positions, deal structures and client vulnerabilities revealed in confidential legal advice can be worth millions to commercial adversaries, competitors or short-sellers. State-sponsored actors targeting NZ commercial law firms for intelligence gathering is an increasing concern, particularly in the context of major infrastructure transactions, resource extraction deals and M&A activity.</p>

<h2>Case Management System Ransomware</h2>
<p>Legal case management systems — Actionstep, LEAP, Practice Manager and similar platforms — contain years of matter files, client correspondence, court documents and billing records. A ransomware attack that encrypts this data can make it impossible to continue any active matters, forcing emergency adjournment applications, triggering limitation period concerns, and exposing the firm to significant professional liability. Restoration typically takes two to four weeks even with good backups in place.</p>

<h2>Privacy Act Obligations for Legal Firms</h2>
<p>Law firms are subject to the Privacy Act 2020 in the same way as any other business. Client personal information — including names, contact details, identity documents, financial information and health records where relevant — must be protected, and breaches that meet the serious harm threshold must be notified to both the Privacy Commissioner and affected individuals. Legal firms also owe additional confidentiality obligations to clients that may expose them to professional liability claims independent of the Privacy Act framework.</p>

<h2>What Legal Firm Cyber Insurance Covers</h2>
<p>Specialist cyber insurance for NZ law firms covers: social engineering fraud and trust account theft (this must be explicitly confirmed), data breach response and Privacy Act notification, business interruption during system outages, professional liability arising from a cyber incident, Law Society regulatory investigation defence, and ransom negotiation and extortion payments. The interaction between cyber insurance and professional indemnity coverage is important — ensure your broker understands how both policies interact to avoid coverage gaps.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover trust account fraud?', a: 'Cover for trust account fraud through business email compromise varies significantly between policies. It must be explicitly confirmed as included — look for "social engineering fraud" or "cyber crime" cover. Check the sub-limit carefully, as this can be lower than the overall policy limit.' },
      { q: 'How does cyber insurance interact with our professional indemnity insurance?', a: 'Cyber and PI policies can overlap in their response to a breach. It\'s important for your broker to review both policies together to identify any gaps or conflicts. Ideally, both policies should be placed with the same broker to ensure coordinated cover.' },
      { q: 'Are client privileged communications covered if stolen?', a: 'Cyber insurance covers the costs associated with responding to a data breach — investigation, notification, regulatory defence and liability claims. The value of stolen privileged information itself is not directly recoverable, but third-party liability cover can respond to client claims arising from the breach.' },
      { q: 'What is the Law Society\'s position on cyber insurance?', a: 'The New Zealand Law Society strongly encourages all legal practices to hold cyber insurance. While it is not currently mandated, the Law Society has highlighted cyber risk as one of the most significant threats to legal practice viability in its risk management guidance.' },
    ],
  },
  {
    slug: 'accounting-finance',
    name: 'Accounting & Finance',
    shortName: 'Accounting',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    description: 'Accounting firms and financial advisors handle sensitive client financial data, tax information and investment details.',
    whyNeedCyber: 'Financial data is among the most valuable information for cybercriminals. Accounting firms face unique exposure from tax portal access, client banking details and investment records. A breach can trigger Privacy Act obligations, FMCA regulatory consequences, and significant client liability.',
    topRisks: ['Client financial data theft', 'Tax portal credential compromise', 'Invoice fraud and BEC', 'Regulatory breaches (FMA/FMCA)', 'Ransomware on practice management systems'],
    coverageNeeds: ['Data breach response', 'Cyber crime cover', 'Regulatory defence', 'Business interruption', 'Third-party liability'],
    avgPremium: '$100–$300/month',
    keyFact: 'Invoice fraud via email compromise costs NZ financial firms millions annually.',
    metaTitle: 'Cyber Insurance for Accounting Firms NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ accountants and financial advisors. Protect client data and comply with Privacy Act and FMCA obligations.',
    longFormContent: `
<h2>Cyber Risk in the Accounting and Finance Sector</h2>
<p>Accounting firms and financial advisors sit at the intersection of two highly attractive targets for cybercriminals: valuable financial data and access to client banking systems. The combination of client tax returns, investment portfolios, banking credentials and sensitive business financial information makes accounting practices particularly valuable targets — both for data theft and for payment diversion fraud.</p>
<p>In 2025, IRD reported a significant increase in tax portal credential theft attacks targeting both accountants and their clients. Compromised accounting firm credentials can be used to access client myIR accounts, redirect tax refunds, and obtain detailed financial information that enables further fraud.</p>

<h2>Tax Portal and Practice Management System Risks</h2>
<p>Accounting practice management systems — including MYOB, Xero Practice Manager, CCH and similar platforms — contain years of client financial records, tax returns, workpapers and correspondence. These systems are accessible remotely, making them particularly vulnerable to credential theft attacks. Criminals who gain access to practice management systems can steal client data, manipulate records, and intercept banking information.</p>
<p>IRD's tax portal is a specific attack vector: phishing emails impersonating IRD are among the most common cyberattack types reported to CERT NZ, and compromised accountant credentials give attackers access to all clients linked to that practice.</p>

<h2>Invoice Fraud and BEC in Financial Services</h2>
<p>Accounting firms regularly handle large client payments — tax obligations, investment contributions, loan settlements and advisory fees. Business email compromise attacks targeting these payment flows are increasingly sophisticated. Criminals monitor email correspondence over extended periods, learning payment patterns and counterparty relationships before striking at a moment when a large, time-sensitive payment is due.</p>

<h2>FMCA and FMA Regulatory Exposure</h2>
<p>Financial advisors operating under the Financial Markets Conduct Act face specific regulatory obligations around client data protection. A cyber breach that exposes client investment records could trigger FMA scrutiny, licence conditions reviews, and potentially enforcement action. Cyber insurance that includes regulatory investigation defence is essential for all FMCA-licensed entities.</p>

<h2>What Accounting Firm Cyber Cover Includes</h2>
<p>A comprehensive policy for NZ accounting and financial advisory firms includes: client data breach response, Privacy Act notification costs, social engineering fraud cover (BEC and invoice fraud), practice management system ransomware response, FMA/FMCA regulatory investigation defence, business interruption during system outages, and third-party liability for client claims arising from a breach.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover tax portal credential theft?', a: 'Yes. If a criminal uses stolen credentials to access your practice management system or IRD portal and causes financial loss to you or your clients, cyber insurance responds — covering investigation costs, client notification, and in some cases the financial losses directly through cyber crime cover.' },
      { q: 'Are financial advisors required to hold cyber insurance under FMCA?', a: 'Cyber insurance is not currently mandated under FMCA, but the FMA expects all licensed entities to have appropriate risk management frameworks in place. Cyber insurance is widely regarded as an essential component of those frameworks.' },
      { q: 'What cyber risks are specific to Xero and MYOB users?', a: 'Cloud accounting platforms are frequently targeted via credential phishing. Attackers impersonate the platform provider to steal login details, then access client financial data, manipulate payment details and extract banking credentials. Multi-factor authentication is the single most effective prevention measure.' },
      { q: 'How does a breach affect my accounting practice licence?', a: 'A significant breach affecting client data could attract scrutiny from professional bodies including Chartered Accountants Australia and New Zealand (CA ANZ) and the FMA. Cyber insurance covers the cost of regulatory investigation defence, helping you respond professionally and promptly.' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & eCommerce',
    shortName: 'Retail',
    icon: '🛒',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    description: 'Retail businesses and online stores process payment card data, customer accounts and purchase histories at scale.',
    whyNeedCyber: 'Retail and eCommerce businesses process thousands of payment transactions and hold large databases of customer data. PCI-DSS obligations, Privacy Act compliance and reputational risk make cyber insurance essential. Website skimming attacks and point-of-sale breaches are common vectors.',
    topRisks: ['Payment card data theft', 'Website skimming attacks', 'Customer database breach', 'DDoS attacks disrupting sales', 'Supply chain / third-party breaches'],
    coverageNeeds: ['PCI-DSS liability', 'Customer data breach response', 'Business interruption', 'Website restoration', 'Third-party notification costs'],
    avgPremium: '$80–$250/month',
    keyFact: 'A DDoS attack on a NZ eCommerce site during peak season can cost tens of thousands per day in lost sales.',
    metaTitle: 'Cyber Insurance for Retail & eCommerce NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ retailers and online stores. Cover payment card breaches, website attacks and customer data. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Cyber Threats Facing NZ Retail and eCommerce</h2>
<p>Retail and eCommerce businesses in New Zealand face a broad and growing range of cyber threats. Every transaction processed, every customer account created, and every marketing database maintained represents potential cyber exposure. The volume of customer data held by even a small online retailer — addresses, payment card details, purchase histories, email addresses — makes retail one of the most frequently targeted sectors for data theft.</p>
<p>The stakes are particularly high for eCommerce businesses because a significant breach can result in near-immediate loss of customer trust, resulting in revenue impacts that persist long after the technical incident is resolved. In the interconnected world of online retail, news of a breach spreads rapidly through social media and review platforms.</p>

<h2>Website Skimming: The Hidden Threat</h2>
<p>One of the most insidious threats to eCommerce businesses is website skimming — malicious code injected into checkout pages that captures payment card details as customers enter them. This attack vector, also known as formjacking, is difficult to detect because the website continues to function normally while the criminal simultaneously harvests card data in real time. Skimming attacks have affected thousands of eCommerce sites globally, including many operated by small and medium NZ businesses using popular platforms like WooCommerce and Shopify.</p>
<p>Businesses that suffer skimming attacks face PCI-DSS liability for card brand assessments, costs to identify and remove the malicious code, breach notification obligations to affected customers, and potential liability claims from card holders whose details were stolen.</p>

<h2>DDoS Attacks: Taking Your Store Offline</h2>
<p>Distributed denial of service (DDoS) attacks overwhelm your website with fake traffic, making it inaccessible to genuine customers. For eCommerce businesses, a DDoS attack during peak trading periods — Christmas, Black Friday, or during a major promotional campaign — can result in thousands of dollars per hour in lost sales. Competitors and extortionists sometimes use DDoS attacks strategically to cause maximum business disruption.</p>

<h2>PCI-DSS Compliance and Cyber Insurance</h2>
<p>Any business that processes, stores or transmits payment card data must comply with the Payment Card Industry Data Security Standard (PCI-DSS). A breach that exposes card data triggers a mandatory PCI forensic investigation, potential card brand fines and assessments, and the cost of card replacement for affected customers. Cyber insurance specifically addresses PCI-DSS liability, covering these fines and assessment costs where they are insurable.</p>

<h2>Point-of-Sale System Attacks</h2>
<p>Physical retail businesses face additional threats from point-of-sale (POS) system compromises. Malware installed on EFTPOS terminals can capture card data in real time across multiple locations simultaneously. NZ Police and CERT NZ have reported increasing incidents of POS malware, particularly targeting hospitality and retail businesses that use networked EFTPOS systems.</p>

<h2>Retail Cyber Insurance Coverage</h2>
<p>A comprehensive retail cyber insurance policy covers: customer data breach response and notification, PCI-DSS liability and card brand fines, business interruption losses during website downtime, DDoS attack response, website restoration and code forensics, third-party claims from customers, and supply chain or third-party platform breach costs. Given the interconnected nature of retail systems — payment processors, fulfilment platforms, marketing tools — ensuring your policy addresses third-party and supply chain risk is particularly important.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover PCI-DSS fines after a card breach?', a: 'Yes, many cyber insurance policies include PCI-DSS liability cover, which responds to card brand fines and assessment costs following a payment card breach. Confirm this is explicitly included when comparing policies — it is a standard inclusion in specialist retail cyber policies.' },
      { q: 'Am I covered for a breach of my eCommerce platform (e.g., Shopify or WooCommerce)?', a: 'If a breach occurs through your eCommerce platform — whether through a vulnerability in your theme, a plugin, or a credentials attack — your cyber insurance will typically respond to the resulting breach costs. Coverage for losses caused by the platform provider\'s own infrastructure failure may require separate coverage.' },
      { q: 'Does cyber insurance cover lost sales during a DDoS attack?', a: 'Yes. Business interruption cover within a cyber insurance policy compensates for revenue lost during a covered cyber event, including DDoS attacks that make your website inaccessible to customers. Most policies have a waiting period (often 8 hours) before business interruption cover activates.' },
      { q: 'What should I do immediately if I suspect my site has been skimmed?', a: 'Immediately engage your cyber insurance incident response team — available 24/7. They will coordinate forensic investigation, assist with removing malicious code, advise on breach notification obligations, and manage PCI-DSS liability. Do not attempt to investigate alone, as this can compromise forensic evidence.' },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    shortName: 'Hospitality',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    description: 'Hotels, restaurants and tourism operators store guest data, payment details and online booking systems.',
    whyNeedCyber: 'The hospitality sector experienced a significant rise in cyber incidents in 2025. Guest PII, loyalty programme data and payment systems are all high-value targets. Booking platform integrations and third-party payment processors also introduce supply chain risk.',
    topRisks: ['Guest data and credit card theft', 'Booking system ransomware', 'EFTPOS / POS system compromise', 'Online review fraud', 'Third-party booking platform breaches'],
    coverageNeeds: ['Customer data breach', 'PCI-DSS liability', 'Business interruption', 'Ransomware extortion', 'Reputation management costs'],
    avgPremium: '$60–$180/month',
    keyFact: 'Hotels and restaurants saw a 35% increase in cyber claims in 2025 — driven by POS system attacks.',
    metaTitle: 'Cyber Insurance for Hospitality & Tourism NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ hotels, restaurants and tourism operators. Protect guest data and booking systems. Free quotes from licensed brokers.',
    longFormContent: `
<h2>Hospitality: A Growing Target for Cybercriminals</h2>
<p>The hospitality and tourism sector has seen a significant increase in cyber attacks over the past two years, driven by the combination of high volumes of guest payment data, third-party platform integrations and often under-resourced IT security. Hotels, motels, restaurants, cafes, tour operators and activity providers all hold valuable data — and many operate with legacy point-of-sale systems or booking platforms that have not been updated to current security standards.</p>
<p>For NZ's tourism-dependent economy, cyber attacks on hospitality businesses carry particular reputational and economic significance. A breach that exposes international visitor data can attract overseas media attention and damage the New Zealand tourism brand.</p>

<h2>Point-of-Sale System Vulnerabilities</h2>
<p>Most hospitality businesses process significant volumes of payment card transactions, often across multiple terminals simultaneously. POS system malware — malicious software installed by attackers who gain network access — can silently harvest card data from every transaction processed. These attacks are difficult to detect in real time, and a business may process tens of thousands of fraudulent card captures before the breach is identified, often by card brands rather than the business itself.</p>

<h2>Booking System and Online Platform Risks</h2>
<p>Modern hospitality businesses rely on cloud-based property management systems, online booking platforms and channel managers that integrate with global distribution systems. These integrations create a complex web of data sharing and third-party access that significantly expands the cyber attack surface. A breach of a third-party booking platform can expose guest data across hundreds of properties simultaneously, and the resulting notification and liability costs are distributed across all affected businesses.</p>

<h2>Guest Data and Privacy Act Obligations</h2>
<p>Hotels and accommodation providers collect and store significant volumes of guest personal data: passport details for international guests, credit card information, contact details, stay history and sometimes loyalty programme data. Under the Privacy Act 2020, any breach of this information that is likely to cause serious harm must be notified to the Privacy Commissioner and affected guests. For businesses with international guests, this notification process may need to comply with multiple jurisdictions' requirements.</p>

<h2>Business Interruption: When Bookings Go Down</h2>
<p>For a hotel or tourism operator, a ransomware attack that takes down the property management system or booking engine can halt reservations, prevent check-ins, and make room management impossible. The immediate revenue impact of even 48 hours of system downtime during peak season can be devastating. Cyber insurance business interruption cover compensates for this lost revenue during the recovery period.</p>

<h2>Cyber Insurance for Hospitality Businesses</h2>
<p>A cyber insurance policy for NZ hospitality businesses typically includes: guest data breach response and notification, PCI-DSS liability for card data breaches, business interruption cover for system outages, ransomware extortion response, POS system forensic investigation and restoration, third-party liability for claims from affected guests, and reputation management costs. Given the seasonal revenue patterns of tourism businesses, ensure your policy's business interruption calculation appropriately reflects peak-season revenue.</p>
    `,
    faqs: [
      { q: 'Are small cafes and restaurants covered by cyber insurance?', a: 'Yes. Cyber insurance is available for hospitality businesses of all sizes, including sole-trader cafes and small restaurants. Premiums start from around $60/month for smaller businesses processing limited payment volumes.' },
      { q: 'Does cyber insurance cover third-party booking platform breaches?', a: 'Coverage for losses arising from third-party platform breaches varies. Some policies include cover where a third party\'s breach exposes your customers\' data — look for "network security liability" cover that extends to third-party incidents affecting your business.' },
      { q: 'What happens if our EFTPOS system is compromised?', a: 'A compromised EFTPOS system triggers immediate response from your cyber insurer: forensic investigation to identify and remove the malware, notification to affected cardholders, PCI-DSS liability management, and legal advice on your obligations. Your insurer\'s 24/7 hotline should be your first call.' },
      { q: 'Can we get cover during the tourist season when risk is highest?', a: 'Cyber insurance is an annual policy — cover runs continuously, not just during peak season. Ensure your business interruption limits reflect your peak-season revenue to avoid being underinsured during your highest-risk periods.' },
    ],
  },
  {
    slug: 'construction',
    name: 'Construction & Building',
    shortName: 'Construction',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description: 'Construction firms increasingly rely on digital systems for project management, contracts and BIM — creating new cyber exposure.',
    whyNeedCyber: 'The construction sector is increasingly targeted as it digitises operations. Project management software, contractor payment systems and building information models (BIM) all represent valuable targets. Invoice fraud via email compromise is a significant risk when large payments are involved.',
    topRisks: ['Invoice fraud and payment diversion', 'Project data ransomware', 'Subcontractor payment BEC', 'BIM and design data theft', 'Supplier email compromise'],
    coverageNeeds: ['Cyber crime / invoice fraud', 'Data breach response', 'Business interruption', 'Third-party liability', 'Ransomware extortion'],
    avgPremium: '$70–$200/month',
    keyFact: 'Construction is among the top 5 most targeted industries in NZ for business email compromise fraud.',
    metaTitle: 'Cyber Insurance for Construction Companies NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ construction and building companies. Cover invoice fraud, ransomware and project data breaches. Free broker quotes.',
    longFormContent: `
<h2>Why Construction is a Top BEC Target</h2>
<p>The construction industry in New Zealand has become one of the most targeted sectors for business email compromise fraud. The reason is straightforward: construction projects involve large, time-sensitive payments between multiple parties — principal contractors, subcontractors, suppliers, consultants and clients. These payment flows are complex, often involve new banking relationships, and are conducted under time pressure — all conditions that favour social engineering fraud.</p>
<p>A criminal who gains access to email communications between a contractor and their subcontractors can monitor payment cycles, timing and amounts before intercepting a large progress payment by substituting fraudulent banking details. Single-incident losses of $50,000 to $500,000 are not uncommon in the NZ construction sector.</p>

<h2>Building Information Modelling and Design Data Theft</h2>
<p>The construction sector's adoption of Building Information Modelling (BIM) and digital project management tools has created new forms of valuable intellectual property. Detailed building designs, site data, structural calculations and project specifications represent significant commercial value — and in some cases, national security sensitivity for infrastructure projects. Theft of this data can enable competitors to undercut on future tenders or give state-sponsored actors insight into critical infrastructure vulnerabilities.</p>

<h2>Ransomware Targeting Project Management Systems</h2>
<p>Project management platforms like Procore, Aconex and similar tools store the complete documentation trail for active construction projects: contracts, variations, RFIs, inspection records and programme updates. A ransomware attack encrypting this data can bring entire projects to a halt, preventing site supervisors from accessing approved drawings, delaying inspections, and triggering penalty provisions in contracts. Recovery of encrypted project data — even with backups — typically takes several weeks.</p>

<h2>Subcontractor Supply Chain Risk</h2>
<p>Large construction firms are increasingly targeted through their smaller subcontractors, who often have less sophisticated cybersecurity controls. Criminals compromise a subcontractor's email account and use it to conduct BEC fraud against the principal contractor — the messages appear legitimate because they genuinely originate from the subcontractor's email system.</p>

<h2>Cyber Insurance for Construction</h2>
<p>A cyber insurance policy for NZ construction businesses should specifically address: social engineering fraud and invoice payment diversion, BIM and project data breach response, ransomware affecting project management systems, business interruption during data recovery, third-party liability for subcontractor data exposure, and supply chain breach response. The cyber crime sub-limit is particularly important for construction — ensure it reflects the scale of payments your business typically handles.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover invoice fraud where we paid the wrong account?', a: 'Yes, if your policy includes social engineering fraud or cyber crime cover. This is specifically designed to respond to BEC and invoice fraud. Confirm the sub-limit reflects the scale of your typical project payments — standard limits may be insufficient for large contracts.' },
      { q: 'Are subcontractor companies covered separately?', a: 'Subcontractors need their own cyber insurance. Your policy covers your business\'s losses and liabilities. However, some larger principal contractors are beginning to require subcontractors to hold minimum cyber insurance levels as a condition of engagement.' },
      { q: 'Is design IP theft covered by cyber insurance?', a: 'A data breach that results in theft of your BIM files, architectural drawings or engineering designs is covered under cyber insurance — including forensic investigation, notification obligations if personal data is involved, and third-party liability. Separate IP insurance may be needed for the commercial value of the stolen IP itself.' },
      { q: 'What verification processes can prevent BEC fraud in construction?', a: 'Implement a mandatory callback verification process for any change in banking details — calling a known number for the counterparty, not one provided in the email. Dual authorisation for payments over a threshold is also effective. Cyber insurance provides the financial backstop when these controls fail.' },
    ],
  },
  {
    slug: 'education',
    name: 'Schools & Education',
    shortName: 'Education',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    description: 'Schools, universities and training providers hold sensitive student data, staff records and financial information.',
    whyNeedCyber: 'Educational institutions hold extensive student and staff personal information, making them subject to strict Privacy Act obligations. Online learning platforms, student management systems and payment portals all increase digital attack surface. Ransomware attacks on schools are increasingly common.',
    topRisks: ['Student data breach', 'Ransomware on learning management systems', 'Staff credential theft', 'Online learning platform attacks', 'Financial system fraud'],
    coverageNeeds: ['Student data breach response', 'Regulatory notification', 'Business interruption', 'Ransomware extortion', 'System restoration costs'],
    avgPremium: '$60–$180/month',
    keyFact: 'Schools and universities are frequently targeted due to large student databases and often under-resourced IT security.',
    metaTitle: 'Cyber Insurance for Schools & Education Providers NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ schools, universities and training providers. Protect student data and comply with Privacy Act. Free specialist quotes.',
    longFormContent: `
<h2>The Education Sector's Growing Cyber Risk</h2>
<p>Educational institutions in New Zealand hold extensive personal data about students, parents, staff and alumni — making them attractive targets for data theft. Student management systems contain names, dates of birth, contact details, health information, behavioural records and in some cases immigration and visa information. The combination of large databases, often limited cybersecurity investment, and the involvement of minors' data creates both significant risk and significant regulatory obligation.</p>
<p>Schools, tertiary institutions and private training establishments have all experienced cyber incidents in recent years. Ransomware attacks that lock student management and learning management systems have caused significant disruption to teaching, examinations and administration.</p>

<h2>Student Data Privacy Obligations</h2>
<p>Schools and education providers are subject to the Privacy Act 2020, which includes mandatory breach notification requirements. Where student data that is likely to cause serious harm is exposed — including data about minors — notification obligations are particularly demanding. The Privacy Commissioner's guidance specifically addresses educational institutions, noting the heightened obligations around children's data. Cyber insurance covers the legal advice, notification costs and regulatory engagement required to meet these obligations.</p>

<h2>Ransomware Targeting Learning Management Systems</h2>
<p>Learning management systems (LMS) like Canvas, Moodle and Google Classroom, along with student management systems (SMS), are critical operational infrastructure for schools and tertiary providers. A ransomware attack that encrypts these systems can prevent teachers from accessing lesson plans, students from submitting assessments, and administrators from managing enrolments. During examination periods, system unavailability can have immediate and serious consequences for student outcomes.</p>

<h2>Financial System Fraud</h2>
<p>Educational institutions handle significant financial transactions: school fees, government funding allocations, payroll, and procurement. Business email compromise targeting these payment systems — impersonating Ministry of Education officials, supplier accounts or senior administrators — is an increasing risk. Some attacks have targeted school boards during property transaction periods, when large one-off payments are involved.</p>

<h2>Online Learning Platform Security</h2>
<p>The shift to hybrid and online learning has expanded the attack surface for educational institutions. Students and staff connecting from home networks, personal devices, and public WiFi create additional vulnerabilities. Video conferencing platforms used for virtual learning have been targeted for credential theft and, in some cases, for inappropriate access to student sessions.</p>

<h2>Cyber Insurance for Education Providers</h2>
<p>Cyber insurance for NZ schools and education providers covers: student and staff data breach response, Privacy Act notification and regulatory engagement, learning management system ransomware response, business interruption during system outages, financial fraud cover, and crisis communications support. Some specialist policies also include cover for cyber bullying and social media incidents involving students, which is a growing area of concern for school communities.</p>
    `,
    faqs: [
      { q: 'Are government-funded schools required to hold cyber insurance?', a: 'Cyber insurance is not currently mandated for NZ state schools, though the Ministry of Education includes it in risk management guidance. State-integrated and private schools are strongly encouraged to hold cover. Tertiary institutions and PTEs should assess their obligations with their risk advisors.' },
      { q: 'Does cyber insurance cover ransomware on school IT systems?', a: 'Yes. Ransomware affecting student management systems, learning management systems, email infrastructure and other school IT systems is covered under cyber insurance — including forensic investigation, system restoration, and business interruption losses during recovery.' },
      { q: 'What are a school\'s obligations if student data is breached?', a: 'Schools must notify the Office of the Privacy Commissioner and affected students/parents where a breach is likely to cause serious harm. Where the breach involves data about minors, the Privacy Commissioner applies heightened scrutiny. Cyber insurance covers the legal advice and notification costs required.' },
      { q: 'Can a primary school afford cyber insurance?', a: 'Yes. Cyber insurance for smaller schools starts from around $60/month. Many school boards are surprised to find that the cost is modest relative to the risk — and that the policy includes access to specialist incident response resources that schools could never maintain independently.' },
    ],
  },
  {
    slug: 'nonprofits',
    name: 'Charities & Non-Profits',
    shortName: 'Non-Profits',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    description: 'Charities and non-profits hold donor data, beneficiary records and often operate with limited IT security resources.',
    whyNeedCyber: 'Non-profits are increasingly targeted by cybercriminals who exploit limited IT budgets and trust-based cultures. Donor payment data, beneficiary records and grant information are all at risk. A breach can devastate donor trust and fundraising capacity.',
    topRisks: ['Donor payment data breach', 'Phishing targeting volunteers', 'Donation platform fraud', 'Beneficiary data exposure', 'Ransomware on legacy systems'],
    coverageNeeds: ['Donor data breach response', 'Cyber crime cover', 'Business interruption', 'Third-party liability', 'Notification costs'],
    avgPremium: '$40–$100/month',
    keyFact: 'Non-profits are 3x more likely to fall victim to phishing attacks due to volunteer-heavy environments.',
    metaTitle: 'Cyber Insurance for Charities & Non-Profits NZ | CyberCover',
    metaDescription: 'Affordable cyber insurance for NZ charities and non-profits. Protect donor data and fundraising operations. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Why Non-Profits Are Frequently Targeted</h2>
<p>Charities and non-profit organisations in New Zealand are increasingly targeted by cybercriminals. The combination of valuable donor payment data, limited cybersecurity investment and trust-based organisational cultures creates a uniquely vulnerable profile. Non-profits often rely heavily on volunteers who may have less security awareness training, use personal devices for organisation work, and access systems from unsecured home networks.</p>
<p>Attacks targeting non-profits can be particularly damaging because the organisations operate on tight margins, have no financial reserves to absorb breach costs, and depend entirely on donor trust to sustain their revenue. A public breach can devastate fundraising capacity for years.</p>

<h2>Donor Data and Payment Information</h2>
<p>Most NZ charities collect and store donor personal information — names, contact details, giving history and payment details. Regular giving programmes, where donors provide direct debit or credit card details, represent a particularly sensitive data asset. A breach exposing recurring donor payment details can result in immediate financial losses for donors, Privacy Act notification obligations, and potential claims against the charity.</p>

<h2>Fundraising Platform and Online Donation Risk</h2>
<p>Charities that use online fundraising platforms — including Givealittle, Stripe-integrated donation pages, and third-party crowdfunding tools — connect their operations to third-party digital infrastructure. A breach of a fundraising platform can expose donor data across multiple charities simultaneously. Impersonation fraud — where criminals create fake donation pages mimicking legitimate charities — is also a growing threat that can directly divert donor funds.</p>

<h2>Beneficiary Data: A Sensitive Obligation</h2>
<p>Many charities hold deeply sensitive information about beneficiaries: health conditions, financial circumstances, family situations, immigration status and personal histories. This information, often collected in the context of trust relationships, carries the highest level of Privacy Act protection. A breach exposing beneficiary data can cause real harm to vulnerable individuals — and significant regulatory and reputational consequences for the organisation.</p>

<h2>Grant Management and Operational Risk</h2>
<p>Charities that manage grant funding from government agencies, foundations and community trusts hold sensitive financial and programme information. Business email compromise targeting grant payments — impersonating funders or charity leadership to redirect payments — is an emerging risk for larger non-profit organisations.</p>

<h2>Affordable Cyber Insurance for Non-Profits</h2>
<p>Recognising that non-profits operate with limited resources, several NZ insurers offer competitively priced cyber insurance specifically for charitable organisations. Premiums typically start from $40/month for smaller charities, providing access to the same incident response capabilities as larger commercial organisations. Some policies also include specific cover for social engineering fraud targeting charity leadership — a pattern increasingly used to divert grant funds or donor payments.</p>
    `,
    faqs: [
      { q: 'Can small charities with a tiny budget afford cyber insurance?', a: 'Yes. Cyber insurance for small NZ charities starts from around $40/month. Some insurers offer specific non-profit pricing. Given that the cost of a single breach — even for a small charity — typically runs to tens of thousands of dollars, the premium is modest relative to the risk.' },
      { q: 'Are volunteer workers covered under a charity\'s cyber insurance?', a: 'Yes. Cyber incidents caused by volunteer actions — such as clicking on phishing links or mis-sending data — are covered under the charity\'s cyber policy in the same way as incidents involving paid staff. Volunteers\' personal devices may require separate consideration.' },
      { q: 'Does cyber insurance cover fake donation page impersonation fraud?', a: 'Impersonation of your charity by criminals to divert donations is primarily a reputational and legal issue rather than a direct insurance claim. Cyber insurance covers your response costs — crisis communications, legal advice and notification — rather than the diverted donations themselves.' },
      { q: 'What should we do first if we suspect a breach?', a: 'Call your cyber insurer\'s 24/7 incident response hotline immediately. Do not attempt to investigate alone or delete potentially compromised files. Your insurer will coordinate specialist forensic investigators, legal advisors and communications support from the first moment.' },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    shortName: 'Professional',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    description: 'Consultants, engineers, architects and other professional service firms hold client project data and confidential information.',
    whyNeedCyber: 'Professional service firms handle sensitive client projects, commercial strategies and intellectual property. A breach can expose trade secrets, trigger contractual liability and damage hard-won client relationships. Remote working has significantly expanded the attack surface.',
    topRisks: ['Client data and IP theft', 'Remote access compromise', 'Email account takeover', 'Cloud storage breach', 'Invoice fraud'],
    coverageNeeds: ['Data breach response', 'Cyber crime cover', 'Business interruption', 'Third-party liability', 'Regulatory defence'],
    avgPremium: '$80–$220/month',
    keyFact: 'Remote and hybrid working has tripled the cyber attack surface for professional services firms since 2020.',
    metaTitle: 'Cyber Insurance for Professional Services NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ consultants, engineers and professional service firms. Protect client data and IP. Free quotes from licensed advisors.',
    longFormContent: `
<h2>Cyber Risk in Professional Services</h2>
<p>Professional service firms — consultants, management advisors, architects, engineers, recruiters and specialists of every discipline — share a common cyber risk profile: they hold valuable client intellectual property, commercially sensitive strategic information, and significant personal data about clients and candidates. The shift to hybrid and remote working has dramatically expanded the attack surface, with staff accessing client systems and sensitive files from home networks and personal devices.</p>
<p>The contractual liability exposure for professional service firms is significant. Most client contracts include data protection obligations, and a breach can trigger direct contractual liability claims independent of any formal legal proceedings — accelerating the financial impact of an incident.</p>

<h2>The Remote Working Attack Surface</h2>
<p>The widespread adoption of remote working since 2020 has fundamentally changed the cyber risk landscape for professional service firms. Staff working from home use home WiFi networks with varying security standards, personal devices that may also be used by family members, and virtual private network (VPN) connections that themselves can become attack vectors. The number of endpoints that need to be secured has multiplied, while the ability to monitor and control those endpoints has not kept pace.</p>

<h2>Cloud Storage and Collaboration Tool Risks</h2>
<p>Professional service firms rely heavily on cloud platforms for file sharing and collaboration — OneDrive, SharePoint, Google Workspace, Dropbox and similar services store terabytes of sensitive client materials. Misconfigurations that make these storage locations publicly accessible are one of the most common sources of data exposure. Credential theft attacks targeting Microsoft 365 and Google accounts give attackers immediate access to all files stored on these platforms.</p>

<h2>Client Intellectual Property Theft</h2>
<p>The intellectual property held by professional service firms — strategic plans, proprietary methodologies, market research, technical designs and competitive intelligence — has significant commercial value. This information may be sought by competitors, state-sponsored actors, or criminals who sell it to the highest bidder. IP theft causes harm that extends far beyond the immediate cost of the breach: client relationships can be irreparably damaged when clients learn their sensitive strategies or intellectual property has been exposed.</p>

<h2>Third-Party Liability: When Your Breach Affects Clients</h2>
<p>Many professional service firms have access to client systems — CRM platforms, financial systems, document management tools — as part of their engagement. If a criminal uses compromised credentials from your firm to access a client's systems, your business may be liable for the resulting damage under your contractual obligations. Third-party cyber liability cover responds to these client claims, providing legal defence and settlement funding.</p>

<h2>Cyber Insurance for Professional Service Firms</h2>
<p>A comprehensive cyber policy for professional service firms covers: client data breach response, Privacy Act notification, remote access and cloud platform breach response, business email compromise and invoice fraud, third-party liability for client system breaches, business interruption, and regulatory investigation defence. Given the contractual liability exposure common in professional services, ensure your cyber policy is reviewed alongside your professional indemnity policy to avoid coverage gaps.</p>
    `,
    faqs: [
      { q: 'Do I need cyber insurance if I already have professional indemnity?', a: 'Yes. Professional indemnity covers claims for professional negligence, but it does not cover cyber-specific costs: forensic investigation, breach notification, system restoration, or business interruption. Cyber insurance fills the gap PI doesn\'t cover — and the two policies work together in cyber-related PI claims.' },
      { q: 'What if a breach happens through our access to a client\'s systems?', a: 'Third-party cyber liability cover responds to client claims arising from a breach of their systems through your access credentials or systems. This is distinct from PI cover and specifically addresses the cyber liability arising from your role as a system user.' },
      { q: 'Does remote working affect my cyber insurance premium?', a: 'Yes. Remote work is a risk factor that insurers assess when quoting. Businesses with documented remote working security policies, MFA on all remote access, and device management controls may qualify for lower premiums than those without these controls.' },
      { q: 'Is my client data protected if I store it in OneDrive or Google Drive?', a: 'Cloud platforms themselves have strong security, but your account credentials are the weak point. Compromised Microsoft 365 or Google credentials give attackers full access to your stored files. MFA on these accounts is the single most effective protection. Cyber insurance covers the breach response if credentials are stolen despite these controls.' },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    shortName: 'Manufacturing',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    description: 'Manufacturers face growing cyber risk from connected OT/IT systems, supply chain dependencies and industrial control systems.',
    whyNeedCyber: 'Manufacturing saw one of the largest increases in cyber incidents in 2025. Connected operational technology (OT), SCADA systems and supply chain dependencies create unique vulnerabilities. Ransomware that halts production lines can cost hundreds of thousands per day in lost output.',
    topRisks: ['OT/SCADA ransomware attacks', 'Supply chain compromise', 'IP and design data theft', 'Production shutdown (BI)', 'Supplier invoice fraud'],
    coverageNeeds: ['Business interruption (production)', 'Ransomware extortion', 'OT system restoration', 'IP data breach', 'Third-party liability'],
    avgPremium: '$150–$500/month',
    keyFact: 'A ransomware attack halting a manufacturing line can cost $50,000–$200,000 per day in NZ.',
    metaTitle: 'Cyber Insurance for Manufacturing Companies NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ manufacturers. Cover OT/SCADA attacks, production shutdowns and supply chain breaches. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Manufacturing's Unique Cyber Risk Profile</h2>
<p>Manufacturing businesses in New Zealand face a cyber risk profile that is distinct from other sectors: the convergence of IT (information technology) and OT (operational technology) systems has created attack vectors that can cause physical production shutdowns and equipment damage, not just data theft. As factory floors become increasingly connected — with sensors, SCADA systems, PLCs and networked industrial equipment — the boundary between cyber risk and operational risk has effectively disappeared.</p>

<h2>OT and SCADA System Vulnerabilities</h2>
<p>Operational technology systems — including SCADA (Supervisory Control and Data Acquisition) systems, Programmable Logic Controllers (PLCs) and industrial control systems — were historically isolated from internet-connected networks. The push for operational efficiency and real-time monitoring has changed this: most modern manufacturing facilities now have some level of IT/OT integration that, if poorly secured, can allow ransomware to spread from business IT systems onto the factory floor.</p>
<p>Many NZ manufacturers also continue to operate legacy OT systems running outdated operating systems that no longer receive security updates — creating persistent vulnerabilities that cannot be easily patched without disrupting production.</p>

<h2>Production Shutdown: The Dominant Risk</h2>
<p>For manufacturers, business interruption is the primary cyber risk — exceeding data breach concerns in most cases. A ransomware attack that halts a production line does not just prevent goods from being produced: it triggers contractual penalties for delayed deliveries, damages customer relationships, and creates workforce cost inefficiencies as staff cannot work productively during the shutdown. At $50,000–$200,000 per day, even a 48-hour production halt can represent a significant financial hit that most businesses would struggle to absorb uninsured.</p>

<h2>Supply Chain Compromise</h2>
<p>Manufacturing supply chains create multiple third-party cyber risk vectors. Attackers who cannot penetrate a manufacturer's well-secured systems may instead target smaller, less secure suppliers, using compromised supplier access credentials or systems as a route into the manufacturer's network. This supply chain attack pattern is increasingly common globally and has affected NZ manufacturers connected to international supply chains.</p>

<h2>Proprietary IP and Design Data</h2>
<p>Manufacturing intellectual property — product designs, formulations, production processes and quality control documentation — represents significant competitive advantage that can be worth millions in R&D investment. State-sponsored actors, particularly targeting food technology, materials science and advanced manufacturing, are an increasing concern for NZ manufacturers operating in globally competitive sectors.</p>

<h2>Cyber Insurance for Manufacturing</h2>
<p>A specialist manufacturing cyber policy must specifically address production interruption loss (including OT/SCADA system downtime), not merely IT system business interruption. Confirm that your policy covers: OT system ransomware and restoration, production downtime business interruption, supply chain breach response, IP data breach, invoice fraud and BEC on supplier payments, and third-party product liability arising from a cyber-induced production error. OT coverage is a specialist area — not all general cyber policies include it adequately.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover production downtime caused by ransomware?', a: 'Yes, but confirm the policy specifically covers OT/production system interruption, not just IT system interruption. Some general cyber policies have narrower BI definitions that may not capture all production losses. Specialist manufacturing cyber policies are designed to address this.' },
      { q: 'Are SCADA and industrial control systems covered?', a: 'SCADA and ICS coverage is increasingly included in specialist manufacturing cyber policies, but must be confirmed explicitly. Ask your broker whether the policy covers incidents originating in or affecting OT systems — this is a distinct coverage requirement from standard IT cyber cover.' },
      { q: 'What is the waiting period before business interruption cover activates?', a: 'Most cyber policies include a waiting period (often 8 hours) before BI cover activates. For manufacturing, this is particularly important — check whether the waiting period is appropriate for your production operations and negotiate a shorter period if needed.' },
      { q: 'How does supply chain compromise affect our cyber insurance coverage?', a: 'If a third-party supplier breach leads to a breach of your systems, your own cyber policy generally responds to your costs and liabilities. Losses caused entirely by a third party\'s failure without your systems being compromised may require separate coverage. Discuss supply chain risk specifically with your broker.' },
    ],
  },
  {
    slug: 'technology',
    name: 'Technology Companies',
    shortName: 'Tech',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description: 'Tech companies face unique cyber exposure — both as custodians of client data and as providers of software and services.',
    whyNeedCyber: 'Technology businesses carry the highest cyber risk of any sector. As custodians of client systems and data, a breach can trigger cascading third-party liability. Software vulnerabilities, open source dependencies and cloud misconfigurations all increase exposure. Cyber + Tech E&O combined cover is typically recommended.',
    topRisks: ['Client system breach via your software', 'Cloud infrastructure compromise', 'Source code theft', 'DDoS attacks on services', 'Third-party software dependency attacks'],
    coverageNeeds: ['Tech E&O + cyber combined', 'Third-party cyber liability', 'Data breach response', 'Business interruption', 'IP and code protection'],
    avgPremium: '$200–$800/month',
    keyFact: 'Technology companies are responsible for 30%+ of all downstream cyber incidents — making third-party liability critical.',
    metaTitle: 'Cyber Insurance for Technology Companies NZ | CyberCover',
    metaDescription: 'Specialist cyber insurance for NZ tech companies. Combined Tech E&O and cyber liability cover. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Technology Companies: The Highest-Risk Cyber Profile</h2>
<p>Technology companies face a unique and particularly complex cyber risk profile. Unlike most businesses where cyber risk is primarily about protecting their own data, tech companies also face the risk that their products, platforms or services could be used as the vector through which criminals attack their clients. This downstream liability — sometimes called "technology professional liability" or "Tech E&O" — can result in catastrophic claims when a software vulnerability or service failure affects hundreds or thousands of clients simultaneously.</p>

<h2>Software Vulnerability and Tech E&O</h2>
<p>If a vulnerability in software you develop or distribute allows criminals to breach a client's systems, your business may face significant liability. Tech E&O (Errors and Omissions) cover is specifically designed to respond to these claims — covering your legal defence costs and damages arising from a software or service failure that causes third-party loss. Cyber insurance and Tech E&O are often combined in a single specialist policy for technology companies.</p>

<h2>Open Source Dependency Risk</h2>
<p>Modern software development relies heavily on open source components and third-party libraries. The Log4Shell vulnerability of 2021 demonstrated how a single widely-used open source library can create simultaneous vulnerabilities across millions of applications. NZ tech companies that incorporate open source components into their software products face ongoing exposure from vulnerabilities discovered in those dependencies — even if their own code is perfectly secure.</p>

<h2>Cloud Infrastructure and Misconfiguration</h2>
<p>Cloud misconfigurations — accidentally making storage buckets or databases publicly accessible — are one of the most common sources of data breaches for technology companies. AWS, Azure and Google Cloud environments provide powerful tools, but their complexity means that misconfigurations are easily made and can expose large volumes of client data before the error is detected. Cloud security posture management has become a standard expectation in cyber insurance underwriting for technology companies.</p>

<h2>SaaS Platform and Multi-Tenant Risk</h2>
<p>Software-as-a-Service companies face a particularly concentrated risk: a single security breach of their platform infrastructure can simultaneously affect all of their clients. This multi-tenant risk makes SaaS providers among the highest-risk tech sub-sectors for cyber insurers, and premiums reflect the potential scale of third-party liability claims arising from a platform breach.</p>

<h2>Cyber + Tech E&O Combined Cover</h2>
<p>NZ technology companies should hold a combined cyber + Tech E&O policy that addresses both their own data breach and business interruption losses, and the downstream third-party liability arising from software or service failures. A single integrated policy avoids the coverage disputes that can arise when separate insurers each argue the other's policy should respond first. Our specialist brokers have experience placing combined tech cover for NZ companies of all sizes.</p>
    `,
    faqs: [
      { q: 'What is the difference between cyber insurance and Tech E&O?', a: 'Cyber insurance covers losses from data breaches and network security failures. Tech E&O covers liability arising from failures in the technology products or services you provide to clients. Most NZ tech companies need both — and many specialist policies combine them in a single product.' },
      { q: 'Does cyber insurance cover a vulnerability discovered in our software?', a: 'The cost of fixing a discovered vulnerability and notifying affected users may be covered under some policies. Client claims arising from damage caused by the vulnerability are addressed by Tech E&O cover. Check whether your policy covers notification costs and remediation when a vulnerability is discovered, not just after an exploit occurs.' },
      { q: 'Are open source components we use covered under our policy?', a: 'If a breach occurs through a vulnerability in an open source component incorporated into your software, your cyber and Tech E&O policies will respond to the resulting claims. The fact that the vulnerability was in third-party code does not generally eliminate your liability to affected clients.' },
      { q: 'What cyber controls do underwriters require for tech companies?', a: 'Technology companies typically face more stringent underwriting requirements than other sectors: MFA on all systems is usually mandatory; evidence of secure development practices (SDLC), penetration testing, and cloud security monitoring is expected. Companies with SOC 2 or ISO 27001 certification may qualify for better terms.' },
    ],
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    shortName: 'Property',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Property managers hold tenant data, financial records, lease agreements and payment details across large portfolios.',
    whyNeedCyber: 'Property management companies hold extensive tenant personal information and handle large financial transactions — making them targets for data theft and payment fraud. Rental bond fraud and false tenancy applications are growing threats enabled by compromised systems.',
    topRisks: ['Tenant data breach', 'Rental payment fraud', 'Property management software ransomware', 'Owner financial data theft', 'Email account compromise'],
    coverageNeeds: ['Tenant data breach response', 'Cyber crime cover', 'Business interruption', 'Third-party liability', 'Ransomware extortion'],
    avgPremium: '$70–$180/month',
    keyFact: 'Property managers handle large rent payments — making them prime BEC fraud targets.',
    metaTitle: 'Cyber Insurance for Property Management Companies NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ property managers. Protect tenant data and prevent payment fraud. Free quotes from licensed NZ brokers.',
    longFormContent: `
<h2>Property Management Cyber Risk in New Zealand</h2>
<p>Property management companies in New Zealand handle some of the most sensitive personal and financial transactions in the economy. Tenant files contain identification documents, credit checks, income information, references and rental history. Owner files contain property details, banking information for rent disbursements, insurance records and maintenance histories. The combination of large recurring financial transactions and extensive personal data makes property management businesses particularly attractive targets for cybercriminals.</p>

<h2>Rental Payment Fraud</h2>
<p>The high-value recurring transactions central to property management — rent collection, bond management and owner disbursements — create significant BEC fraud exposure. Criminals who gain access to property management email systems or impersonate the agency can redirect rent payments to fraudulent accounts, submit false bond refund requests to Tenancy Services, and intercept owner disbursements. These frauds can be difficult to detect until multiple payment cycles have passed, by which time losses can be substantial.</p>

<h2>Tenant Data Privacy Obligations</h2>
<p>Tenant personal information is subject to the Privacy Act 2020. Property managers collect extensive personal data during the application process — identification documents, income verification, credit history and references — much of which meets the definition of sensitive information under the Act. A breach of this data creates mandatory notification obligations and potential liability to affected tenants. The volume of tenants managed by most property management companies means that a system breach can affect hundreds of individuals simultaneously.</p>

<h2>Property Management Software Vulnerabilities</h2>
<p>Property management platforms — Palace, Propertyware, Re-Leased and similar systems — hold the complete operational data of the business: tenant files, lease agreements, maintenance records, financial transactions and owner communications. Ransomware that encrypts these systems can make it impossible to manage properties, respond to maintenance requests, or process payments until restoration is complete — a process that can take weeks.</p>

<h2>Tenancy Bond Fraud</h2>
<p>With New Zealand's Tenancy Bond Centre processing bonds electronically, compromised property management credentials can be used to submit fraudulent bond refund requests. This specific fraud vector is increasingly reported in NZ and represents a direct financial loss distinct from broader data breach impacts.</p>

<h2>Cyber Insurance for Property Managers</h2>
<p>A cyber insurance policy for NZ property management businesses covers: tenant and owner data breach response, Privacy Act notification costs, social engineering fraud and payment diversion, property management software ransomware response, business interruption during system outages, and third-party liability for claims from affected tenants or property owners.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover redirected rent payments?', a: 'Yes, if the policy includes social engineering fraud or cyber crime cover. This specifically addresses losses from BEC attacks where payments are redirected to fraudulent accounts. Confirm the sub-limit is appropriate for your typical transaction volumes.' },
      { q: 'Are we liable if a tenant\'s data is stolen from our systems?', a: 'Yes. Under the Privacy Act 2020, you have obligations as a custodian of tenant personal information. A breach can result in Privacy Commissioner action and claims from affected tenants. Cyber insurance covers your response costs and legal defence against tenant claims.' },
      { q: 'Does cyber insurance cover a breach of our property management software?', a: 'Yes. Whether the breach occurs through your own systems or through a vulnerability in the property management platform itself (if it results in exposure of your tenant data), your cyber policy responds to the resulting breach costs, notification obligations and business interruption.' },
      { q: 'What should we do if we suspect our email has been compromised?', a: 'Immediately contact your IT support to secure the account and change credentials across all linked systems. Then call your cyber insurance incident response hotline. Do not use the potentially compromised email system to communicate about the incident — use a separate channel.' },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    shortName: 'Finance',
    icon: '🏦',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    description: 'Financial services firms face strict regulatory obligations and hold highly sensitive client investment and banking data.',
    whyNeedCyber: 'Financial services are a prime target for cybercriminals. FMCA and RBNZ regulatory obligations, client investment data and large fund transfers create significant exposure. The RBNZ requires firms to maintain operational resilience — cyber insurance is a key component of that framework.',
    topRisks: ['Client investment data breach', 'Funds transfer fraud', 'Regulatory breach (FMA/RBNZ)', 'Ransomware on core banking systems', 'Third-party provider compromise'],
    coverageNeeds: ['Cyber crime / funds fraud', 'Data breach response', 'Regulatory defence (FMA)', 'Business interruption', 'Third-party liability'],
    avgPremium: '$200–$1,000/month',
    keyFact: 'The RBNZ now expects all regulated entities to have cyber resilience frameworks — insurance is a key pillar.',
    metaTitle: 'Cyber Insurance for Financial Services NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ financial services firms. Comply with RBNZ and FMA requirements. Expert broker advice. Free quotes.',
    longFormContent: `
<h2>Financial Services Cyber Risk in the RBNZ/FMA Framework</h2>
<p>Financial services firms in New Zealand operate within a rigorous regulatory framework administered by the Reserve Bank of New Zealand (RBNZ) and the Financial Markets Authority (FMA). Both regulators have made explicit statements about their expectations regarding cyber resilience for regulated entities. The RBNZ's operational risk framework and the FMA's conduct obligations both contemplate that regulated firms should have appropriate risk transfer mechanisms in place — and cyber insurance is increasingly viewed as a fundamental component of that framework.</p>

<h2>Client Investment Data: A High-Value Target</h2>
<p>Financial services firms hold comprehensive client financial profiles: investment portfolios, KiwiSaver balances, insurance policies, credit facilities and detailed personal financial information. This data has enormous value for identity theft, targeted fraud and market manipulation. The combination of financial data and the high-trust relationship between financial service providers and their clients means that a breach can trigger immediate withdrawal of client relationships and AUM — compounding the financial impact of the incident itself.</p>

<h2>Funds Transfer Fraud at Scale</h2>
<p>The combination of large fund transfers and complex counterparty networks in financial services creates significant BEC fraud exposure. Criminals who gain access to financial services communication systems — or who successfully impersonate counterparties — can redirect substantial transfers before the fraud is detected. The sophisticated nature of financial services transactions provides more cover for fraudulent payment instructions than in simpler business contexts.</p>

<h2>RBNZ Operational Resilience Requirements</h2>
<p>The RBNZ's operational risk requirements expect registered banks and other regulated entities to maintain robust operational resilience plans that include specific consideration of cyber threats. Supervisory expectations include documented incident response procedures, business continuity planning, and appropriate risk transfer mechanisms. Demonstrating cyber insurance coverage has become part of the standard supervisory conversation for regulated financial services entities.</p>

<h2>Third-Party Provider Risk</h2>
<p>Financial services firms increasingly rely on third-party technology providers — core banking platforms, payment processors, cloud hosting providers and data analytics firms. A breach of one of these providers can simultaneously affect multiple financial services businesses, as demonstrated by several major international incidents. Financial services cyber policies should address supply chain and third-party provider risk explicitly.</p>

<h2>Cyber Insurance for Financial Services</h2>
<p>A specialist financial services cyber policy covers: funds transfer fraud and cyber crime, client investment data breach response, FMA/RBNZ regulatory investigation defence, business interruption, ransomware affecting core banking or portfolio management systems, and third-party liability for client claims. Given the regulatory complexity of financial services, it is important that your cyber insurer and broker have specific financial services expertise — both in policy design and claims management.</p>
    `,
    faqs: [
      { q: 'Does the FMA require financial advisors to hold cyber insurance?', a: 'The FMA does not mandate cyber insurance, but it expects all licensed entities to have appropriate risk management frameworks. Cyber insurance is widely regarded as a necessary component of those frameworks, and its absence would likely attract scrutiny in a supervisory review.' },
      { q: 'What coverage limits do financial services firms typically need?', a: 'Coverage limits for financial services firms typically start at $2M and extend to $20M+ for larger institutions. The appropriate limit depends on AUM, transaction volumes, regulatory obligations and data volume. Our specialist brokers can model appropriate limits for your risk profile.' },
      { q: 'Are cryptocurrency and digital asset businesses covered?', a: 'Coverage for cryptocurrency exchanges and digital asset businesses is available but requires specialist placement. Standard cyber policies may have exclusions for digital asset theft. Specialist insurers offer tailored coverage — discuss your specific business model with our brokers.' },
      { q: 'Does cyber insurance cover FMA enforcement action costs?', a: 'Regulatory investigation defence — including legal costs incurred responding to an FMA investigation arising from a cyber breach — is typically covered under cyber insurance. This is distinct from any fines or penalties, which may or may not be insurable depending on their nature.' },
    ],
  },
  {
    slug: 'trades',
    name: 'Trades & Contractors',
    shortName: 'Trades',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    description: 'Tradespeople and contractors increasingly use digital tools for quoting, invoicing and customer management — creating new cyber exposure.',
    whyNeedCyber: 'Trades businesses are increasingly targeted as they digitise operations with cloud-based quoting, scheduling and payment tools. Invoice fraud is a growing risk when large project payments are involved. Even sole traders face significant Privacy Act obligations when holding customer data.',
    topRisks: ['Invoice fraud and payment diversion', 'Customer data breach', 'Accounting software ransomware', 'Phishing via fake supplier emails', 'Mobile device theft with business data'],
    coverageNeeds: ['Cyber crime cover', 'Customer data breach', 'Business interruption', 'Data restoration', 'Notification costs'],
    avgPremium: '$40–$100/month',
    keyFact: 'Trades businesses using cloud invoicing software are increasingly targeted by fake payment redirect scams.',
    metaTitle: 'Cyber Insurance for Tradespeople & Contractors NZ | CyberCover',
    metaDescription: 'Affordable cyber insurance for NZ tradespeople and contractors. Cover invoice fraud and customer data breaches. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Why Tradespeople Need Cyber Insurance</h2>
<p>Many NZ tradespeople and contractors believe cyber insurance is for "tech companies" or large businesses. The reality is that the digitisation of trades operations — cloud-based quoting and scheduling tools, Xero or MYOB accounting, email and text communication with clients, and mobile apps for job management — has created real cyber exposure for every trades business, regardless of size.</p>
<p>Cyber attacks on trades businesses are typically straightforward and financially motivated: invoice fraud targeting large job payments, credential theft from accounting software, and customer data theft. The relatively low cybersecurity awareness in the trades sector makes it an increasingly attractive target for automated attacks.</p>

<h2>Invoice Fraud: The Primary Threat</h2>
<p>Invoice fraud is the most common and costly cyber attack on NZ trades businesses. In a typical attack, criminals compromise your email account or impersonate your business and send modified invoices to clients with fraudulent banking details substituted. Clients pay the fraudulent invoice believing they are paying you — and by the time the fraud is discovered, the funds have been withdrawn and transferred overseas. Losses can range from a few thousand dollars to tens of thousands for larger project invoices.</p>

<h2>Accounting Software and Xero Attacks</h2>
<p>Cloud accounting platforms are frequently targeted through credential phishing. A convincing fake Xero or MYOB login email tricks a trades business owner into entering their credentials on a fraudulent page. With those credentials, attackers access the accounting system, review outstanding invoices, modify payment details and in some cases directly access linked bank accounts. Even without direct bank access, the account information available in Xero provides extensive intelligence for follow-on fraud attacks.</p>

<h2>Customer Data and Privacy Act Obligations</h2>
<p>Even a small trades business holds customer personal information: names, addresses, phone numbers, email addresses and sometimes financial information from quote and payment records. Under the Privacy Act 2020, this data must be protected and breaches that meet the serious harm threshold must be notified. While the Privacy Act obligations for a sole trader are less complex than for a large business, they still exist — and a breach notification process has real costs.</p>

<h2>Mobile Device Risk</h2>
<p>Many tradespeople conduct their entire business operations from a mobile phone or tablet — using it for quoting, scheduling, client communication and invoicing. If this device is lost or stolen without adequate security controls, the thief potentially has access to all customer data, business communications and accounting records stored on or accessible through it. Device encryption and remote wipe capabilities are essential controls.</p>

<h2>Affordable Cyber Insurance for Tradespeople</h2>
<p>Cyber insurance for sole traders and small trades businesses starts from around $40/month — less than a tank of fuel for most trades vehicles. At this price point, it provides access to professional incident response, legal advice, breach notification support and financial cover for fraud losses that would otherwise be absorbed entirely by the business owner. Our specialist brokers work with trades businesses of all sizes and can find the right cover at the right price.</p>
    `,
    faqs: [
      { q: 'Do I need cyber insurance as a sole trader tradesperson?', a: 'If you hold any customer data, use cloud accounting software, or handle digital payments, cyber insurance is worth considering. Policies start from $40/month and provide financial protection and expert response resources that sole traders could never access independently.' },
      { q: 'What happens if a customer doesn\'t pay because they say they paid the fraudulent invoice?', a: 'If a customer was deceived into paying a fraudulent invoice impersonating your business, the customer still owes you the invoice amount — they paid the wrong party but the debt remains. However, recovering the debt can be complex. Your cyber insurance legal support can assist with the recovery process.' },
      { q: 'Is my Xero or MYOB account covered if it\'s compromised?', a: 'Yes. A breach of your accounting software credentials — whether through phishing or another attack — is covered under cyber insurance. This includes the forensic investigation, any resulting customer data notification obligations, and cyber crime cover for direct financial losses.' },
      { q: 'What\'s the easiest way to protect my trades business from cyber attack?', a: 'The single most effective step is enabling multi-factor authentication (MFA) on your email and accounting software. Combined with cyber insurance from $40/month, you have both prevention and financial protection in place. Call our brokers for a free assessment.' },
    ],
  },
  {
    slug: 'logistics-transport',
    name: 'Logistics & Transport',
    shortName: 'Logistics',
    icon: '🚛',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80',
    description: 'Logistics and transport companies rely on connected systems for fleet management, route planning and customer tracking.',
    whyNeedCyber: 'The logistics sector is highly dependent on connected technology — GPS tracking, fleet management systems and customer portals all create cyber exposure. Ransomware that halts dispatch operations can have immediate and costly consequences for supply chains.',
    topRisks: ['Fleet management system ransomware', 'Customer shipment data breach', 'GPS spoofing attacks', 'Supply chain partner compromise', 'Invoice fraud'],
    coverageNeeds: ['Business interruption', 'Ransomware extortion', 'Customer data breach', 'Third-party liability', 'System restoration'],
    avgPremium: '$80–$250/month',
    keyFact: 'A ransomware attack on a logistics system can halt an entire supply chain within hours.',
    metaTitle: 'Cyber Insurance for Logistics & Transport Companies NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ logistics and transport operators. Cover fleet system attacks and supply chain disruptions. Free broker quotes.',
    longFormContent: `
<h2>Digital Dependency in NZ Logistics and Transport</h2>
<p>Modern logistics and transport operations in New Zealand are heavily dependent on connected digital systems. Fleet management platforms, route optimisation software, warehouse management systems, customer tracking portals and electronic proof-of-delivery tools have replaced paper-based processes — delivering efficiency gains but also creating significant cyber attack surface. When these systems fail due to a cyber attack, operations can halt within hours.</p>

<h2>Ransomware and Operational Disruption</h2>
<p>Ransomware is the dominant cyber threat facing logistics businesses. Unlike data theft attacks, which may not cause immediate operational disruption, ransomware immediately encrypts the digital systems that logistics operations depend on: dispatch systems, driver communication platforms, customer portals and warehouse management tools. Within hours, drivers cannot receive routing instructions, dispatch cannot communicate with fleet, and customers cannot access tracking information. The cascading impact on supply chains can affect dozens of downstream businesses within 24 hours of an attack.</p>

<h2>GPS and Fleet Management Vulnerabilities</h2>
<p>Connected fleet vehicles create additional cyber attack vectors. Telematics systems that transmit GPS location, speed and vehicle health data are increasingly targeted — both for theft intelligence (knowing when high-value loads are in transit) and as potential entry points to broader company networks. GPS spoofing attacks that send false location data to fleet management systems are an emerging threat affecting international logistics operations.</p>

<h2>Customer Shipment Data</h2>
<p>Logistics companies hold detailed records of customer shipments: contents, destinations, collection and delivery addresses, and sometimes consignee personal information. This data is subject to Privacy Act obligations. Manufacturers and retailers often share commercially sensitive supply chain information with logistics providers — including stock levels, seasonal demand patterns and supplier relationships — creating additional confidentiality exposure.</p>

<h2>Supply Chain Interconnection</h2>
<p>NZ logistics businesses typically operate within complex supply chain networks involving customs brokers, freight forwarders, port operators and shipping lines — each with their own digital systems and cyber risk profiles. A breach at one point in this network can create cascading data exposure and operational disruption across all connected parties. Invoice fraud targeting logistics payment flows — particularly for international freight where large payments between unfamiliar counterparties are common — is an increasing risk.</p>

<h2>Cyber Insurance for Logistics and Transport</h2>
<p>A cyber insurance policy for NZ logistics businesses should specifically address: business interruption from dispatch and fleet system outages (including during key trading periods), ransomware extortion and system restoration, customer data breach notification, supply chain breach response, and invoice fraud cover. The business interruption component is particularly important — logistics businesses operate on thin margins and cannot absorb extended system downtime.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover losses when our dispatch system is down?', a: 'Yes. Business interruption cover compensates for revenue losses when a covered cyber event (such as ransomware) causes your dispatch or operational systems to be unavailable. Coverage typically activates after a waiting period of 8 hours and covers losses during the recovery period.' },
      { q: 'Are our subcontractor drivers\' data covered?', a: 'Data held about subcontractor drivers — personal details, vehicle information, pay records — is subject to Privacy Act obligations and covered under your cyber insurance if breached. Your policy covers notification and response costs regardless of whether the data relates to employees or subcontractors.' },
      { q: 'Can we cover losses from GPS or telematics system attacks?', a: 'Incidents originating from GPS or telematics system vulnerabilities are generally covered under cyber insurance, as these are connected networked systems. Confirm with your broker whether your policy explicitly includes connected vehicle and fleet systems.' },
      { q: 'How quickly can a logistics business recover from a ransomware attack?', a: 'Recovery time depends significantly on backup quality and restoration procedures. With good tested backups, restoration can take 3-7 days. Without adequate backups, it can take several weeks. Cyber insurance covers the cost of specialist recovery teams and business interruption losses throughout the recovery period.' },
    ],
  },
  {
    slug: 'media-marketing',
    name: 'Media & Marketing Agencies',
    shortName: 'Media',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    description: 'Marketing agencies and media companies manage client social accounts, campaign data and creative IP on behalf of clients.',
    whyNeedCyber: 'Marketing agencies manage client social media accounts, advertising platforms and customer databases — making them high-value targets. A breach of a client account can result in immediate reputational damage and significant third-party liability. Creative IP theft is also a growing concern.',
    topRisks: ['Client social media account takeover', 'Ad platform fraud and spend theft', 'Client customer data breach', 'Creative IP theft', 'Email account compromise'],
    coverageNeeds: ['Third-party cyber liability', 'Data breach response', 'Cyber crime cover', 'Business interruption', 'Reputational harm costs'],
    avgPremium: '$60–$180/month',
    keyFact: 'Social media account takeovers can cost agencies clients immediately — and expose them to six-figure liability claims.',
    metaTitle: 'Cyber Insurance for Marketing Agencies NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ marketing and media agencies. Protect client accounts and creative IP. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Cyber Risk in Marketing and Media Agencies</h2>
<p>Marketing and media agencies occupy a uniquely exposed position in the cyber risk landscape: they not only hold their own data, but they also have access to — and responsibility for — their clients' digital assets. Social media accounts, advertising platforms, email marketing lists, CRM data and creative archives all sit in agency-managed systems. The breach of any of these assets can result in immediate client loss and significant liability claims.</p>

<h2>Client Social Media Account Takeover</h2>
<p>Social media account takeovers are among the most immediate and visible cyber incidents agencies face. Attackers who steal agency team credentials can access all client social accounts managed through the same platform, publishing inappropriate content, sending fraudulent messages to followers, or locking the agency and client out entirely. The reputational damage to a client's brand can occur within minutes of an account being compromised, and reversing that damage requires intensive crisis communications effort.</p>
<p>Third-party liability exposure from social media account takeovers is significant. Clients may claim for brand damage, lost followers, revenue impact from cancelled campaigns, and emergency PR costs — all of which they may argue arose from the agency's failure to secure access to their accounts.</p>

<h2>Advertising Platform Fraud</h2>
<p>Compromised advertising platform credentials — Google Ads, Meta Ads Manager, LinkedIn Campaign Manager — can be used by attackers to drain client advertising budgets within hours. Fraudulent ad spend in tens of thousands of dollars has been recorded in single incidents. While advertising platforms have some recovery mechanisms, amounts fraudulently spent are rarely fully recovered, and the agency faces both client claims and the operational disruption of managing the recovery.</p>

<h2>Client Customer Data and CRM Access</h2>
<p>Agencies with access to client CRM systems and customer databases hold some of the most valuable marketing data assets in the economy. Customer behavioural data, purchase histories, contact lists and campaign engagement records are highly valuable — both commercially and to cybercriminals. An agency breach that exposes this data creates Privacy Act notification obligations and potential claims from affected individuals via the client.</p>

<h2>Creative IP and Campaign Data</h2>
<p>Unreleased campaign creative, product launch strategies, competitive intelligence gathered for clients, and proprietary marketing methodologies all represent intellectual property with significant commercial value. Theft of unreleased campaign creative can undermine a product launch; disclosure of marketing strategies to competitors can materially harm a client's business. These losses may translate into client liability claims against the agency.</p>

<h2>Cyber Insurance for Marketing Agencies</h2>
<p>Marketing agency cyber insurance must specifically address third-party liability — the claims clients make against the agency for losses arising from a breach of their assets. Standard cyber policies focus primarily on the insured's own losses; agencies need policies that robustly cover downstream client claims. Other essential cover includes: client account takeover response, ad platform fraud losses, client data breach notification, business interruption, and reputational harm costs.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover client claims if we lose control of their social accounts?', a: 'Yes, third-party cyber liability cover responds to client claims arising from a breach of their accounts or data through your systems. This is a critical cover component for agencies — confirm it is explicitly included and that the limit is adequate for your largest client relationship.' },
      { q: 'Are advertising platform fraud losses covered?', a: 'Social engineering fraud cover in a cyber policy can respond to fraudulent ad spend resulting from credential theft. Coverage varies between policies — specifically ask your broker whether ad platform fraud is covered and under which policy section.' },
      { q: 'Does cyber insurance cover reputational damage to our agency brand?', a: 'Crisis communications and reputation management costs are typically covered. Actual brand value damage is very difficult to quantify and is generally not directly covered. Cyber insurance funds the professional response to limit and manage reputational harm rather than compensating for all downstream brand impact.' },
      { q: 'What access controls should agencies use for client accounts?', a: 'Use platform-native multi-account access tools (Meta Business Suite, Google Manager Accounts) rather than shared login credentials. Enable MFA on all platform accounts. Implement a credential vault (password manager) with team-level access controls. These controls reduce both your risk and your cyber insurance premium.' },
    ],
  },
  {
    slug: 'aged-care',
    name: 'Aged Care & Community Services',
    shortName: 'Aged Care',
    icon: '❤️',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    description: 'Aged care providers hold sensitive health and personal data for vulnerable clients, with strict Privacy Act obligations.',
    whyNeedCyber: 'Aged care providers hold some of the most sensitive personal and health information in the economy. They are also subject to both the Privacy Act 2020 and the Health Information Privacy Code. Many operate with legacy IT systems, creating vulnerability to ransomware and data theft attacks.',
    topRisks: ['Resident health and personal data breach', 'Ransomware on care management systems', 'Staff credential theft', 'Third-party vendor compromise', 'Regulatory action (Privacy Commissioner)'],
    coverageNeeds: ['Health data breach response', 'Regulatory defence', 'Business interruption', 'Ransomware extortion', 'Notification costs'],
    avgPremium: '$80–$220/month',
    keyFact: 'Aged care providers face dual obligations under both the Privacy Act 2020 and Health Information Privacy Code.',
    metaTitle: 'Cyber Insurance for Aged Care Providers NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ aged care and community service providers. Protect resident data and comply with Privacy Act obligations.',
    longFormContent: `
<h2>Aged Care Cyber Risk in New Zealand</h2>
<p>Aged care and community service providers in New Zealand hold some of the most sensitive data in the economy: detailed health records, care plans, medication records, financial information, family contact details and in many cases power of attorney documentation for vulnerable residents and clients. The sensitivity of this data, combined with the vulnerability of the individuals it concerns, creates particularly serious obligations and consequences when it is breached.</p>

<h2>Dual Privacy Regulation: Privacy Act and Health Information Privacy Code</h2>
<p>Aged care providers are subject to both the Privacy Act 2020 and the Health Information Privacy Code 2020 — the same dual regulatory framework as hospitals and medical practices. The Code sets more stringent standards for health information than the general Privacy Act, including specific rules on access, storage and disclosure of resident health records. A cyber breach affecting resident health information simultaneously triggers obligations under both frameworks, requiring specialist legal guidance to navigate correctly.</p>
<p>Mandatory breach notification under the Privacy Act applies where a breach is likely to cause serious harm. Given the vulnerability of aged care residents and the sensitivity of their health data, most significant breaches in this sector will meet the serious harm threshold — triggering notification to both the Privacy Commissioner and affected residents and families.</p>

<h2>Legacy IT Systems: A Significant Vulnerability</h2>
<p>Many aged care providers — particularly smaller residential facilities and community service organisations — operate with legacy IT systems that have not been modernised due to budget constraints. These systems may run on outdated operating systems that no longer receive security updates, cannot support modern authentication methods like multi-factor authentication, and have limited logging capability that makes breach detection difficult. This creates persistent vulnerability to ransomware and other attacks that exploit known, unpatched vulnerabilities.</p>

<h2>Care Management System Ransomware</h2>
<p>A ransomware attack on a residential aged care facility's care management system is not merely an operational inconvenience — it directly affects the care of vulnerable residents. Without access to digital care plans, medication records and clinical notes, staff must revert to manual processes that are slower, less reliable and more prone to error. During a ransomware recovery period, the risk of care quality incidents increases materially. This makes business interruption cover in the context of aged care a genuine patient safety issue as well as a financial one.</p>

<h2>Third-Party Vendor and Telehealth Risk</h2>
<p>Aged care providers increasingly use third-party digital health tools: telehealth platforms, remote monitoring devices, electronic medication administration systems and care app platforms. Each of these creates an additional access point to resident data and health records. Third-party vendor breaches can expose resident data across multiple facilities simultaneously, and aged care providers bear notification and response obligations even when the breach originates in a vendor's systems.</p>

<h2>Cyber Insurance for Aged Care</h2>
<p>A specialist cyber policy for NZ aged care providers covers: resident health data breach response, dual Privacy Act and Health Information Privacy Code regulatory engagement and defence, care management system ransomware response, business interruption during system recovery, third-party vendor breach response, and notification costs for resident families. Given the regulatory complexity and the vulnerability of affected individuals, specialist aged care cyber cover is strongly recommended over generic commercial cyber policies.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover both Privacy Act and Health Information Privacy Code obligations?', a: 'Yes. Specialist cyber policies for healthcare and aged care providers cover regulatory defence and engagement costs under both frameworks simultaneously — providing the legal and specialist support needed to navigate dual regulatory obligations.' },
      { q: 'Can aged care providers get cyber insurance despite legacy IT systems?', a: 'Yes, though the risk profile and premium will reflect the legacy IT environment. Insurers may impose specific security conditions or sub-limits. Our brokers work with providers who have legacy systems and can find appropriate coverage while advising on cost-effective risk reduction measures.' },
      { q: 'What happens to residents if care systems go down in a ransomware attack?', a: 'Facilities typically activate emergency manual care protocols during IT outages. Your cyber insurance responds immediately — providing incident response specialists, system restoration experts and business interruption cover for the recovery period. Advance preparation of manual backup processes is strongly recommended.' },
      { q: 'Are community service organisations with vulnerable clients covered?', a: 'Yes. Community service organisations providing services to vulnerable individuals — disability services, mental health support, social services — have similar cyber insurance needs to aged care providers and can obtain cover on comparable terms. Premiums start from around $80/month for smaller organisations.' },
    ],
  },
  {
    slug: 'engineering',
    name: 'Engineering & Consulting',
    shortName: 'Engineering',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    description: 'Engineering firms hold valuable IP, client project data and infrastructure designs that are highly attractive to state-sponsored actors.',
    whyNeedCyber: 'Engineering and consulting firms hold proprietary designs, client infrastructure data and commercially sensitive project information. State-sponsored espionage targeting NZ infrastructure and construction data is an increasing concern, alongside traditional ransomware threats.',
    topRisks: ['IP and design data theft', 'State-sponsored espionage', 'Client project ransomware', 'CAD/BIM system attacks', 'Invoice fraud on large contracts'],
    coverageNeeds: ['IP breach response', 'Business interruption', 'Third-party liability', 'Cyber extortion', 'Data restoration'],
    avgPremium: '$100–$300/month',
    keyFact: 'Engineering firms are increasingly targeted by nation-state actors seeking critical infrastructure data.',
    metaTitle: 'Cyber Insurance for Engineering & Consulting Firms NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ engineering and consulting firms. Protect IP and client project data. Free quotes from specialist brokers.',
    longFormContent: `
<h2>Engineering's Unique Cyber Risk Profile</h2>
<p>Engineering and consulting firms in New Zealand hold a particularly valuable combination of digital assets: proprietary technical methodologies, detailed infrastructure designs, commercially sensitive project data, and in some cases critical national infrastructure information. This combination makes engineering firms attractive to a wider range of threat actors than most businesses face — including not just financially motivated criminals but also state-sponsored actors seeking technical intelligence.</p>

<h2>State-Sponsored Espionage: A Real Threat for NZ Engineers</h2>
<p>The NZ Government Communications Security Bureau (GCSB) has publicly noted the increasing activity of state-sponsored cyber actors targeting New Zealand organisations. Engineering firms involved in infrastructure projects — water, energy, transport, telecommunications — may hold designs and data of genuine strategic interest to foreign intelligence services. While this risk is concentrated in firms working on critical national infrastructure, engineering companies working on projects with international elements should also be aware of espionage risk.</p>
<p>State-sponsored attacks are typically more sophisticated and persistent than financially motivated cybercrime — using advanced persistent threat (APT) techniques to maintain long-term covert access to systems, exfiltrating data slowly over months rather than deploying obvious ransomware.</p>

<h2>CAD and BIM System Vulnerabilities</h2>
<p>Computer-Aided Design (CAD) and Building Information Modelling (BIM) systems store the detailed technical output of engineering work: structural calculations, site surveys, infrastructure designs and 3D models. These files represent enormous investment in professional time and expertise. Ransomware attacks that encrypt CAD/BIM files can make years of project documentation inaccessible, preventing work on active projects and creating liability for project delays.</p>
<p>CAD software is sometimes overlooked in IT security reviews because it is not a conventional business system — but it represents some of the most valuable data in an engineering firm. Ensuring CAD/BIM systems are covered explicitly under your cyber insurance is important.</p>

<h2>Client Project Data and Contractual Liability</h2>
<p>Engineering firms typically hold extensive client project data under confidentiality obligations. A breach that exposes commercially sensitive design information or operational data can result in contractual liability claims from clients — particularly where the exposed information provides competitive advantage to rivals or reveals security vulnerabilities in infrastructure. Third-party liability cover that extends to contractual liability arising from a cyber breach is essential.</p>

<h2>Invoice Fraud on Large Engineering Contracts</h2>
<p>Engineering projects involve large, infrequent payments — progress claims, variation payments and final settlements that can individually reach hundreds of thousands of dollars. Business email compromise attacks targeting these payments — impersonating project managers, clients or subcontractors — are increasingly common. The combination of large payment amounts and complex project payment processes creates significant BEC exposure.</p>

<h2>Cyber Insurance for Engineering Firms</h2>
<p>Engineering cyber insurance should cover: IP and design data breach response, CAD/BIM system ransomware and restoration, third-party contractual liability for project data breaches, invoice fraud and BEC cover (with limits appropriate for your contract values), business interruption during data recovery, and regulatory response costs. The IP protection component deserves particular attention — some general cyber policies do not adequately address technical IP theft in engineering contexts.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover theft of our engineering IP?', a: 'Cyber insurance covers the costs associated with responding to a breach that includes IP theft — investigation, notification, and third-party liability. The commercial value of stolen IP itself (future revenue lost through competitive advantage) is generally not directly covered by cyber insurance but may be addressed through IP-specific insurance.' },
      { q: 'Are CAD and BIM files covered under cyber insurance?', a: 'Yes. CAD, BIM and other engineering design files stored on or accessible from your systems are covered as part of your business data. Ransomware that encrypts these files triggers business interruption cover and system restoration cover. Confirm with your broker that engineering-specific file types are not subject to any exclusions.' },
      { q: 'What should we do if we suspect state-sponsored intrusion?', a: 'Contact your cyber insurance incident response team immediately and also report to CERT NZ and, if critical infrastructure is involved, notify NCSC. State-sponsored incidents require specialist forensic investigation — your cyber insurer will have access to appropriate response resources.' },
      { q: 'Does BEC cover apply to large engineering contract payments?', a: 'Yes, if your policy includes social engineering fraud cover. The sub-limit is critically important — standard sub-limits may be too low for large engineering contract payments. Discuss the scale of your typical project invoices with your broker to ensure appropriate limits.' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate Agencies',
    shortName: 'Real Estate',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Real estate agencies handle buyer and vendor personal data, large property transactions and trust account funds.',
    whyNeedCyber: 'Real estate agencies handle high-value property transactions and trust accounts — making them prime targets for funds diversion fraud. Client personal information, property valuations and transaction data are all valuable targets. REINZ professional standards also require data protection obligations.',
    topRisks: ['Trust account funds diversion (BEC)', 'Buyer and vendor data breach', 'Property transaction fraud', 'CRM system ransomware', 'Email account compromise'],
    coverageNeeds: ['Cyber crime / funds fraud', 'Data breach response', 'Business interruption', 'Third-party liability', 'Regulatory defence'],
    avgPremium: '$80–$200/month',
    keyFact: 'Property transaction fraud via BEC is one of the highest-value cyber crimes in NZ — single losses can exceed $200,000.',
    metaTitle: 'Cyber Insurance for Real Estate Agencies NZ | CyberCover',
    metaDescription: 'Cyber insurance for NZ real estate agencies. Protect trust accounts and client data. Cover property transaction fraud. Free quotes.',
    longFormContent: `
<h2>Real Estate and Cyber Risk: A High-Stakes Combination</h2>
<p>Real estate agencies in New Zealand operate at the intersection of high-value financial transactions and sensitive personal data — creating one of the most attractive cyber risk profiles for financially motivated criminals. Property transactions involve some of the largest individual payments ordinary New Zealanders ever make, and the process of managing those transactions creates multiple opportunities for business email compromise attacks to intercept and divert funds.</p>
<p>The Real Estate Authority (REA) — formerly REAA — requires real estate agents to maintain appropriate professional standards, including data protection obligations. A cyber breach that exposes client data or results in financial losses can attract REA disciplinary action on top of direct financial consequences.</p>

<h2>Property Transaction Fraud: The Dominant Risk</h2>
<p>Property settlement fraud is consistently one of the highest-value cyber crime categories in New Zealand. In a typical attack, criminals monitor email communications between real estate agents, vendors, purchasers and lawyers during the settlement process — waiting for the moment when settlement funds are due to be transferred. By impersonating any of the parties and substituting fraudulent banking details, they can divert settlement payments of $300,000 to $2 million+ to overseas accounts that are immediately emptied.</p>
<p>These attacks are sophisticated because they exploit the legitimate complexity of property transactions — where multiple parties are exchanging emails with different banking details for deposits, balances and adjustments — to disguise fraudulent payment instructions among legitimate ones.</p>

<h2>Trust Account Security</h2>
<p>Real estate agencies that hold client funds in trust accounts face particularly strict obligations under the Real Estate Agents Act 2008. The REA conducts regular trust account audits, and any unexplained shortfall — including losses from cyber-enabled theft — must be immediately reported and remedied. Trust account fraud via BEC is one of the fastest-growing cyber crime categories affecting NZ real estate agencies.</p>

<h2>Buyer and Vendor Data Privacy</h2>
<p>Real estate agencies collect extensive personal data throughout the transaction process: identification documents, financial pre-approval details, KiwiSaver access documentation, property ownership information and in some cases sensitive family and estate circumstances. This data is subject to Privacy Act 2020 obligations. A breach affecting buyer or vendor data can result in notification obligations and significant reputational damage at a time when client trust is fundamental to business development.</p>

<h2>CRM and Agency Management System Ransomware</h2>
<p>Real estate agency management systems store property listings, buyer and vendor details, offer histories, settlement schedules and commission records. Ransomware that encrypts these systems can halt active settlements, prevent listing updates and disrupt agency operations. Recovery typically takes one to two weeks, during which active transactions may need to be managed through emergency paper-based processes.</p>

<h2>Cyber Insurance for Real Estate Agencies</h2>
<p>A cyber insurance policy for NZ real estate agencies must specifically include: social engineering fraud with limits appropriate for settlement transaction values, trust account fraud response, buyer and vendor data breach notification, REA regulatory investigation defence, CRM system ransomware response, and business interruption. The social engineering fraud sub-limit is particularly critical — standard limits of $100,000 may be inadequate for settlement-value losses in NZ's current property market.</p>
    `,
    faqs: [
      { q: 'Does cyber insurance cover property settlement fraud?', a: 'Yes, if the policy includes social engineering fraud or cyber crime cover. This is the most important coverage component for real estate agencies. Critically, confirm the sub-limit — many standard policies cap social engineering cover at $100,000, which may be inadequate for property settlement transaction values in NZ.' },
      { q: 'Are we covered if a vendor\'s settlement funds are diverted through our systems?', a: 'If a criminal uses your email system or impersonates your agency to divert client settlement funds, your cyber insurance responds — covering investigation costs, legal defence against client claims, and the cyber crime loss itself (up to your policy limit). Separate REA-mandated professional cover may also respond.' },
      { q: 'What does REA expect of agencies regarding cybersecurity?', a: 'The REA does not currently mandate specific cybersecurity standards or insurance, but it expects agencies to maintain appropriate professional practices including protecting client data. REA disciplinary proceedings arising from a cyber breach are covered under cyber insurance regulatory defence provisions.' },
      { q: 'How can agencies prevent property settlement fraud?', a: 'Implement a mandatory telephone verification process for any banking detail changes during settlement — calling a verified number, not one from an email. Use email signatures and DMARC/DKIM authentication to reduce impersonation. Train staff to treat any change in payment instructions as suspicious. Cyber insurance provides the financial backstop when these controls fail.' },
    ],
  },
];
