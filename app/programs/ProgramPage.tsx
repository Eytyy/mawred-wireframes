"use client";

import { C1Overview } from "@/components/blocks/programs/C1Overview";
import { C2ImpactFigures } from "@/components/blocks/programs/C2ImpactFigures";
import { C4ApplySteps } from "@/components/blocks/programs/C4ApplySteps";
import { C5FormsOfSupport } from "@/components/blocks/programs/C5FormsOfSupport";
import { C6HighlightedNote } from "@/components/blocks/programs/C6HighlightedNote";
import { C7ApplyButton } from "@/components/blocks/programs/C7ApplyButton";
import { C8Conditions } from "@/components/blocks/programs/C8Conditions";
import { C9Selection } from "@/components/blocks/programs/C9Selection";
import { C10ContractTerms } from "@/components/blocks/programs/C10ContractTerms";
import { C11Faqs } from "@/components/blocks/programs/C11Faqs";
import { C12Contact } from "@/components/blocks/programs/C12Contact";
import { S1Timeline } from "@/components/blocks/programs/S1Timeline";
import { S2Downloads } from "@/components/blocks/programs/S2Downloads";
import { S3PastBeneficiaries } from "@/components/blocks/programs/S3PastBeneficiaries";
import { S4HeroSummary } from "@/components/blocks/programs/S4HeroSummary";
import { S5ApplicationPaths } from "@/components/blocks/programs/S5ApplicationPaths";
import { S6WhichRound } from "@/components/blocks/programs/S6WhichRound";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { Hint } from "@/components/wireframe/Hint";
import type { ProgramBlockConfig, ProgramConfig } from "@/lib/pages/programs";
import { useWireframeState } from "@/lib/wireframe-state";
import type { ReactNode } from "react";

type S3Block = Extract<ProgramBlockConfig, { type: "S3" }>;
type ProgramSectionId = "overview" | "application" | "past";

function sectionFor(block: ProgramBlockConfig): ProgramSectionId {
  switch (block.type) {
    case "S1":
    case "C5":
      return "overview";
    case "C6":
      return block.section ?? "application";
    case "S3":
      return "past";
    case "C4":
    case "C8":
    case "C9":
    case "C10":
    case "S2":
    case "S5":
    case "S6":
      return "application";
  }
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="block-heading mb-2.5 text-2xl font-bold">{children}</h2>
  );
}

function renderBlock(block: ProgramBlockConfig): ReactNode {
  switch (block.type) {
    case "C4":
      return (
        <C4ApplySteps
          key="C4"
          steps={block.steps}
          documents={block.documents}
          note={block.note}
          highlight={block.highlight}
        />
      );
    case "C5":
      return (
        <C5FormsOfSupport
          key="C5"
          records={block.records}
          heading={block.heading}
        />
      );
    case "C6":
      return (
        <C6HighlightedNote
          key={block.label}
          label={block.label}
          text={block.text}
        />
      );
    case "C8":
      return <C8Conditions key="C8" text={block.text} items={block.items} />;
    case "C9":
      return (
        <C9Selection
          key={block.label}
          label={block.label}
          text={block.text}
          process={block.process}
          criteria={block.criteria}
        />
      );
    case "C10":
      return (
        <C10ContractTerms key="C10" lines={block.lines} items={block.items} />
      );
    case "S1":
      return <S1Timeline key="S1" stages={block.stages} lead={block.lead} />;
    case "S2":
      return <S2Downloads key="S2" files={block.files} />;
    case "S3":
      return (
        <S3PastBeneficiaries
          key="S3"
          groups={block.groups}
          label={block.label}
          offered={block.offered}
        />
      );
    case "S5":
      return (
        <S5ApplicationPaths
          key="S5"
          paths={block.paths}
          core={block.core}
        />
      );
    case "S6":
      return (
        <S6WhichRound
          key="S6"
          lead={block.lead}
          rows={block.rows}
          notes={block.notes}
        />
      );
    default:
      return null;
  }
}

export function ProgramPage({ config }: { config: ProgramConfig }) {
  const { state } = useWireframeState();
  const overview: ProgramBlockConfig[] = [];
  const application: ProgramBlockConfig[] = [];
  let past: S3Block | undefined;

  for (const block of config.blocks) {
    switch (sectionFor(block)) {
      case "overview":
        overview.push(block);
        break;
      case "application":
        application.push(block);
        break;
      case "past":
        if (block.type === "S3") past = block;
        break;
    }
  }

  const showPast = past !== undefined && !(past.offeredOnly && !state.offered);
  const timeline = overview.find((block) => block.type === "S1");
  const overviewBody = overview.filter((block) => block.type !== "S1");

  return (
    <>
      <PageHeaderBand />

      <section>
        <h2 className="sr-only">Overview</h2>
        <C1Overview
          text={config.overview?.text}
          items={config.overview?.items}
        />
        {config.figs ? (
          <C2ImpactFigures labels={config.figs} />
        ) : (
          <Hint>
            No impact figures on this programme. By design, not a gap.
          </Hint>
        )}
        {config.hero ? <S4HeroSummary cells={config.hero} /> : null}
        {overviewBody.map((block, index) => (
          <div key={`${block.type}-${index}`}>{renderBlock(block)}</div>
        ))}
        {timeline ? <div key="S1">{renderBlock(timeline)}</div> : null}
      </section>

      <div>
        <div className="sticky top-4 z-10 float-right ml-4 bg-white">
          <C7ApplyButton
            dest={config.dest}
            closed={config.rolling ? false : state.closed}
          />
        </div>
        <section>
          <SectionHeading>Application</SectionHeading>
          {application.map((block, index) => (
            <div key={`${block.type}-${index}`}>{renderBlock(block)}</div>
          ))}
        </section>

        {showPast && past ? (
          <section>
            <SectionHeading>
              {past.label ?? "Past beneficiaries"}
            </SectionHeading>
            {renderBlock(past)}
          </section>
        ) : null}

        <section>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <C11Faqs items={config.faqs} />
        </section>

        <section>
          <SectionHeading>Contact</SectionHeading>
          <C12Contact contact={config.contact} />
        </section>
      </div>
    </>
  );
}
