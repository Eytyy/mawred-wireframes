import { Btn } from "@/components/wireframe/Btn";
import { Field } from "@/components/wireframe/Field";
import { Fill } from "@/components/wireframe/Fill";

export function Newsletter() {
  return (
    <div className="border-b border-black py-[18px]">
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-center gap-2.5 px-4">
        <strong>Newsletter</strong>
        <Field>email address</Field>
        <Btn>Subscribe</Btn>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t-2 border-black">
      <Newsletter />
      <div className="mx-auto max-w-[1040px] px-4">
        <div className="flex flex-wrap gap-3 py-[18px]">
          <div className="min-h-20 min-w-[180px] flex-1 border border-black p-3">
            Footer links
          </div>
          <div className="min-h-20 min-w-[180px] flex-1 border border-black p-3">
            Footer links
          </div>
          <div className="min-h-20 min-w-[180px] flex-1 border border-black p-3">
            Contact
            <Fill width={70} />
          </div>
          <div className="min-h-20 min-w-[180px] flex-1 border border-black p-3">
            Social row
          </div>
        </div>
        <div className="border-t border-neutral-200 py-3 text-xs text-neutral-500">
          &copy; copyright line
        </div>
      </div>
    </footer>
  );
}
