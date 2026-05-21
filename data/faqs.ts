export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    category: 'Coverage',
    question: 'What does cyber insurance cover in New Zealand?',
    answer: 'Cyber insurance in New Zealand typically covers first-party losses (your own business costs) and third-party liability (claims made against you by others). First-party cover includes: data breach response costs, ransomware extortion payments, business interruption losses, system restoration, crisis communications and legal fees. Third-party cover includes: privacy liability claims from affected customers or employees, network security liability, and regulatory investigation defence under the Privacy Act 2020.',
  },
  {
    category: 'Coverage',
    question: 'Does cyber insurance cover ransomware attacks?',
    answer: 'Yes — most comprehensive cyber insurance policies in NZ include ransomware extortion cover. This typically includes: payment of the ransom (subject to legal guidance), negotiation support from specialist cyber incident responders, data recovery and system restoration costs, and business interruption losses during the recovery period. Some policies have sub-limits on ransomware payments, so it\'s important to check this with your broker to ensure the limit is adequate for your business size.',
  },
  {
    category: 'Coverage',
    question: 'Is data breach response covered?',
    answer: 'Yes. Data breach response is one of the core components of cyber insurance. Cover typically includes: IT forensic investigation to determine the cause and scope, legal advice on notification obligations under the Privacy Act 2020, notification costs to affected individuals, credit monitoring services for affected customers, public relations and crisis communications, and regulatory liaison with the Office of the Privacy Commissioner.',
  },
  {
    category: 'Coverage',
    question: 'Does cyber insurance cover business interruption?',
    answer: 'Yes — most policies include business interruption cover for losses arising from a cyber incident. This covers lost revenue and ongoing fixed costs during the period your systems are unavailable or impaired following a covered cyber attack. Some policies have a waiting period (typically 8–12 hours) before business interruption cover kicks in, and there may be a maximum indemnity period. Your broker will help you select limits appropriate to your business\'s revenue and recovery time.',
  },
  {
    category: 'Coverage',
    question: 'What is business email compromise (BEC) and is it covered?',
    answer: 'Business email compromise (BEC) is a type of cyber fraud where criminals impersonate a trusted party (a supplier, colleague or executive) via email to trick your business into making a fraudulent payment. It is the most common type of cyber claim in New Zealand. Cover varies by policy — some include cyber crime (social engineering fraud) as standard, while others offer it as an optional add-on. Given BEC is NZ\'s most common cyber loss, we strongly recommend ensuring your policy explicitly includes this cover.',
  },
  {
    category: 'Privacy Act',
    question: 'Does the NZ Privacy Act 2020 require businesses to notify breaches?',
    answer: 'Yes. Under the Privacy Act 2020, businesses must notify the Office of the Privacy Commissioner (OPC) and affected individuals when a privacy breach occurs that has caused (or is likely to cause) serious harm. Failure to notify can result in significant penalties. Cyber insurance typically covers the legal advice needed to determine notification obligations, the cost of notifying affected parties, and regulatory investigation defence if the OPC investigates.',
  },
  {
    category: 'Privacy Act',
    question: 'Can my business be fined for a data breach in New Zealand?',
    answer: 'Yes. Under the Privacy Act 2020, the Privacy Commissioner can issue compliance notices and refer cases to the Human Rights Review Tribunal, which can order compensation of up to $350,000 for privacy breaches. Criminal penalties of up to $10,000 apply for certain offences. Regulatory defence cover in cyber insurance policies covers legal costs to defend these proceedings and can cover any resulting fines or penalties (where legally insurable).',
  },
  {
    category: 'Cost',
    question: 'How much does cyber insurance cost in New Zealand?',
    answer: 'Cyber insurance in New Zealand typically costs between $40 and $120 per month for small businesses, and $150–$800+ per month for larger organisations or high-risk sectors like technology or financial services. Premiums depend on: your annual revenue, industry sector, the amount of personal data you hold, your existing security controls (MFA, backups, patching), coverage limits selected, and your claims history. Current market conditions are competitive, making this a good time to arrange cover.',
  },
  {
    category: 'Cost',
    question: 'Is cyber insurance worth it for a small business?',
    answer: 'The average cost of a data breach for a New Zealand business is $173,000 — far exceeding what most small businesses could absorb without insurance. With cyber insurance costing from $40–$100 per month, the protection is significant. Consider that the cost of incident response alone (forensic IT, legal, notification, PR) commonly exceeds $50,000 — before any liability claims or business interruption losses are factored in. For most NZ small businesses, cyber insurance is one of the most cost-effective risk transfers available.',
  },
  {
    category: 'Getting Cover',
    question: 'What do insurers look for when underwriting cyber insurance?',
    answer: 'Cyber insurers assess your risk based on several factors: the type of data you hold and its volume, your revenue and industry sector, whether you use multi-factor authentication (MFA) on all systems, whether you have current backups (and test them), how quickly you patch software and systems, your endpoint protection and email security controls, your incident response plan, and any prior cyber incidents. Implementing basic cyber hygiene can significantly reduce your premiums.',
  },
  {
    category: 'Getting Cover',
    question: 'How do I get a cyber insurance quote in New Zealand?',
    answer: 'CyberCover\'s licensed NZ brokers will assess your business\'s specific cyber risk profile and compare policies from multiple insurers including Chubb, AIG, Zurich, Delta Insurance, QBE and others to find the right cover at the best price. The process takes around 5 minutes to submit your details, and our brokers will typically respond within one business day with tailored options. Use the quote form on this page to get started.',
  },
  {
    category: 'Getting Cover',
    question: 'Do I need cyber insurance if I already have professional indemnity or public liability?',
    answer: 'Yes — these policies do not cover cyber risks. Professional indemnity covers claims arising from professional errors or advice, while public liability covers physical injury and property damage. Neither policy is designed to cover data breaches, ransomware, business interruption from cyber attacks, or Privacy Act liability. Cyber insurance is a distinct and specialist product that fills a gap left by all traditional business insurance policies.',
  },
  {
    category: 'Claims',
    question: 'What should I do if my business suffers a cyber attack?',
    answer: 'If your business suffers a cyber attack: (1) Contact your insurer\'s 24/7 breach hotline immediately — most policies require prompt notification; (2) Do not pay a ransom or take significant action without insurer guidance; (3) Isolate affected systems to prevent spread; (4) Preserve evidence — do not wipe or restore systems before forensic examination; (5) Notify your broker, who will help coordinate the insurer\'s incident response team. Acting quickly reduces both the damage and the claim cost.',
  },
];
