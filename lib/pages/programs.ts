import type { C3Row } from '@/components/blocks/programs/C3AtAGlance';
import type { ApplyHighlight, ApplyStep } from '@/components/blocks/programs/C4ApplySteps';
import type { FaqItem } from '@/components/blocks/programs/C11Faqs';
import type { BeneficiaryGroup } from '@/components/blocks/programs/S3PastBeneficiaries';
import type { HeroCell } from '@/components/blocks/programs/S4HeroSummary';
import type { ApplicationPath } from '@/components/blocks/programs/S5ApplicationPaths';
import type { WhichRoundRow } from '@/components/blocks/programs/S6WhichRound';
import type { FigItem } from '@/components/wireframe/Figs';

export type SupportRecordConfig = {
  label: string;
  body?: string;
  items?: string[];
  amount?: string;
  amt?: boolean;
};

export type TimelineStageConfig = {
  n: string;
  d: string;
};

export type DownloadFileConfig = {
  n: string;
  t: string;
};

export type ProgramBlockConfig =
  | { type: 'C3flat'; rows: C3Row[] }
  | {
      type: 'C4';
      steps: ApplyStep[];
      documents?: string[];
      note?: string;
      highlight?: ApplyHighlight;
      withRepeat?: boolean;
    }
  | { type: 'C5'; records: SupportRecordConfig[]; heading?: string }
  | {
      type: 'C6';
      label: string;
      text?: string | string[];
      section?: 'overview' | 'application';
    }
  | { type: 'C8'; text?: string | string[]; items?: string[] }
  | {
      type: 'C9';
      label: string;
      text?: string | string[];
      process?: string[];
      criteria?: string[];
    }
  | { type: 'C10'; lines?: number; items?: string[] }
  | { type: 'S1'; stages: TimelineStageConfig[]; lead?: string }
  | { type: 'S2'; files: DownloadFileConfig[] }
  | {
      type: 'S3';
      groups: BeneficiaryGroup[];
      label?: string;
      offered?: boolean;
      offeredOnly?: boolean;
    }
  | { type: 'S5'; paths: ApplicationPath[]; core?: string | string[] }
  | { type: 'S6'; lead?: string; rows?: WhichRoundRow[]; notes?: string[] };

export type ProgramConfig = {
  hero?: HeroCell[];
  overview?: { text?: string | string[]; items?: string[] };
  figs?: FigItem[] | null;
  dest: string;
  rolling?: boolean;
  contact?: string;
  faqs?: FaqItem[];
  blocks: ProgramBlockConfig[];
};

export const PRODUCTION_AWARDS: ProgramConfig = {
  overview: {
    text: [
      'Launched in 2004, the Production Awards support artists and writers of Arab origin who are under 35, wherever they live, to produce a new work in one of five disciplines: literature, visual arts, music and sound art, performing arts, and cinema.',
      'Up to 25 grants are awarded each year, five per discipline. Around 400 projects have been supported since the programme began.',
    ],
  },
  figs: [
    { label: 'grants awarded since 2004', value: '~400' },
    { label: 'countries' },
    { label: 'grants per year', value: '25' },
  ],
  dest: 'apply.mawred.org — the applications platform',
  contact: 'awards@mawred.org',
  blocks: [
    {
      type: 'C3flat',
      rows: [
        {
          label: 'Eligibility',
          value: 'Artists and writers of Arab origin, under 35',
        },
        {
          label: 'Disciplines covered',
          value: 'Literature · Visual arts · Music & sound art · Performing arts · Cinema',
        },
        { label: 'Grant period', value: '18 months from signing' },
      ],
    },
    {
      type: 'S1',
      stages: [
        { n: 'Open call', d: '17 August 2026' },
        { n: 'Deadline', d: '19 October 2026, 16:00 Beirut' },
        { n: 'Results', d: 'End of March 2027' },
      ],
    },
    {
      type: 'C5',
      heading: 'Available grants',
      records: [
        {
          label: 'Performing Arts',
          body: 'Development and production of dance, theatre and multidisciplinary work, and other performing-arts forms.',
          amount: 'Up to €8,500',
        },
        {
          label: 'Visual Arts',
          body: 'Artworks, exhibitions, installations, art books and comics — sculpture, engraving, photography, light and video art, VR, immersive and interactive work.',
          amount: 'Up to €8,500',
        },
        {
          label: 'Literature',
          body: 'Novels, memoirs, biographies, graphic novels, short stories, poetry collections and theatre texts.',
          amount: 'Up to €6,500',
        },
        {
          label: 'Music & Sound Art',
          body: 'Albums, experimental music and sound projects, sound installations, live concerts and music-related visuals.',
          amount: 'Up to €8,500',
        },
        {
          label: 'Cinema',
          body: 'Production and post-production of short, medium-length and feature films — fiction, documentary, animation and experimental.',
          amount: 'Up to €13,000',
        },
      ],
    },
    {
      type: 'C4',
      steps: [
        {
          label: 'Register on the applications platform',
          detail: 'Or log in, if you already have an account.',
        },
        {
          label: 'Activate your account',
          detail: 'An activation link is sent to the address you registered.',
        },
        {
          label: 'Select the programme and fill in the form',
          detail: 'The application is in Arabic, except for the fields marked English.',
        },
        {
          label: 'Save, return, and submit before the deadline',
          detail: 'A draft can be saved and reopened; incomplete applications are not reviewed.',
        },
      ],
      note: 'Read the application guidelines in full before you start.',
      withRepeat: true,
    },
    {
      type: 'C8',
      text: "The grant funds the production of a new work. Applications outside that scope, or that don't meet the application terms, are not reviewed.",
      items: [
        'No reproduction of a project that has already been produced or presented.',
        'Websites, workshops, organisational support, academic or research projects and TV series are out of scope.',
        'One project per applicant per round, and no equipment purchases.',
        'Funds must be spent in, or for the benefit of, the Arab region.',
        'Past recipients may re-apply once the previous grant is closed and two rounds have passed — the third round after the award.',
        'Uploaded documents must be PDF, JPEG or PNG.',
        'The application is submitted by the director, choreographer, writer, main musician, or main artist or curator, depending on the discipline.',
        'Applicants under 18 supply additional documents.',
      ],
    },
    {
      type: 'C9',
      label: 'Jury — one per discipline',
      text: 'Each discipline is judged by an independent jury of three members, appointed for a single round and changed the following year.',
      criteria: [
        'Quality and relevance of the project',
        'Originality',
        'Practicability of the projected budget',
        'Feasibility of completion by the deadline',
      ],
    },
    {
      type: 'C10',
      items: [
        'The grant is paid in two installments — 70% on signing, 30% once the financial and narrative reports and the material documenting the project are received.',
        "The grant is cancelled if the agreement isn't signed within 45 days of being sent.",
        'The work is completed within 18 months of signing.',
        'One extension only, requested at least 30 days before the agreement period ends: six months, or one year for cinema.',
        'A separate document covers intellectual property rights.',
        'Two guarantors co-sign the agreement, at least one of them an expert in the field who knows the project.',
        'Mawred may cancel the agreement and reclaim funds already paid, or withhold the final installment where obligations are unmet.',
        'All outputs carry the Mawred logo and the agreed support credit.',
      ],
    },
    {
      type: 'S2',
      files: [
        { n: 'Application form preview — Visual Arts', t: 'PDF' },
        { n: 'Application form preview — Literature', t: 'PDF' },
        { n: 'Application form preview — Music & Sound Art', t: 'PDF' },
        { n: 'Application form preview — Performing Arts', t: 'PDF' },
        { n: 'Application form preview — Cinema', t: 'PDF' },
        { n: 'Required documents', t: 'PDF' },
      ],
    },
    {
      type: 'S3',
      groups: ['2025', '2024', '2023'],
      offered: true,
      offeredOnly: true,
    },
  ],
};

export const WIJHAT: ProgramConfig = {
  hero: [
    {
      label: 'Who is it for',
      items: [
        'Individuals or groups — bands, troupes, companies, work teams',
        'Artists of all disciplines',
        'Cultural actors, independent or working with an organisation',
      ],
    },
    {
      label: 'For what purpose',
      lead: 'To take part in:',
      items: [
        'Fairs',
        'Residencies',
        'Forums, conferences and seminars',
        'Workshops promoting creative and artistic production',
        'Training and capacity-building workshops',
      ],
    },
    {
      label: 'From where to where',
      items: [
        'From one Arab country to another',
        'From outside the Arab region into it',
        'From the Arab region to outside it',
      ],
    },
    {
      label: 'The grant',
      lead: 'Up to €7,000, to cover:',
      items: [
        'Travel tickets',
        'Visa costs',
        'Accommodation',
        'Partial living expenses',
        'Internal transport',
      ],
    },
  ],
  overview: {
    text: [
      'Artists and cultural actors in the Arab region travel to take part in fairs, residencies, forums and workshops, but travel funding is scarce, visas are difficult, and the networks that make the travel worth making are hard to reach. Wijhat answers that with grants of up to €7,000 for travel within the Arab region and beyond it.',
      'Between 25 and 30 grants are awarded a year, across three rounds. The grant is travel support rather than a living allowance — it covers living expenses only in part.',
      'There is no fixed duration for the travel or the stay. The grant covers the expenses of the period of the stated activity, and no longer.',
    ],
  },
  figs: [
    { label: 'grants a year', value: '25–30' },
    { label: 'rounds a year', value: '3' },
    { label: 'grants since launch' },
    { label: 'countries' },
  ],
  dest: 'apply.mawred.org — the applications platform',
  contact: 'wijhat@mawred.org',
  blocks: [
    {
      type: 'S1',
      lead: 'Applications are accepted year-round against a repeating three-round calendar. Dates carry no year — the same deadlines and announcement dates run every year.',
      stages: [
        { n: 'Round 1 deadline', d: '16 January, 16:00 Beirut' },
        { n: 'Round 1 results', d: '28 February' },
        { n: 'Round 2 deadline', d: '29 May, 16:00 Beirut' },
        { n: 'Round 2 results', d: '1 July' },
        { n: 'Round 3 deadline', d: '17 September, 16:00 Beirut' },
        { n: 'Round 3 results', d: '31 October' },
      ],
    },
    {
      type: 'S6',
      lead: "Applications are accepted year-round, but each round is judged in a fixed window. Check your intended travel date against two dates: travel has to fall after the round's results are announced, and the application has to reach us before that round's deadline.",
      rows: [
        { label: 'Travel from 28 February', value: 'Round 1 — apply by 16 January' },
        { label: 'Travel from 1 July', value: 'Round 2 — apply by 29 May' },
        { label: 'Travel from 31 October', value: 'Round 3 — apply by 17 September' },
      ],
      notes: [
        "Grantees are never announced before the round's announcement date.",
        'Screening begins immediately after the deadline.',
        'An application that arrives after the deadline is carried over to the next round, if it is still eligible.',
      ],
    },
    {
      type: 'S5',
      core: [
        'Register on the applications platform, activate your account from the link sent to the address you registered, log in and select Wijhat. Both tracks apply through the same portal.',
        "The form can be saved and reopened before you submit. State the purpose of the intended travel and how it fits the programme's aims.",
      ],
      paths: [
        {
          label: 'Individual',
          steps: [
            {
              label: 'Fill in the individual application form',
              detail: 'In Arabic, except for the fields marked English.',
            },
            {
              label: 'Describe the schedule, the activities and the expected outcomes',
              detail:
                'One application per round, for a single project that may cover several destinations or dates.',
            },
          ],
          documents: [
            'Official invitation, or proof of acceptance in principle',
            'Photocopy of your passport',
            'Detailed travel budget — the form comes with the application',
            'Programme of the activity, if one is available',
            'Detailed CV',
            'List of previous works',
          ],
        },
        {
          label: 'Group',
          steps: [
            {
              label: 'Register on behalf of the group',
              detail: 'One member applies for the whole group.',
            },
            {
              label: 'Fill in the group application form',
              detail: 'In Arabic, except for the fields marked English.',
            },
            {
              label: "Set out all the group's travel costs in a single itemised budget",
              detail: 'One application per round, covering every travelling member.',
            },
          ],
          documents: [
            'Official invitation, or proof of acceptance in principle for the group',
            "Photocopies of every participant's passport",
            'Detailed travel budget — the form comes with the application',
            'Programme of the activity, if one is available',
            'List of previous works',
          ],
        },
      ],
    },
    {
      type: 'C6',
      label: 'Culture Resource can support your visa application',
      text: "Once the contract is signed, we can issue a recommendation letter to the relevant embassy in support of your application. Obtaining the visa itself remains the grantee's responsibility.",
    },
    {
      type: 'C8',
      text: 'Wijhat funds travel for a stated activity. Applications that fall outside the conditions below, or that arrive incomplete, are not reviewed.',
      items: [
        'Applicants must be from an Arab country, regardless of ethnicity or citizenship, and whether resident there or abroad.',
        'The country of departure or the country of arrival must be in the Arab region.',
        'Individuals and groups may both apply — bands, troupes, companies and work teams.',
        'A host may assist with an application but may not apply on behalf of the person invited.',
        'Applicants under 18 apply with a written consent letter from a guardian.',
        'Past Wijhat grantees may not re-apply for 16 months, or four rounds, counted from the announcement date.',
        'Recipients of other Mawred grants may still apply.',
        'One application per round, for a single project that may cover several destinations or dates.',
        'The application is in Arabic, except for the fields marked English.',
        'Previous works are submitted as a single PDF, Word or Zip file of up to 4 MB, or four JPEGs of up to 1 MB each; audio and video are submitted as links.',
        'Incomplete applications are discarded before the jury stage.',
      ],
    },
    {
      type: 'C9',
      label: 'Jury — three members, changed each round',
      text: 'Applications are first screened for eligibility and completeness. Those that pass go to an independent jury of three cultural actors and artists with recognised expertise in the Arab region and internationally, appointed for a single round. The jury applies the same criteria every round, centred mainly on two things.',
      criteria: ['The intended destination', 'The type of activity travelled for'],
    },
    {
      type: 'C10',
      items: [
        'Contracts are sent out after the results are announced.',
        'The grant is paid in two installments — 60–80% on signing, and the remaining 20–40% once the financial and narrative reports are submitted.',
        "The grant is cancelled if the agreement isn't signed within 60 days of being sent.",
        'If the travel costs less than estimated, the grant is capped at the actual cost.',
        'The grant is used within 12 months of the announcement date.',
        "The grant is tied to the activity stated in the application. If the travel doesn't happen the grant is annulled; it may be redirected to another activity only on written request, decided case by case.",
        'The second installment is withheld where the reports or the other obligations are unmet.',
        'Where a grant is cancelled, any disbursed portion that is no longer warranted is reclaimed.',
        'All publicity, media coverage and reports credit Wijhat and Culture Resource.',
      ],
    },
    {
      type: 'S3',
      groups: ['2025', '2024', '2023'],
      offered: true,
      offeredOnly: true,
    },
  ],
};

export const STAND_FOR_ART: ProgramConfig = {
  overview: {
    text: [
      'Stand for Art supports artists and cultural actors from the Arab region who face a risk to their safety or security — whether because of the work they make and the activities they take part in, or because of an unsafe environment around them, at home or abroad. It was launched in 2016, after a study of the risks in the region and of the support available to meet them.',
      'The risks the programme prioritises are kidnapping or detention, imprisonment, threats of physical harm, violence and abuse, and prosecution — whether by legal or illegal means. An applicant may be in danger because of their artistic or cultural expression and production, or because of the environment they live and work in.',
      'The aim is to safeguard the right to free expression and the right to live and work in safety and dignity, and the support offered towards that is temporary. Applications are accepted all year — there are no rounds and no deadlines.',
    ],
  },
  figs: null,
  dest: 'an encrypted form hosted on JotForm — not apply.mawred.org',
  rolling: true,
  contact: 'artists@mawred.org',
  faqs: [
    {
      q: 'Can journalists and photojournalists apply?',
      a: 'Not as a rule. Journalists working in cultural or artistic journalism, with published work in that field, can.',
    },
    {
      q: 'Can an artist who is not at risk apply for support?',
      a: "No. Culture Resource's other programmes support artistic and cultural work that isn't tied to a risk situation.",
    },
    {
      q: 'Can an organisation at risk of closure or bankruptcy apply?',
      a: "No — the programme supports individuals only, whether they are affiliated with an organisation or working independently. Organisational support sits with Culture Resource's other programmes.",
    },
    {
      q: 'Does the support cover family members?',
      a: 'The support goes to the artist or cultural actor. Their family circumstances and dependents are taken into account when the form and level of support are set.',
    },
    {
      q: 'How much financial support is given?',
      a: "There are no preset figures. The amount is set against the severity and urgency of the case, the programme's budget, and the cost of living in the country of residence or the host country.",
    },
    {
      q: 'Can the programme help with obtaining an entry visa?',
      a: 'The programme cannot intervene in visa procedures, but it can supply a letter certifying its support where that is useful.',
    },
  ],
  blocks: [
    {
      type: 'C4',
      steps: [
        {
          label: 'Fill in the encrypted application form',
          detail: 'The form is hosted outside the applications platform, on JotForm.',
        },
        {
          label: 'Complete it in Arabic',
          detail: 'Except for the fields marked English.',
        },
        {
          label: 'Attach the required documents',
          detail: 'The five documents listed below.',
        },
      ],
      documents: [
        'A passport, ID or any identification document',
        'A short bio or a detailed CV',
        'Previous works, or links to them — up to three',
        'Two recommendation letters from people or organisations aware of the risk situation, with their contact details',
        'An official invitation from a host entity, if you have one',
      ],
      highlight: {
        label: 'Your request is confidential',
        text: 'The application form is encrypted. All the information you send is confidential and is used internally by the Stand for Art team only.',
      },
      note: 'The encrypted form cannot be saved and reopened, so it is completed in one sitting — have your documents to hand before you start.',
      withRepeat: true,
    },
    {
      type: 'C5',
      records: [
        {
          label: 'Emergency fund',
          amount: 'Set case by case',
          items: [
            'Living and accommodation expenses, in the country of residence or a host country, for up to six months',
            'Travel expenses — tickets, visa costs, internal transport',
            'Legal support — advice, or a lawyer',
            'Other expenditure, such as psychological or physical health care',
          ],
        },
        {
          label: 'Referral',
          items: [
            'Short-term artistic residencies, in the Arab region or abroad, as a temporary safe haven',
            'International organisations supporting artists at risk — the programme backs the application with a recommendation letter',
            'Advocacy organisations, or lawyers offering free legal advice',
          ],
        },
      ],
    },
    {
      type: 'C8',
      text: 'Support is for individuals facing a real risk. Applications outside the conditions below are not reviewed.',
      items: [
        'Applicants must originate from an Arab country, regardless of ethnicity or citizenship, and whether resident there or abroad.',
        'Applicants must be an artist or a cultural actor.',
        'Applicants must be in peril, or facing a tangible and verifiable threat.',
        'Individuals only — whether affiliated with an organisation or working independently.',
        'The application is in Arabic, except for the fields marked English.',
      ],
    },
    {
      type: 'C9',
      label: 'Steering committee — six members, and it sets the form of support',
      text: 'The committee is made up of artists and cultural managers with expertise in the field, aware of developments in the Arab region and in exile, gender-diverse and geographically distributed. It both decides on a case and sets the form and level of support, against how grave the case is.',
      process: [
        'The application is checked for eligibility, completeness and documents.',
        'The team verifies the information, sometimes consulting trusted people or organisations bound to confidentiality.',
        'The case goes to the steering committee, which approves or rejects it and sets the form of support.',
        'The team informs the applicant of the decision and, where accepted, sends the proposed support.',
        'An agreement is signed between Culture Resource and the beneficiary.',
      ],
    },
  ],
};

export const ABBARA: ProgramConfig = {
  hero: [
    {
      label: 'Who is Abbara for',
      items: [
        'Independent, non-governmental artistic and cultural initiatives and organisations in the Arab region',
        'Arab artistic and cultural initiatives and organisations abroad whose work serves artistic and cultural production in Arabic',
      ],
    },
    {
      label: 'What kind of support does the programme offer',
      items: [
        'Financial support of €22,000 per initiative or organisation',
        'Training in strategic planning and organisational management',
        'Technical assistance — governance, financial management, resources and fundraising, communications',
        'Networking and collaborations',
      ],
    },
  ],
  overview: {
    text: [
      'Abbara was launched in 2011 to support independent cultural initiatives and organisations as key actors in building a cultural sector that means something to their societies. Across the eight rounds held since, it has supported 87 initiatives and organisations from the Arab region. The team has continued to accompany them: 27 have since ceased operating, and 60 are still active.',
      'The sector has taken a decade of warfare and strife, occupation and intervention, and political and economic crisis — on top of the absence of government support for arts and culture in most Arab countries, no measures to soften the impact of crises on cultural actors, and very few funders offering unrestricted core funding.',
      'Abbara is the response: it helps cultural entities build the capacities that make them administratively viable, so they can sustain themselves and evolve independently, on their own local terms. It also asks the organisations in each round to exchange knowledge and experience and to try working together.',
    ],
    items: [
      'Support collective cultural work — training, equipping and guiding independent initiatives and organisations so they can devise the structures that work in their own social, political and cultural contexts.',
      'Develop the sector by testing models and approaches to organisational sustainability, and financial sustainability in particular.',
      'Address the challenges common to independent cultural work across the region by helping organisations forge links and mutual-support frameworks, share learning and expertise, and lay the foundations for a cultural ecosystem that can change its own context.',
    ],
  },
  figs: [
    { label: 'organisations supported', value: '87' },
    { label: 'still active', value: '60' },
    { label: 'ceased operating', value: '27' },
    { label: 'rounds since 2011', value: '8' },
  ],
  dest: 'apply.mawred.org — the applications platform',
  contact: 'abbara@mawred.org',
  blocks: [
    {
      type: 'C3flat',
      rows: [
        {
          label: 'Who can apply',
          value:
            'Independent, non-governmental initiatives and organisations founded and directed by artists or cultural actors from an Arab country, regardless of ethnic origin or citizenship',
        },
        {
          label: 'Disciplines covered',
          value:
            'Cinema · Performing arts · Literature · Publishing · Archiving · Visual arts · Music · Podcasts · Cultural management · Cultural policies · Cultural heritage · Research',
        },
        {
          label: 'Where they work',
          value:
            'Mainly the Arab region — organisations abroad are considered where their work serves artistic and cultural production in Arabic',
        },
        {
          label: 'Budget band',
          value: 'Small or midsize — total expenditure or income between US$50,000 and US$500,000',
        },
        {
          label: 'Years operating',
          value:
            "At least three years' experience in arts and culture, as an entity or in its members",
        },
        {
          label: 'Registration',
          value:
            'Unregistered initiatives and groups may be considered, provided they work within established and transparent legal frameworks',
        },
        {
          label: 'Previous beneficiaries',
          value: 'A previous Abbara beneficiary may not apply',
        },
      ],
    },
    {
      type: 'S1',
      lead: 'A round runs 24–30 months, depending on what each organisation needs. The dates below are the current round, Abbara 08.',
      stages: [
        { n: 'Open call', d: '2 June 2025' },
        { n: 'Deadline for applications', d: '17 July 2025, 16:00 Beirut' },
        { n: 'Results announced', d: 'End of September 2025' },
        {
          n: 'First workshop — strategic planning and organisational management',
          d: 'Week of 9–15 November 2025',
        },
        { n: 'Agreements signed with beneficiaries', d: 'February 2026' },
        {
          n: 'Second workshop — financial planning and financial management',
          d: 'During 2026',
        },
        { n: 'Technical-assistance programme', d: '2026–2027' },
        { n: 'End of contracting period', d: 'February 2028' },
      ],
    },
    {
      type: 'C4',
      steps: [
        {
          label: 'Register on the applications platform',
          detail: 'Fill in the registration details asked for.',
        },
        {
          label: 'Activate your account',
          detail: 'An activation link is sent to the address you registered.',
        },
        {
          label: 'Log in and fill in the form online',
          detail: 'The application is in Arabic, except for the blanks that require English.',
        },
      ],
      note: "Save each section before you move to the next, and don't leave the attachments to the last hours before the deadline — heavy traffic on the site can stop an upload.",
      withRepeat: true,
    },
    {
      type: 'C5',
      records: [
        {
          label: 'Financial support',
          amount: '€22,000',
          items: [
            'Core funding for organisational costs — staffing, setting up and maintaining a space or premises, and running costs',
            'Runs for no more than 24 months',
          ],
        },
        {
          label: 'Training',
          items: [
            'Two physical workshops led by experts — strategic planning and organisational management, then financial planning and financial management',
            'Two representatives from each organisation attend each workshop',
            'Online peer-learning sessions on current themes in cultural management',
          ],
        },
        {
          label: 'Technical assistance',
          items: [
            'Tailored to each organisation on the basis of a needs assessment after the first or second workshop',
            'Governance, financial management, resources and fundraising, communications and related fields',
          ],
        },
        {
          label: 'Networking',
          items: [
            'Exchange of working visits between the organisations in the round',
            'Contact with Culture Resource continues after the programme, and sometimes becomes a partnership',
          ],
        },
      ],
    },
    {
      type: 'C6',
      section: 'overview',
      label: 'The €22,000 is core funding — it does not cover programme activities',
      text: 'It covers the cost of running the organisation: staffing, setting up and maintaining a space or premises, and running costs. It funds no programme or project activity, and it lasts no more than 24 months.',
    },
    {
      type: 'C8',
      text: 'Abbara funds organisations and initiatives, not individuals. An application that misses the eligibility criteria or arrives without the required attachments is eliminated before the jury stage.',
      items: [
        'Every blank in the form is filled in, and every attachment marked with an asterisk is included.',
        'The form is completed in Arabic, apart from the blanks that require English.',
        'Documents required in Arabic must be in Arabic — another language is not accepted.',
        'Attachments sent by WeTransfer are not accepted.',
        'Budget and funding figures are stated in Euro.',
        'The application and all supporting documents are submitted before the deadline.',
      ],
    },
    {
      type: 'C9',
      label: 'Jury — five members, formed anew for each round',
      text: "Once the call closes, the Abbara team screens the applications and eliminates those that don't meet the eligibility criteria. The rest go to a jury of five independent experts in culture and the arts, formed for that round: each member assesses every application individually, then the jury meets to discuss its results and select the organisations.",
      criteria: [
        'Future vision, goals and potential impact',
        'Organisational structure, capacities and skills',
        'The motives for applying to Abbara',
      ],
    },
    {
      type: 'C10',
      items: [
        'Contracts are signed with the beneficiary organisations after the first workshop, on the basis of the first draft of their strategic plan.',
        'The funding component runs for no more than 24 months, inside a contracting period that ends in February 2028 for the current round.',
      ],
    },
    {
      type: 'S3',
      label: 'Abbara organisations by round',
      groups: [
        {
          title: 'Abbara 08',
          records: [
            { name: 'Amalgam Studio — Dance Circus Theatre (DCT)' },
            { name: 'AMME — The Moroccan Association of Electronic Music' },
            { name: 'Damascus Theatre Lab (DTL)' },
            { name: 'The Fiction Council' },
            {
              name: 'Hewar Company for Independent Theater and Performing Arts',
            },
            { name: 'Mayasem Association for Culture and Arts' },
            { name: 'Mouhit Space — Association Culturelle Espace Créatif' },
            { name: 'Studio Collective' },
            { name: 'Studio 8' },
            { name: 'Waziz' },
            { name: 'Yemen Art Base (YAB)' },
          ],
        },
        {
          title: 'Abbara 07',
          records: [
            { name: "B'sarya for Arts" },
            { name: 'Khrarif' },
            { name: 'Piccolo Teatro Di Bizerta' },
            { name: 'Beirut Synthesizer Center' },
            { name: 'Dancers Citizens South (DCS)' },
            { name: 'The Muse multi studios' },
            { name: 'Stereo Contemporary Arts' },
            { name: 'Aden Again Cultural Foundation' },
            { name: '4S Fest' },
            { name: 'Stories film Lab' },
          ],
        },
        {
          title: 'Abbara 06',
          records: [
            { name: 'Badira Culture Communication and Development' },
            { name: 'Khazaen' },
            { name: 'Sakiya' },
            { name: 'The City-Artists Network Association — MEDEARTS' },
            { name: 'Douzan Art & Culture' },
            { name: 'Temporary Art Platform' },
            { name: 'Interference' },
            { name: 'Cairotronica' },
          ],
        },
        {
          title: 'Abbara 05',
          records: [
            { name: 'Ma3azef' },
            { name: 'Collectif Kahraba' },
            { name: 'Teranim Pour les Arts Populaires' },
            { name: 'ANYA' },
            { name: "L'Atelier de l'Observatoire" },
            { name: 'Khashabi Theater' },
            { name: 'Filmlab Palestine' },
            { name: 'Nawras' },
          ],
        },
        {
          title: 'Abbara 04',
          records: [{ name: 'Fanni Raghman Anni' }, { name: 'Basement Cultural Foundation' }],
        },
        {
          title: 'Abbara 03',
          records: [
            { name: 'Mashhed Cultural association' },
            { name: 'Tunisian Federation of Film Societies' },
            { name: 'Megawra' },
            { name: 'El Madina for Performing and Digital Arts' },
            { name: 'Dawar El Fnoon' },
            { name: 'Darak for Cultural and Artistic development' },
            { name: 'School of Dramatic Arts' },
            { name: "Association l'Art Vivant" },
          ],
        },
        {
          title: 'Abbara 02',
          records: [
            { name: 'Studio Janaklees' },
            { name: 'Arete Foundation for Arts and Culture' },
            { name: 'Cultural Media Center' },
            { name: 'Massart Association for an Alternative Culture' },
          ],
        },
        {
          title: 'Abbara 01',
          records: [
            { name: 'Medrar for Contemporary Art' },
            { name: 'Friends of Ahmad Bahaa Al-Din Association' },
            { name: 'Ettijahat — Independent Culture' },
            { name: "Association l'Art Rue" },
            { name: 'Hassala films' },
          ],
        },
      ],
    },
  ],
};
