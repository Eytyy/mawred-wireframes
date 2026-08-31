"use client";

import { C1Overview } from "@/components/blocks/programs/C1Overview";
import { C2ImpactFigures } from "@/components/blocks/programs/C2ImpactFigures";
import { C3AtAGlance } from "@/components/blocks/programs/C3AtAGlance";
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
import { Hint } from "@/components/wireframe/Hint";
import type { ProgramBlockConfig, ProgramConfig } from "@/lib/pages/programs";
import { useWireframeState } from "@/lib/wireframe-state";
import type { ReactNode } from "react";

function renderBlock(block: ProgramBlockConfig, offered: boolean): ReactNode {
  switch (block.type) {
    case "C3flat":
      return <C3AtAGlance key="C3" mode="flat" rows={block.rows} />;
    case "C3rounds":
      return <C3AtAGlance key="C3" mode="rounds" groups={block.groups} />;
    case "C4":
      return (
        <C4ApplySteps
          key="C4"
          steps={block.steps}
          documents={block.documents}
          note={block.note}
          withRepeat={block.withRepeat}
        />
      );
    case "C5":
      return <C5FormsOfSupport key="C5" records={block.records} />;
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
      return <S1Timeline key="S1" stages={block.stages} />;
    case "S2":
      return <S2Downloads key="S2" files={block.files} />;
    case "S3":
      if (block.offeredOnly && !offered) {
        return null;
      }
      return (
        <S3PastBeneficiaries
          key="S3"
          groups={block.groups}
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

  return (
    <>
      {config.hero ? <S4HeroSummary cells={config.hero} /> : null}

      <div className="mt-2 flex flex-wrap items-start gap-3.5">
        <div className="flex-[2_1_380px]">
          <C1Overview title={config.overview?.title} text={config.overview?.text} />
        </div>
        <div className="flex-[1_1_240px]">
          {config.figs ? <C2ImpactFigures labels={config.figs} /> : null}
          <C7ApplyButton
            dest={config.dest}
            closed={config.rolling ? false : state.closed}
          />
        </div>
      </div>

      {!config.figs ? (
        <Hint>
          No impact figures on this programme — the rail carries the apply action
          alone. By design, not a gap.
        </Hint>
      ) : null}

      {config.blocks.map((block, index) => (
        <div key={`${block.type}-${index}`}>{renderBlock(block, state.offered)}</div>
      ))}

      <C11Faqs items={config.faqs} />
      <C12Contact contact={config.contact} />
    </>
  );
}
