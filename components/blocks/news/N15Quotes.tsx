import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

export type PostQuote = {
  text: string | string[];
  attribution: string;
};

type N15QuotesProps = {
  label?: string;
  quotes?: PostQuote[];
};

const PLACEHOLDER_QUOTES = 1;

export function N15Quotes({ label = "Quotes", quotes }: N15QuotesProps) {
  return (
    <Block code="N15" label={label} optional>
      <div className="flex flex-col gap-3">
        {quotes
          ? quotes.map((quote) => (
              <blockquote
                key={quote.attribution}
                className="border-[3px] border-black px-3 py-2.75 text-sm"
              >
                <Prose text={quote.text} />
                <footer className="mt-1.5 text-xs">
                  &mdash; {quote.attribution}
                </footer>
              </blockquote>
            ))
          : Array.from({ length: PLACEHOLDER_QUOTES }, (_, index) => (
              <blockquote
                key={index}
                className="border-[3px] border-black px-3 py-2.75 text-sm"
              >
                <Prose lines={3} />
                <footer className="mt-1.5 text-xs">&mdash; Attribution</footer>
              </blockquote>
            ))}
      </div>
      <Hint>
        One or more quotes, each with its own attribution line, at 3px
        (decision 57). No heading — they sit in the jury section they come
        from, not as a titled block of their own.
      </Hint>
    </Block>
  );
}
