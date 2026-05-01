// Client registry — mirrors clients/<slug>/metadata.json from the working repo
// (investmentAnalyst/clients/). When source-of-truth metadata.json files change,
// update this registry to match.

export type ClientTier = 'A' | 'B' | 'C'
export type ClientStage = 'Pre-seed' | 'Pre-seed / Seed' | 'Seed' | 'Bridge' | 'Series A' | 'Series B' | 'Series C+' | 'Other'
export type EngagementStatus = 'Proposal' | 'In Progress' | 'On Hold' | 'Completed' | 'None'
export type EngagementType = 'Fixed Project' | 'Retainer' | 'Hybrid' | 'Discovery' | 'Summit' | 'None'

export type ArtifactCategory = 'deck' | 'deal-memo' | 'model' | 'data-room' | 'market' | 'regulatory' | 'ip' | 'investors' | 'qa' | 'one-pager' | 'exec-summary' | 'misc'

export interface ClientArtifact {
  category: ArtifactCategory
  title: string
  path: string
  format: 'md' | 'xlsx' | 'pdf' | 'pptx' | 'folder' | 'other'
  status: 'Draft' | 'In Review' | 'Final' | 'Sample'
}

export interface ClientExecutive {
  name: string
  title: string
  linkedin?: string | null
  background?: string
}

export interface ClientMetadata {
  slug: string
  name: string
  aliases?: string[]
  tagline: string

  stage: ClientStage
  tier: ClientTier
  source: 'BioSTL' | 'Direct' | 'Referral' | 'Sample / Demo' | 'Other'

  domain: string
  industryTags?: string[]
  geography: string
  founded?: number | null
  teamSize?: number | null

  executives: ClientExecutive[]

  funding: {
    lastRoundType: string | null
    lastRoundDate: string | null
    lastRoundAmount: string | null
    totalRaised: string | null
    investors: string[]
  }

  currentEngagement: {
    type: EngagementType
    status: EngagementStatus
    startDate: string | null
    scope: string
  }

  biostlLinks: {
    companyRecordIds: string[]
    engagementRecordIds: string[]
  }

  ourRole: string
  compliancePosture: string

  links: {
    website?: string | null
    linkedin?: string | null
  }

  tags: string[]
  notes: string
  isSample?: boolean

  artifacts: ClientArtifact[]

  harvest: {
    lastRun: string | null
    companiesCount: number
    engagementsCount: number
    interactionsCount: number
    contractsCount: number
  }
}

const INCISION: ClientMetadata = {
  slug: 'incision',
  name: 'Incision Group B.V.',
  aliases: ['Incision USA Corporation', 'Incision Assist'],
  tagline: 'World-leading innovation and education for perioperative teams via customized digital technology and accredited content.',
  stage: 'Series B',
  tier: 'C',
  source: 'BioSTL',
  domain: 'Surgical training & perioperative software',
  industryTags: ['Health', 'Innovator'],
  geography: 'Amsterdam HQ, US expansion (NY)',
  founded: 2014,
  teamSize: 85,
  executives: [
    { name: 'Ritsaart van Montfrans', title: 'CEO', linkedin: 'https://www.linkedin.com/in/ritsaart-van-montfrans-94bb781b/' },
    { name: 'Theo Wiggers, Prof. MD, PhD', title: 'Founder & Medical Director', linkedin: 'https://www.linkedin.com/in/wiggerst/' },
    { name: 'Marian Scheer, MD, PhD', title: 'Chief Medical Officer', linkedin: 'https://www.linkedin.com/in/marian-scheer-0006b17/' },
    { name: 'Jeff Perales', title: 'Chief Customer Officer', linkedin: 'https://www.linkedin.com/in/jeffperales/' },
    { name: 'Eva Andriessen, MD', title: 'VP US Commercial', linkedin: 'https://www.linkedin.com/in/evaandriessen/' },
  ],
  funding: {
    lastRoundType: 'Series B',
    lastRoundDate: '2023-12',
    lastRoundAmount: '$7M',
    totalRaised: null,
    investors: ['Alafi Capital', 'Dennendonck'],
  },
  currentEngagement: {
    type: 'Retainer',
    status: 'In Progress',
    startDate: '2025-01-06',
    scope: 'BioSTL GIA advisory retainer; 14 hr/month base, advisory team supports US health-system buyer pursuits and partnership development. Plus rev-share agreement (commercial buyer-side) added 2025-06-16.',
  },
  biostlLinks: {
    companyRecordIds: ['recOfKmE0Yx58NeoJ', 'recdauEqNOV78e7Gl', 'recjb3RFj9CuCDeeI'],
    engagementRecordIds: ['reciWmv6VjfAMX1lw', 'reckpzWp5ndgj8pUJ'],
  },
  ourRole: "Through BioSTL Global Advisory Services. Advisory retainer supporting US market entry, health-system buyer pursuits (e.g., University of Missouri Health, SSM, Mass General Brigham), partnership development with cardiology / surgical innovation programs.",
  compliancePosture: 'Engagement is buyer-side commercial advisory + introductions, not capital-raise. Rev-share contract is on commercial buyer-side intros (non-securities). No SEC broker-dealer concerns.',
  links: {
    website: 'https://www.incision.care/',
    linkedin: 'https://www.linkedin.com/company/6382995/',
  },
  tags: ['Advisory'],
  notes: "Active client through Noah's BioSTL channel since June 2024. Tim is one of seven assigned advisors on the active retainer. Latest interactions (March 2026) center on US health-system buyer pursuit (MU Health, SSM). Not a fundraise engagement — Incision raised Series B late 2023 and is in commercial scaling mode. Watch for Series C engagement opportunity down the road.",
  artifacts: [],
  harvest: {
    lastRun: '2026-05-01',
    companiesCount: 3,
    engagementsCount: 2,
    interactionsCount: 13,
    contractsCount: 6,
  },
}

const GT_DIAGNOSTICS: ClientMetadata = {
  slug: 'gt-diagnostics',
  name: 'GT Diagnostics',
  aliases: ['GTDiag', 'HiPAL'],
  tagline: 'Deployable e-platform tools for early dementia detection and monitoring — at-home well-being apps and clinical diagnostic solutions.',
  stage: 'Pre-seed / Seed',
  tier: 'A',
  source: 'BioSTL',
  domain: 'Cognitive assessment / dementia early detection',
  industryTags: ['Health', 'Innovator', 'NEURO360'],
  geography: 'UK HQ',
  founded: null,
  teamSize: null,
  executives: [
    { name: 'Bjoern Schelter', title: 'CEO', linkedin: 'https://uk.linkedin.com/in/bjoern-schelter' },
    { name: 'Linda Sommerlade', title: 'Head of Operations', linkedin: 'https://uk.linkedin.com/in/linda-sommerlade-29ab99130' },
    { name: 'Siyan Dimitrov', title: 'Researcher', linkedin: 'https://uk.linkedin.com/in/siyan-dimitrov' },
  ],
  funding: {
    lastRoundType: null,
    lastRoundDate: null,
    lastRoundAmount: null,
    totalRaised: null,
    investors: [],
  },
  currentEngagement: {
    type: 'Retainer',
    status: 'In Progress',
    startDate: '2026-01-06',
    scope: 'BioSTL GIA advisory retainer (60 hours contracted). NEURO360-tagged. Multi-deck strategy (VOC, Customer, Researcher, Investor variants) developed for HiPAL Pro positioning. Active US market entry support including pitch deck refresh and clinical-research partner targeting.',
  },
  biostlLinks: {
    companyRecordIds: ['rec4ncPLNeMw7iwMi', 'recSSHstOicU9yuDs', 'recderamy3WYdZuXV'],
    engagementRecordIds: ['rec63noaYS8Kpb13e', 'recR2Kro6IFq1ejiY'],
  },
  ourRole: "Through BioSTL GIA. Advisory retainer supporting US market entry and multi-channel positioning. NEURO360 connection: deeply aligned with Eric Gulve's NEURO360 mandate, making GT a natural strategic fit. Working materials in stp/gt/ include a HiPAL Master Deck Structure (10 core slides + appendix taxonomy) and 4 audience-tailored deck variants (VOC, Customer, Researcher, Investor).",
  compliancePosture: 'Standard non-BD advisory posture. Retainer-based, not contingent on raise. No investor solicitation by us; client owns investor relationships. Add explicit BD disclaimer carve-outs to engagement letter when/if they pursue institutional capital.',
  links: {
    website: 'https://www.gtdiag.com/',
    linkedin: 'https://uk.linkedin.com/company/gt-diagnostics',
  },
  tags: ['NEURO360', 'Advisory', 'AI Update'],
  notes: 'Highly strategic client given NEURO360 alignment with Eric. Product (HiPAL Pro) is a 5-7 minute self-administered AI-based cognitive assessment, FDA-listed, designed for primary care / Medicare AWV / senior living / clinical trial pre-screening / biomarker triage channels. Inflection-point thesis (lecanemab/donanemab approvals create demand for early detection at scale) is the central narrative driver. Working repository at stp/gt/ has 7 PPTX files plus the deck strategy and master structure markdown.',
  artifacts: [
    { category: 'deck', title: 'HiPAL Master Deck Structure (10 core + appendix taxonomy)', path: 'stp/gt/HiPAL_Master_Deck_Structure.md', format: 'md', status: 'Final' },
    { category: 'deck', title: 'HiPAL Deck Strategy (4 audience-tailored variants)', path: 'stp/gt/HiPAL_Deck_Strategy.md', format: 'md', status: 'Final' },
    { category: 'deck', title: 'HiPAL Master Deck 2026', path: 'stp/gt/HiPAL_Master_Deck_2026.pptx', format: 'pptx', status: 'Final' },
    { category: 'deck', title: 'HiPAL Investor Deck', path: 'stp/gt/HiPAL_Investor_Deck.pptx', format: 'pptx', status: 'Final' },
    { category: 'deck', title: 'HiPAL Customer Deck', path: 'stp/gt/HiPAL_Customer_Deck.pptx', format: 'pptx', status: 'Final' },
    { category: 'deck', title: 'HiPAL Researcher Deck', path: 'stp/gt/HiPAL_Researcher_Deck.pptx', format: 'pptx', status: 'Final' },
    { category: 'deck', title: 'HiPAL VOC Deck', path: 'stp/gt/HiPAL_VOC_Deck.pptx', format: 'pptx', status: 'Final' },
    { category: 'deck', title: 'HiPAL Combined Deck (most recent: 2026-04-30)', path: 'stp/gt/HiPAL_Combined_Deck 2026-04-30.pptx', format: 'pptx', status: 'Final' },
  ],
  harvest: {
    lastRun: '2026-05-01',
    companiesCount: 3,
    engagementsCount: 2,
    interactionsCount: 4,
    contractsCount: 2,
  },
}

const HEALTHCO: ClientMetadata = {
  slug: 'healthco',
  name: 'HealthCo',
  aliases: ['EchoPilot'],
  tagline: 'AI-augmented echocardiography. EchoPilot detects cardiac amyloidosis from standard echos and auto-measures strain and ejection fraction.',
  stage: 'Series A',
  tier: 'B',
  source: 'Sample / Demo',
  domain: 'Cardiac AI imaging (SaMD)',
  industryTags: ['Health', 'Innovator'],
  geography: 'Boston, MA',
  founded: 2021,
  teamSize: 22,
  executives: [
    { name: 'Dr. Maya Chen', title: 'CEO', linkedin: null, background: 'MD/PhD; formerly cardiology imaging research at MGH' },
    { name: 'Dr. Raj Iyer', title: 'CTO', linkedin: null, background: 'ML PhD MIT; prior Hinge Health imaging' },
    { name: 'Sarah Whittaker', title: 'COO', linkedin: null, background: 'Prior Heartflow GTM' },
  ],
  funding: {
    lastRoundType: 'Angel + Grants',
    lastRoundDate: '2023-Q4',
    lastRoundAmount: '$2.5M',
    totalRaised: '$2.5M (plus $1.7M non-dilutive NIH SBIR Phase II + AHA Innovation grants)',
    investors: ['Angel syndicate', 'NIH SBIR Phase II', 'AHA Innovation'],
  },
  currentEngagement: {
    type: 'Hybrid',
    status: 'In Progress',
    startDate: '2025-09-15',
    scope: 'Series A raise readiness and execution. Full preparation engagement: deck, model, pro forma, market and competitive analyses, regulatory pathway, IP overview, data room, investor target list, Q&A bank, diligence support.',
  },
  biostlLinks: {
    companyRecordIds: [],
    engagementRecordIds: [],
  },
  ourRole: 'Full-pipeline advisory engagement (Stages 3-7). Sample client used to illustrate the practice\'s end-to-end deliverable set. Not a real client; HealthCo is a fictional composite designed to exercise the full skill stack.',
  compliancePosture: 'Sample engagement. Demonstrates the standard non-BD advisory posture: hybrid retainer + flat-fee deliverable structure; no success fees; founder owns all investor outreach; we draft, founder signs and sends; counsel runs negotiation.',
  links: {
    website: null,
    linkedin: null,
  },
  tags: ['Sample', 'Demo', 'Cardiac AI'],
  notes: 'This is a sample / fictional client. HealthCo does not exist. The profile is a plausible Series-A cardiac AI imaging company built for the practice\'s draft website to demonstrate what we produce across a full engagement. All sample artifacts use the same profile (510(k)-cleared 2024 ATTR-CM detection, De Novo in progress for strain auto-measurement, $15M Series A at $50M pre-money, 7 named pilot health systems, 18K echos analyzed, JACC publication 2025).',
  isSample: true,
  artifacts: [
    { category: 'deal-memo', title: 'Series A Deal Memo', path: 'investmentAnalyst/clients/healthco/artifacts/deal-memo/deal_memo.md', format: 'md', status: 'Sample' },
    { category: 'deck', title: 'Investor Pitch Deck (markdown source)', path: 'investmentAnalyst/clients/healthco/artifacts/deck/deck.md', format: 'md', status: 'Sample' },
    { category: 'model', title: 'Financial Model (5-year)', path: 'investmentAnalyst/clients/healthco/artifacts/model/financial_model.xlsx', format: 'xlsx', status: 'Sample' },
    { category: 'model', title: 'Pro Forma Cap Table', path: 'investmentAnalyst/clients/healthco/artifacts/model/proforma.xlsx', format: 'xlsx', status: 'Sample' },
    { category: 'model', title: 'Model Assumptions', path: 'investmentAnalyst/clients/healthco/artifacts/model/assumptions.md', format: 'md', status: 'Sample' },
    { category: 'data-room', title: 'Data Room (10-category healthcare taxonomy)', path: 'investmentAnalyst/clients/healthco/artifacts/data-room/', format: 'folder', status: 'Sample' },
  ],
  harvest: {
    lastRun: null,
    companiesCount: 0,
    engagementsCount: 0,
    interactionsCount: 0,
    contractsCount: 0,
  },
}

export const CLIENTS: ClientMetadata[] = [INCISION, GT_DIAGNOSTICS, HEALTHCO]

export function getClient(slug: string): ClientMetadata | undefined {
  return CLIENTS.find((c) => c.slug === slug)
}
