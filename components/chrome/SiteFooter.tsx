"use client";

import { useState } from "react";
import { Btn } from "@/components/wireframe/Btn";
import { Field } from "@/components/wireframe/Field";

function Newsletter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="cursor-pointer border-0 bg-transparent p-0 text-left text-sm"
        onClick={() => setOpen(true)}
      >
        Newsletter
      </button>
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="border border-black bg-white p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <strong>Newsletter</strong>
              <button
                type="button"
                className="cursor-pointer border-0 bg-transparent p-0 text-sm"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <Field>email address</Field>
              <Btn>Subscribe</Btn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-4">
      <Newsletter />
      <div className="border border-black p-3">Social</div>
      <div className="text-xs text-neutral-500">&copy; copyright line</div>
    </footer>
  );
}
