"use client";

import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { AB10InitiativeRecord } from "@/components/blocks/about/AB10InitiativeRecord";
import { AB11OtherInitiatives } from "@/components/blocks/about/AB11OtherInitiatives";
import { AB12OpenPositions } from "@/components/blocks/about/AB12OpenPositions";
import { AB13Position } from "@/components/blocks/about/AB13Position";
import { AB1Intro } from "@/components/blocks/about/AB1Intro";
import { AB2Vision } from "@/components/blocks/about/AB2Vision";
import { AB3Mission } from "@/components/blocks/about/AB3Mission";
import { AB4Values } from "@/components/blocks/about/AB4Values";
import { AB5HistoryTimeline } from "@/components/blocks/about/AB5HistoryTimeline";
import { AB6SectionIntro } from "@/components/blocks/about/AB6SectionIntro";
import { AB7PeopleGroup } from "@/components/blocks/about/AB7PeopleGroup";
import { AB8LogoBand } from "@/components/blocks/about/AB8LogoBand";
import { AB9InitiativeDirectory } from "@/components/blocks/about/AB9InitiativeDirectory";
import { HM1CinematicHero } from "@/components/blocks/home/HM1CinematicHero";
import { HM2ImpactStrip } from "@/components/blocks/home/HM2ImpactStrip";
import { HM4OpenOpportunities } from "@/components/blocks/home/HM4OpenOpportunities";
import { HM5FeaturedSpotlight } from "@/components/blocks/home/HM5FeaturedSpotlight";
import { HM6LatestNews } from "@/components/blocks/home/HM6LatestNews";
import { MN1IntroPurpose } from "@/components/blocks/network/MN1IntroPurpose";
import { MN2ImpactStrip } from "@/components/blocks/network/MN2ImpactStrip";
import { MN3FilterBank } from "@/components/blocks/network/MN3FilterBank";
import { MN4CountRow } from "@/components/blocks/network/MN4CountRow";
import { MN5DirectoryListing } from "@/components/blocks/network/MN5DirectoryListing";
import { MN6Record } from "@/components/blocks/network/MN6Record";
import { N10Schedule } from "@/components/blocks/news/N10Schedule";
import { N11Cta } from "@/components/blocks/news/N11Cta";
import { N13RelatedPosts } from "@/components/blocks/news/N13RelatedPosts";
import { N14Roster } from "@/components/blocks/news/N14Roster";
import { N15Quotes } from "@/components/blocks/news/N15Quotes";
import { N1CategoryFilter } from "@/components/blocks/news/N1CategoryFilter";
import { N2CountRow } from "@/components/blocks/news/N2CountRow";
import { N3PostFeed } from "@/components/blocks/news/N3PostFeed";
import { N4Pagination } from "@/components/blocks/news/N4Pagination";
import { N6FeaturedImage } from "@/components/blocks/news/N6FeaturedImage";
import { N7PostMeta } from "@/components/blocks/news/N7PostMeta";
import { N9Body } from "@/components/blocks/news/N9Body";
import { C10ContractTerms } from "@/components/blocks/programs/C10ContractTerms";
import { C11Faqs } from "@/components/blocks/programs/C11Faqs";
import { C12Contact } from "@/components/blocks/programs/C12Contact";
import { C1Overview } from "@/components/blocks/programs/C1Overview";
import { C2ImpactFigures } from "@/components/blocks/programs/C2ImpactFigures";
import { C4ApplySteps } from "@/components/blocks/programs/C4ApplySteps";
import { C5FormsOfSupport } from "@/components/blocks/programs/C5FormsOfSupport";
import { C6HighlightedNote } from "@/components/blocks/programs/C6HighlightedNote";
import { C7ApplyButton } from "@/components/blocks/programs/C7ApplyButton";
import { C8Conditions } from "@/components/blocks/programs/C8Conditions";
import { C9Selection } from "@/components/blocks/programs/C9Selection";
import { S1Timeline } from "@/components/blocks/programs/S1Timeline";
import { S2Downloads } from "@/components/blocks/programs/S2Downloads";
import { S3PastBeneficiaries } from "@/components/blocks/programs/S3PastBeneficiaries";
import { S4HeroSummary } from "@/components/blocks/programs/S4HeroSummary";
import { S5ApplicationPaths } from "@/components/blocks/programs/S5ApplicationPaths";
import { S6WhichRound } from "@/components/blocks/programs/S6WhichRound";
import { PA1IntroLine } from "@/components/blocks/publications/PA1IntroLine";
import { PA2FilterBar } from "@/components/blocks/publications/PA2FilterBar";
import { PA3CountRow } from "@/components/blocks/publications/PA3CountRow";
import { PA4ResultsGrid } from "@/components/blocks/publications/PA4ResultsGrid";
import { PB1SeriesIntro } from "@/components/blocks/publications/PB1SeriesIntro";
import { PB2MediaListing } from "@/components/blocks/publications/PB2MediaListing";
import { PC1PublicationRecord } from "@/components/blocks/publications/PC1PublicationRecord";
import { PC2RelatedPublications } from "@/components/blocks/publications/PC2RelatedPublications";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import {
  HISTORY_ENTRIES,
  HISTORY_LEAD,
  LOGO_BANDS,
  MISSION_POINTS,
  PEOPLE_GROUPS,
  VALUES,
  VISION,
  WHO_WE_ARE_INTRO,
} from "@/lib/pages/about";
import {
  BLOCKS,
  type BlockCatalogEntry,
  type BlockCatalogKit,
} from "@/lib/pages/blocks";
import {
  HOME_ALL_NEWS_HREF,
  HOME_FIGURES,
  HOME_HERO_FRAMES,
  HOME_NEWS_POSTS,
  HOME_OPPORTUNITIES,
  HOME_POSITIONING,
  HOME_SPOTLIGHT,
} from "@/lib/pages/home";
import {
  NETWORK_CORRECTION_CONTACT,
  NETWORK_INTRO,
  NETWORK_RECORD,
} from "@/lib/pages/network";
import {
  NEWS_POSTS,
  PRODUCTION_AWARDS_RESULTS,
  relatedNewsPosts,
} from "@/lib/pages/news";
import {
  ABBARA,
  PRODUCTION_AWARDS,
  STAND_FOR_ART,
  WIJHAT,
  type ProgramBlockConfig,
  type ProgramConfig,
} from "@/lib/pages/programs";
import {
  LIBRARY_FACETS,
  LIBRARY_RECORDS,
  MUDAWANAT,
  PUBLICATION_DETAIL_HREF,
  PUBLICATION_RECORD,
} from "@/lib/pages/publications";

const KIT_HEADING: Record<BlockCatalogKit, string> = {
  home: "Home",
  programmes: "Programmes",
  publications: "Publications",
  network: "Network",
  news: "News",
  about: "About",
};

const PROGRAMME_ORDER: ProgramConfig[] = [
  PRODUCTION_AWARDS,
  WIJHAT,
  STAND_FOR_ART,
  ABBARA,
];

function required<T>(value: T | null | undefined, message: string): T {
  if (value == null) {
    throw new Error(message);
  }
  return value;
}

function firstProgramBlock<T extends ProgramBlockConfig["type"]>(
  type: T,
): Extract<ProgramBlockConfig, { type: T }> {
  for (const config of PROGRAMME_ORDER) {
    const match = config.blocks.find(
      (block): block is Extract<ProgramBlockConfig, { type: T }> =>
        block.type === type,
    );
    if (match) {
      return match;
    }
  }
  throw new Error(`No programme sample for ${type}`);
}

const SAMPLE_C2 = required(
  PRODUCTION_AWARDS.figs,
  "C2 sample missing Production Awards figures",
);
const SAMPLE_C4 = firstProgramBlock("C4");
const SAMPLE_C5 = firstProgramBlock("C5");
const SAMPLE_C6 = firstProgramBlock("C6");
const SAMPLE_C8 = firstProgramBlock("C8");
const SAMPLE_C9 = firstProgramBlock("C9");
const SAMPLE_C10 = firstProgramBlock("C10");
const SAMPLE_S1 = firstProgramBlock("S1");
const SAMPLE_S2 = firstProgramBlock("S2");
const SAMPLE_S3 = firstProgramBlock("S3");
const SAMPLE_S4 = required(WIJHAT.hero, "S4 sample missing Wijhat hero");
const SAMPLE_S5 = firstProgramBlock("S5");
const SAMPLE_S6 = firstProgramBlock("S6");
const SAMPLE_C11 = required(
  STAND_FOR_ART.faqs,
  "C11 sample missing Stand for Art FAQs",
);
const SAMPLE_N14 = required(
  PRODUCTION_AWARDS_RESULTS.rosters?.[0],
  "N14 sample missing announcement roster",
);
const SAMPLE_N15 = required(
  PRODUCTION_AWARDS_RESULTS.rosters?.find((group) => group.quotes),
  "N15 sample missing announcement quotes",
);
const SAMPLE_AB7 = required(PEOPLE_GROUPS[0], "AB7 sample missing people group");
const SAMPLE_AB8 = required(LOGO_BANDS[0], "AB8 sample missing logo band");

function CatalogUsage({ entry }: { entry: BlockCatalogEntry }) {
  if (entry.usedOn.length === 0) {
    return <p className="text-sm">not used on any page yet</p>;
  }

  return (
    <p className="text-sm">
      {entry.usedOn.map((usage, index) => (
        <span key={usage.path}>
          {index > 0 ? " · " : null}
          <Link href={usage.path}>{usage.title}</Link>
        </span>
      ))}
    </p>
  );
}

function renderCatalogSample(code: string): ReactNode {
  switch (code) {
    case "HM1":
      return (
        <HM1CinematicHero
          staticfb={false}
          positioning={HOME_POSITIONING}
          frames={HOME_HERO_FRAMES}
        />
      );
    case "HM2":
      return <HM2ImpactStrip figures={HOME_FIGURES} />;
    case "HM4":
      return <HM4OpenOpportunities opportunities={HOME_OPPORTUNITIES} />;
    case "HM5":
      return <HM5FeaturedSpotlight spotlight={HOME_SPOTLIGHT} />;
    case "HM6":
      return (
        <HM6LatestNews posts={HOME_NEWS_POSTS} allHref={HOME_ALL_NEWS_HREF} />
      );
    case "C1":
      return (
        <C1Overview
          text={PRODUCTION_AWARDS.overview?.text}
          items={PRODUCTION_AWARDS.overview?.items}
        />
      );
    case "C2":
      return <C2ImpactFigures labels={SAMPLE_C2} />;
    case "C4":
      return (
        <C4ApplySteps
          steps={SAMPLE_C4.steps}
          documents={SAMPLE_C4.documents}
          note={SAMPLE_C4.note}
          highlight={SAMPLE_C4.highlight}
        />
      );
    case "C5":
      return (
        <C5FormsOfSupport
          records={SAMPLE_C5.records}
          heading={SAMPLE_C5.heading}
        />
      );
    case "C6":
      return (
        <C6HighlightedNote label={SAMPLE_C6.label} text={SAMPLE_C6.text} />
      );
    case "C7":
      return <C7ApplyButton dest={PRODUCTION_AWARDS.dest} closed={false} />;
    case "C8":
      return <C8Conditions text={SAMPLE_C8.text} items={SAMPLE_C8.items} />;
    case "C9":
      return (
        <C9Selection
          label={SAMPLE_C9.label}
          text={SAMPLE_C9.text}
          process={SAMPLE_C9.process}
          criteria={SAMPLE_C9.criteria}
        />
      );
    case "C10":
      return (
        <C10ContractTerms lines={SAMPLE_C10.lines} items={SAMPLE_C10.items} />
      );
    case "C11":
      return <C11Faqs items={SAMPLE_C11} />;
    case "C12":
      return <C12Contact contact={PRODUCTION_AWARDS.contact} />;
    case "S1":
      return <S1Timeline stages={SAMPLE_S1.stages} lead={SAMPLE_S1.lead} />;
    case "S2":
      return <S2Downloads files={SAMPLE_S2.files} />;
    case "S3":
      return (
        <S3PastBeneficiaries
          groups={SAMPLE_S3.groups}
          label={SAMPLE_S3.label}
          offered={SAMPLE_S3.offered}
        />
      );
    case "S4":
      return <S4HeroSummary cells={SAMPLE_S4} />;
    case "S5":
      return (
        <S5ApplicationPaths
          paths={SAMPLE_S5.paths}
          core={SAMPLE_S5.core}
          highlight={SAMPLE_S5.highlight}
        />
      );
    case "S6":
      return (
        <S6WhichRound
          lead={SAMPLE_S6.lead}
          rows={SAMPLE_S6.rows}
          notes={SAMPLE_S6.notes}
        />
      );
    case "PA1":
      return <PA1IntroLine slots={true} />;
    case "PA2":
      return <PA2FilterBar facets={LIBRARY_FACETS} />;
    case "PA3":
      return (
        <PA3CountRow
          empty={false}
          filtered={false}
          total={LIBRARY_RECORDS.length}
        />
      );
    case "PA4":
      return (
        <PA4ResultsGrid
          empty={false}
          detailHref={PUBLICATION_DETAIL_HREF}
          records={LIBRARY_RECORDS}
        />
      );
    case "PB1":
      return <PB1SeriesIntro text={MUDAWANAT.text} links={MUDAWANAT.links} />;
    case "PB2":
      return (
        <PB2MediaListing
          kind={MUDAWANAT.kind}
          layout="row"
          total={MUDAWANAT.total}
        />
      );
    case "PC1":
      return <PC1PublicationRecord record={PUBLICATION_RECORD} />;
    case "PC2":
      return (
        <PC2RelatedPublications
          detailHref={PUBLICATION_DETAIL_HREF}
          records={PUBLICATION_RECORD.related}
        />
      );
    case "MN1":
      return (
        <MN1IntroPurpose
          text={NETWORK_INTRO}
          contact={NETWORK_CORRECTION_CONTACT}
        />
      );
    case "MN2":
      return <MN2ImpactStrip />;
    case "MN3":
      return <MN3FilterBank />;
    case "MN4":
      return (
        <MN4CountRow
          empty={false}
          filtered={false}
          orgs={false}
          onTabSelect={() => {}}
        />
      );
    case "MN5":
      return (
        <MN5DirectoryListing empty={false} filtered={false} orgs={false} />
      );
    case "MN6":
      return <MN6Record record={NETWORK_RECORD} />;
    case "N1":
      return <N1CategoryFilter />;
    case "N2":
      return (
        <N2CountRow empty={false} filtered={false} shown={NEWS_POSTS.length} />
      );
    case "N3":
      return <N3PostFeed empty={false} posts={NEWS_POSTS} />;
    case "N4":
      return <N4Pagination />;
    case "N6":
      return <N6FeaturedImage caption={PRODUCTION_AWARDS_RESULTS.imageCaption} />;
    case "N7":
      return (
        <N7PostMeta
          byline={false}
          date={PRODUCTION_AWARDS_RESULTS.date}
          category={PRODUCTION_AWARDS_RESULTS.category}
          author={PRODUCTION_AWARDS_RESULTS.byline}
        />
      );
    case "N9":
      return <N9Body text={PRODUCTION_AWARDS_RESULTS.body} />;
    case "N10":
      return <N10Schedule />;
    case "N11":
      return <N11Cta />;
    case "N13":
      return (
        <N13RelatedPosts
          posts={relatedNewsPosts(PRODUCTION_AWARDS_RESULTS.title)}
        />
      );
    case "N14":
      return (
        <N14Roster
          label={`${SAMPLE_N14.discipline} — grantees`}
          heading="Grantees"
          records={SAMPLE_N14.grantees}
        />
      );
    case "N15":
      return (
        <N15Quotes
          label={`${SAMPLE_N15.discipline} — jury quotes`}
          quotes={SAMPLE_N15.quotes}
        />
      );
    case "AB1":
      return <AB1Intro text={WHO_WE_ARE_INTRO} />;
    case "AB2":
      return <AB2Vision text={VISION} />;
    case "AB3":
      return <AB3Mission points={MISSION_POINTS} />;
    case "AB4":
      return <AB4Values values={VALUES} />;
    case "AB5":
      return (
        <AB5HistoryTimeline lead={HISTORY_LEAD} entries={HISTORY_ENTRIES} />
      );
    case "AB6":
      return <AB6SectionIntro optional />;
    case "AB7":
      return (
        <AB7PeopleGroup
          label={SAMPLE_AB7.label}
          people={SAMPLE_AB7.people}
          total={SAMPLE_AB7.total}
          cardNote={SAMPLE_AB7.cardNote}
        />
      );
    case "AB8":
      return (
        <AB8LogoBand
          label={SAMPLE_AB8.label}
          count={SAMPLE_AB8.count}
          note={SAMPLE_AB8.note}
        />
      );
    case "AB9":
      return <AB9InitiativeDirectory />;
    case "AB10":
      return <AB10InitiativeRecord />;
    case "AB11":
      return <AB11OtherInitiatives />;
    case "AB12":
      return <AB12OpenPositions onejob={false} nopositions={false} />;
    case "AB13":
      return <AB13Position />;
    default:
      throw new Error(`No catalog sample for ${code}`);
  }
}

export function BlockCatalogPage() {
  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
        <nav
          className="mt-4 flex flex-wrap gap-2"
          aria-label="Jump to block"
        >
          {BLOCKS.map((entry) => (
            <a
              key={entry.code}
              href={`#${entry.code}`}
              className="border border-black px-1 py-0.5 font-mono text-xs no-underline"
            >
              {entry.code}
            </a>
          ))}
        </nav>
      </div>
      {BLOCKS.map((entry, index) => {
        const kitStart = BLOCKS[index - 1]?.kit !== entry.kit;

        return (
          <Fragment key={entry.code}>
            {kitStart ? (
              <h2
                className={
                  index === 0
                    ? "mt-8 mb-2 text-2xl font-bold"
                    : "mt-12 mb-2 text-2xl font-bold"
                }
              >
                {KIT_HEADING[entry.kit]}
              </h2>
            ) : null}
            <article id={entry.code} className="scroll-mt-8">
              <div>
                <p className="font-mono text-xs">{entry.code}</p>
                <p>{entry.label}</p>
                <CatalogUsage entry={entry} />
              </div>
              {renderCatalogSample(entry.code)}
            </article>
          </Fragment>
        );
      })}
    </PageWidth>
  );
}
