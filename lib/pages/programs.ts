import type {
  C3Row,
  C3RoundGroup,
} from "@/components/blocks/programs/C3AtAGlance";
import type { ApplyStep } from "@/components/blocks/programs/C4ApplySteps";
import type { FaqItem } from "@/components/blocks/programs/C11Faqs";
import type { HeroCell } from "@/components/blocks/programs/S4HeroSummary";
import type { ApplicationPath } from "@/components/blocks/programs/S5ApplicationPaths";
import type { WhichRoundRow } from "@/components/blocks/programs/S6WhichRound";
import type { FigItem } from "@/components/wireframe/Figs";

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
  | { type: "C3flat"; rows: C3Row[] }
  | { type: "C3rounds"; groups: C3RoundGroup[] }
  | {
      type: "C4";
      steps: ApplyStep[];
      documents?: string[];
      note?: string;
      withRepeat?: boolean;
    }
  | { type: "C5"; records: SupportRecordConfig[] }
  | { type: "C6"; label: string; text?: string | string[] }
  | { type: "C8"; text?: string | string[]; items?: string[] }
  | {
      type: "C9";
      label: string;
      text?: string | string[];
      process?: string[];
      criteria?: string[];
    }
  | { type: "C10"; lines?: number; items?: string[] }
  | { type: "S1"; stages: TimelineStageConfig[] }
  | { type: "S2"; files: DownloadFileConfig[] }
  | { type: "S3"; groups: string[]; offered?: boolean; offeredOnly?: boolean }
  | { type: "S5"; paths: ApplicationPath[]; core?: string | string[] }
  | { type: "S6"; lead?: string; rows?: WhichRoundRow[]; notes?: string[] };

export type ProgramConfig = {
  hero?: HeroCell[];
  overview?: { title?: string; text?: string | string[] };
  figs?: FigItem[] | null;
  dest: string;
  rolling?: boolean;
  contact?: string;
  faqs?: FaqItem[];
  blocks: ProgramBlockConfig[];
};

export const PRODUCTION_AWARDS: ProgramConfig = {
  overview: {
    title: "What is the Production Awards Program?",
    text: [
      "Launched in 2004, the Production Awards support artists and writers of Arab origin who are under 35, wherever they live, to produce a new work in one of five disciplines: literature, visual arts, music and sound art, performing arts, and cinema.",
      "Up to 25 grants are awarded each year, five per discipline. Around 400 projects have been supported since the programme began.",
    ],
  },
  figs: [
    { label: "grants awarded since 2004", value: "~400" },
    { label: "countries" },
    { label: "grants per year", value: "25" },
  ],
  dest: "apply.mawred.org — the applications platform",
  contact: "awards@mawred.org",
  blocks: [
    {
      type: "C3flat",
      rows: [
        { label: "Open call", value: "17 August 2026" },
        { label: "Deadline", value: "19 October 2026, 16:00 Beirut" },
        { label: "Results", value: "End of March 2027" },
        {
          label: "Eligibility",
          value: "Artists and writers of Arab origin, under 35",
        },
        {
          label: "Disciplines covered",
          value:
            "Literature · Visual arts · Music & sound art · Performing arts · Cinema",
        },
        { label: "Grant period", value: "18 months from signing" },
      ],
    },
    {
      type: "C4",
      steps: [
        {
          label: "Register on the applications platform",
          detail: "Or log in, if you already have an account.",
        },
        {
          label: "Activate your account",
          detail: "An activation link is sent to the address you registered.",
        },
        {
          label: "Select the programme and fill in the form",
          detail:
            "The application is in Arabic, except for the fields marked English.",
        },
        {
          label: "Save, return, and submit before the deadline",
          detail:
            "A draft can be saved and reopened; incomplete applications are not reviewed.",
        },
      ],
      note: "Read the application guidelines in full before you start.",
      withRepeat: true,
    },
    {
      type: "C5",
      records: [
        {
          label: "Performing Arts",
          body: "Development and production of dance, theatre and multidisciplinary work, and other performing-arts forms.",
          amount: "Up to €8,500",
        },
        {
          label: "Visual Arts",
          body: "Artworks, exhibitions, installations, art books and comics — sculpture, engraving, photography, light and video art, VR, immersive and interactive work.",
          amount: "Up to €8,500",
        },
        {
          label: "Literature",
          body: "Novels, memoirs, biographies, graphic novels, short stories, poetry collections and theatre texts.",
          amount: "Up to €6,500",
        },
        {
          label: "Music & Sound Art",
          body: "Albums, experimental music and sound projects, sound installations, live concerts and music-related visuals.",
          amount: "Up to €8,500",
        },
        {
          label: "Cinema",
          body: "Production and post-production of short, medium-length and feature films — fiction, documentary, animation and experimental.",
          amount: "Up to €13,000",
        },
      ],
    },
    {
      type: "C8",
      text: "The grant funds the production of a new work. Applications outside that scope, or that don't meet the application terms, are not reviewed.",
      items: [
        "No reproduction of a project that has already been produced or presented.",
        "Websites, workshops, organisational support, academic or research projects and TV series are out of scope.",
        "One project per applicant per round, and no equipment purchases.",
        "Funds must be spent in, or for the benefit of, the Arab region.",
        "Past recipients may re-apply once the previous grant is closed and two rounds have passed — the third round after the award.",
        "Uploaded documents must be PDF, JPEG or PNG.",
        "The application is submitted by the director, choreographer, writer, main musician, or main artist or curator, depending on the discipline.",
        "Applicants under 18 supply additional documents.",
      ],
    },
    {
      type: "C9",
      label: "Jury — one per discipline",
      text: "Each discipline is judged by an independent jury of three members, appointed for a single round and changed the following year.",
      criteria: [
        "Quality and relevance of the project",
        "Originality",
        "Practicability of the projected budget",
        "Feasibility of completion by the deadline",
      ],
    },
    {
      type: "C10",
      items: [
        "The grant is paid in two installments — 70% on signing, 30% once the financial and narrative reports and the material documenting the project are received.",
        "The grant is cancelled if the agreement isn't signed within 45 days of being sent.",
        "The work is completed within 18 months of signing.",
        "One extension only, requested at least 30 days before the agreement period ends: six months, or one year for cinema.",
        "A separate document covers intellectual property rights.",
        "Two guarantors co-sign the agreement, at least one of them an expert in the field who knows the project.",
        "Mawred may cancel the agreement and reclaim funds already paid, or withhold the final installment where obligations are unmet.",
        "All outputs carry the Mawred logo and the agreed support credit.",
      ],
    },
    {
      type: "S2",
      files: [
        { n: "Application form preview — Visual Arts", t: "PDF" },
        { n: "Application form preview — Literature", t: "PDF" },
        { n: "Application form preview — Music & Sound Art", t: "PDF" },
        { n: "Application form preview — Performing Arts", t: "PDF" },
        { n: "Application form preview — Cinema", t: "PDF" },
        { n: "Required documents", t: "PDF" },
      ],
    },
    {
      type: "S3",
      groups: ["2025", "2024", "2023"],
      offered: true,
      offeredOnly: true,
    },
  ],
};

export const WIJHAT: ProgramConfig = {
  hero: [
    {
      label: "Who is it for",
      items: [
        "Individuals or groups — bands, troupes, companies, work teams",
        "Artists of all disciplines",
        "Cultural actors, independent or working with an organisation",
      ],
    },
    {
      label: "For what purpose",
      lead: "To take part in:",
      items: [
        "Fairs",
        "Residencies",
        "Forums, conferences and seminars",
        "Workshops promoting creative and artistic production",
        "Training and capacity-building workshops",
      ],
    },
    {
      label: "From where to where",
      items: [
        "From one Arab country to another",
        "From outside the Arab region into it",
        "From the Arab region to outside it",
      ],
    },
    {
      label: "The grant",
      lead: "Up to €7,000, to cover:",
      items: [
        "Travel tickets",
        "Visa costs",
        "Accommodation",
        "Partial living expenses",
        "Internal transport",
      ],
    },
  ],
  overview: {
    title: "What is Wijhat?",
    text: [
      "Artists and cultural actors in the Arab region travel to take part in fairs, residencies, forums and workshops, but travel funding is scarce, visas are difficult, and the networks that make the travel worth making are hard to reach. Wijhat answers that with grants of up to €7,000 for travel within the Arab region and beyond it.",
      "Between 25 and 30 grants are awarded a year, across three rounds. The grant is travel support rather than a living allowance — it covers living expenses only in part.",
      "There is no fixed duration for the travel or the stay. The grant covers the expenses of the period of the stated activity, and no longer.",
    ],
  },
  figs: [
    { label: "grants a year", value: "25–30" },
    { label: "rounds a year", value: "3" },
    { label: "grants since launch" },
    { label: "countries" },
  ],
  dest: "apply.mawred.org — the applications platform",
  contact: "wijhat@mawred.org",
  blocks: [
    {
      type: "C3rounds",
      groups: [
        {
          title: "Round 1 — February",
          deadline: "16 January, 16:00 Beirut",
          results: "28 February",
        },
        {
          title: "Round 2 — June",
          deadline: "29 May, 16:00 Beirut",
          results: "1 July",
        },
        {
          title: "Round 3 — October",
          deadline: "17 September, 16:00 Beirut",
          results: "31 October",
        },
      ],
    },
    {
      type: "S6",
      lead: "Applications are accepted year-round, but each round is judged in a fixed window. Check your intended travel date against two dates: travel has to fall after the round's results are announced, and the application has to reach us before that round's deadline.",
      rows: [
        { label: "Travel from 28 February", value: "Round 1 — apply by 16 January" },
        { label: "Travel from 1 July", value: "Round 2 — apply by 29 May" },
        { label: "Travel from 31 October", value: "Round 3 — apply by 17 September" },
      ],
      notes: [
        "Grantees are never announced before the round's announcement date.",
        "Screening begins immediately after the deadline.",
        "An application that arrives after the deadline is carried over to the next round, if it is still eligible.",
      ],
    },
    {
      type: "S5",
      core: [
        "Register on the applications platform, activate your account from the link sent to the address you registered, log in and select Wijhat. Both tracks apply through the same portal.",
        "The form can be saved and reopened before you submit. State the purpose of the intended travel and how it fits the programme's aims.",
      ],
      paths: [
        {
          label: "Individual",
          steps: [
            {
              label: "Fill in the individual application form",
              detail:
                "In Arabic, except for the fields marked English.",
            },
            {
              label: "Describe the schedule, the activities and the expected outcomes",
              detail:
                "One application per round, for a single project that may cover several destinations or dates.",
            },
          ],
          documents: [
            "Official invitation, or proof of acceptance in principle",
            "Photocopy of your passport",
            "Detailed travel budget — the form comes with the application",
            "Programme of the activity, if one is available",
            "Detailed CV",
            "List of previous works",
          ],
        },
        {
          label: "Group",
          steps: [
            {
              label: "Register on behalf of the group",
              detail: "One member applies for the whole group.",
            },
            {
              label: "Fill in the group application form",
              detail:
                "In Arabic, except for the fields marked English.",
            },
            {
              label: "Set out all the group's travel costs in a single itemised budget",
              detail:
                "One application per round, covering every travelling member.",
            },
          ],
          documents: [
            "Official invitation, or proof of acceptance in principle for the group",
            "Photocopies of every participant's passport",
            "Detailed travel budget — the form comes with the application",
            "Programme of the activity, if one is available",
            "List of previous works",
          ],
        },
      ],
    },
    {
      type: "C6",
      label: "Culture Resource can support your visa application",
      text: "Once the contract is signed, we can issue a recommendation letter to the relevant embassy in support of your application. Obtaining the visa itself remains the grantee's responsibility.",
    },
    {
      type: "C8",
      text: "Wijhat funds travel for a stated activity. Applications that fall outside the conditions below, or that arrive incomplete, are not reviewed.",
      items: [
        "Applicants must be from an Arab country, regardless of ethnicity or citizenship, and whether resident there or abroad.",
        "The country of departure or the country of arrival must be in the Arab region.",
        "Individuals and groups may both apply — bands, troupes, companies and work teams.",
        "A host may assist with an application but may not apply on behalf of the person invited.",
        "Applicants under 18 apply with a written consent letter from a guardian.",
        "Past Wijhat grantees may not re-apply for 16 months, or four rounds, counted from the announcement date.",
        "Recipients of other Mawred grants may still apply.",
        "One application per round, for a single project that may cover several destinations or dates.",
        "The application is in Arabic, except for the fields marked English.",
        "Previous works are submitted as a single PDF, Word or Zip file of up to 4 MB, or four JPEGs of up to 1 MB each; audio and video are submitted as links.",
        "Incomplete applications are discarded before the jury stage.",
      ],
    },
    {
      type: "C9",
      label: "Jury — three members, changed each round",
      text: "Applications are first screened for eligibility and completeness. Those that pass go to an independent jury of three cultural actors and artists with recognised expertise in the Arab region and internationally, appointed for a single round. The jury applies the same criteria every round, centred mainly on two things.",
      criteria: [
        "The intended destination",
        "The type of activity travelled for",
      ],
    },
    {
      type: "C10",
      items: [
        "Contracts are sent out after the results are announced.",
        "The grant is paid in two installments — 60–80% on signing, and the remaining 20–40% once the financial and narrative reports are submitted.",
        "The grant is cancelled if the agreement isn't signed within 60 days of being sent.",
        "If the travel costs less than estimated, the grant is capped at the actual cost.",
        "The grant is used within 12 months of the announcement date.",
        "The grant is tied to the activity stated in the application. If the travel doesn't happen the grant is annulled; it may be redirected to another activity only on written request, decided case by case.",
        "The second installment is withheld where the reports or the other obligations are unmet.",
        "Where a grant is cancelled, any disbursed portion that is no longer warranted is reclaimed.",
        "All publicity, media coverage and reports credit Wijhat and Culture Resource.",
      ],
    },
    {
      type: "S3",
      groups: ["2025", "2024", "2023"],
      offered: true,
      offeredOnly: true,
    },
  ],
};

export const STAND_FOR_ART: ProgramConfig = {
  overview: {
    title: "What is Stand for Art?",
    text: [
      "Stand for Art supports artists and cultural actors from the Arab region who face a risk to their safety or security — whether because of the work they make and the activities they take part in, or because of an unsafe environment around them, at home or abroad. It was launched in 2016, after a study of the risks in the region and of the support available to meet them.",
      "The risks the programme prioritises are kidnapping or detention, imprisonment, threats of physical harm, violence and abuse, and prosecution — whether by legal or illegal means. An applicant may be in danger because of their artistic or cultural expression and production, or because of the environment they live and work in.",
      "The aim is to safeguard the right to free expression and the right to live and work in safety and dignity, and the support offered towards that is temporary. Applications are accepted all year — there are no rounds and no deadlines.",
    ],
  },
  figs: null,
  dest: "an encrypted form hosted on JotForm — not apply.mawred.org",
  rolling: true,
  contact: "artists@mawred.org",
  faqs: [
    {
      q: "Can journalists and photojournalists apply?",
      a: "Not as a rule. Journalists working in cultural or artistic journalism, with published work in that field, can.",
    },
    {
      q: "Can an artist who is not at risk apply for support?",
      a: "No. Culture Resource's other programmes support artistic and cultural work that isn't tied to a risk situation.",
    },
    {
      q: "Can an organisation at risk of closure or bankruptcy apply?",
      a: "No — the programme supports individuals only, whether they are affiliated with an organisation or working independently. Organisational support sits with Culture Resource's other programmes.",
    },
    {
      q: "Does the support cover family members?",
      a: "The support goes to the artist or cultural actor. Their family circumstances and dependents are taken into account when the form and level of support are set.",
    },
    {
      q: "How much financial support is given?",
      a: "There are no preset figures. The amount is set against the severity and urgency of the case, the programme's budget, and the cost of living in the country of residence or the host country.",
    },
    {
      q: "Can the programme help with obtaining an entry visa?",
      a: "The programme cannot intervene in visa procedures, but it can supply a letter certifying its support where that is useful.",
    },
  ],
  blocks: [
    {
      type: "C6",
      label: "Your request is confidential",
      text: "The application form is encrypted. All the information you send is confidential and is used internally by the Stand for Art team only.",
    },
    {
      type: "C4",
      steps: [
        {
          label: "Fill in the encrypted application form",
          detail:
            "The form is hosted outside the applications platform, on JotForm.",
        },
        {
          label: "Complete it in Arabic",
          detail: "Except for the fields marked English.",
        },
        {
          label: "Attach the required documents",
          detail: "The five documents listed below.",
        },
      ],
      documents: [
        "A passport, ID or any identification document",
        "A short bio or a detailed CV",
        "Previous works, or links to them — up to three",
        "Two recommendation letters from people or organisations aware of the risk situation, with their contact details",
        "An official invitation from a host entity, if you have one",
      ],
      note: "The encrypted form cannot be saved and reopened, so it is completed in one sitting — have your documents to hand before you start.",
      withRepeat: true,
    },
    {
      type: "C5",
      records: [
        {
          label: "Emergency fund",
          amount: "Set case by case",
          items: [
            "Living and accommodation expenses, in the country of residence or a host country, for up to six months",
            "Travel expenses — tickets, visa costs, internal transport",
            "Legal support — advice, or a lawyer",
            "Other expenditure, such as psychological or physical health care",
          ],
        },
        {
          label: "Referral",
          items: [
            "Short-term artistic residencies, in the Arab region or abroad, as a temporary safe haven",
            "International organisations supporting artists at risk — the programme backs the application with a recommendation letter",
            "Advocacy organisations, or lawyers offering free legal advice",
          ],
        },
      ],
    },
    {
      type: "C8",
      text: "Support is for individuals facing a real risk. Applications outside the conditions below are not reviewed.",
      items: [
        "Applicants must originate from an Arab country, regardless of ethnicity or citizenship, and whether resident there or abroad.",
        "Applicants must be an artist or a cultural actor.",
        "Applicants must be in peril, or facing a tangible and verifiable threat.",
        "Individuals only — whether affiliated with an organisation or working independently.",
        "The application is in Arabic, except for the fields marked English.",
      ],
    },
    {
      type: "C9",
      label: "Steering committee — six members, and it sets the form of support",
      text: "The committee is made up of artists and cultural managers with expertise in the field, aware of developments in the Arab region and in exile, gender-diverse and geographically distributed. It both decides on a case and sets the form and level of support, against how grave the case is.",
      process: [
        "The application is checked for eligibility, completeness and documents.",
        "The team verifies the information, sometimes consulting trusted people or organisations bound to confidentiality.",
        "The case goes to the steering committee, which approves or rejects it and sets the form of support.",
        "The team informs the applicant of the decision and, where accepted, sends the proposed support.",
        "An agreement is signed between Culture Resource and the beneficiary.",
      ],
    },
  ],
};

export const ABBARA: ProgramConfig = {
  hero: ["Who", "What", "Where", "Support"],
  figs: [
    "organisations supported",
    "still active",
    "ceased operating",
    "countries",
  ],
  dest: "online application portal",
  blocks: [
    {
      type: "C3flat",
      rows: [
        { label: "Annual budget band" },
        { label: "Years operating" },
        { label: "Registration status" },
        { label: "Country of operation" },
      ],
    },
    {
      type: "S1",
      stages: [
        { n: "Call opens", d: "date" },
        { n: "Deadline", d: "date" },
        { n: "Shortlisting", d: "date" },
        { n: "Interviews", d: "date" },
        { n: "Selection", d: "date" },
        { n: "Year 1 support", d: "12 months" },
        { n: "Review", d: "date" },
        { n: "Year 2 support", d: "12 months" },
      ],
    },
    {
      type: "C4",
      steps: [
        { label: "Check eligibility" },
        { label: "Complete the form" },
        { label: "Submit" },
      ],
      withRepeat: true,
    },
    {
      type: "C5",
      records: [
        { label: "Core funding", amt: true },
        { label: "Training" },
        { label: "Technical assistance" },
        { label: "Networking" },
      ],
    },
    { type: "C6", label: "What the funding does and does not cover" },
    { type: "C8" },
    { type: "C9", label: "Jury" },
    { type: "C10", lines: 2 },
    { type: "S3", groups: ["Cohort 03", "Cohort 02", "Cohort 01"] },
  ],
};
