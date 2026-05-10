export interface Insurer {
  name: string;
  slug: string;
  logo: string;
  rating: number;
  specialty: string;
  coverageHighlights: string[];
  limitations: string[];
  bestFor: string;
  badge?: string;
  badgeColor?: string;
}

export const insurers: Insurer[] = [
  {
    name: 'Chubb',
    slug: 'chubb',
    logo: 'https://logo.clearbit.com/chubb.com',
    rating: 4.8,
    specialty: 'Enterprise & Complex Risks',
    coverageHighlights: ['Comprehensive first & third-party cover', 'Global incident response team', '24/7 breach hotline', 'Regulatory defence included', 'Business interruption up to 12 months'],
    limitations: ['Higher premiums for SMBs', 'Rigorous security assessment required'],
    bestFor: 'Large enterprises and complex risk profiles',
    badge: 'Most Comprehensive',
    badgeColor: 'violet',
  },
  {
    name: 'AIG',
    slug: 'aig',
    logo: 'https://logo.clearbit.com/aig.com',
    rating: 4.7,
    specialty: 'Cyber Liability & Forensics',
    coverageHighlights: ['CyberEdge policy — market-leading cover', 'Forensic IT investigation costs', 'Social engineering fraud cover', 'Crisis communications support', 'Privacy breach notification'],
    limitations: ['Complex policy wording', 'May exclude pre-existing vulnerabilities'],
    bestFor: 'Mid-market businesses needing robust liability cover',
    badge: 'Cyber Specialist',
    badgeColor: 'teal',
  },
  {
    name: 'Zurich',
    slug: 'zurich',
    logo: 'https://logo.clearbit.com/zurich.com',
    rating: 4.6,
    specialty: 'SME & Mid-Market',
    coverageHighlights: ['Ransomware extortion cover', 'Business interruption', 'Data restoration costs', 'Third-party liability', 'NZ-based claims support'],
    limitations: ['Social engineering sub-limits apply', 'Some sector exclusions'],
    bestFor: 'Small to medium NZ businesses',
    badge: 'Top Rated NZ',
    badgeColor: 'sky',
  },
  {
    name: 'Delta Insurance',
    slug: 'delta',
    logo: 'https://logo.clearbit.com/deltainsurance.co.nz',
    rating: 4.7,
    specialty: 'NZ Cyber Specialist',
    coverageHighlights: ['NZ-based specialist cyber insurer', 'Tailored SMB policies', 'Rapid claims response', 'CERT NZ aligned processes', 'Flexible coverage limits'],
    limitations: ['Smaller insurer balance sheet', 'Limited global response network'],
    bestFor: 'NZ businesses wanting local specialist expertise',
    badge: 'NZ Specialist',
    badgeColor: 'emerald',
  },
  {
    name: 'QBE',
    slug: 'qbe',
    logo: 'https://logo.clearbit.com/qbe.com',
    rating: 4.5,
    specialty: 'Trade & Professional Services',
    coverageHighlights: ['Competitive premiums', 'Combined cyber + PI options', 'Multimedia liability', 'Network security liability', 'Data breach response costs'],
    limitations: ['Ransomware sub-limits on some tiers', 'Waiting period for BI claims'],
    bestFor: 'Professional services and trade businesses',
  },
  {
    name: 'Berkley Insurance',
    slug: 'berkley',
    logo: 'https://logo.clearbit.com/berkley.com',
    rating: 4.5,
    specialty: 'Technology & Professional',
    coverageHighlights: ['Technology E&O combined cover', 'Cyber extortion & ransomware', 'Data recovery costs', 'Reputational harm cover', 'Regulatory proceedings'],
    limitations: ['Tech sector focus — less suited to retail/hospitality', 'US-based claims management'],
    bestFor: 'Technology companies and professional service firms',
    badge: 'Best Value',
    badgeColor: 'amber',
  },
];
