"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { getRouteByPath } from "@/lib/pages/routes";
import { STATES } from "@/lib/pages/states";
import { useWireframeState, type WireframeState } from "@/lib/wireframe-state";

const BOOLEAN_KEYS = new Set<keyof WireframeState>([
  "codes",
  "closed",
  "offered",
  "filtered",
  "empty",
  "slots",
  "orgs",
  "byline",
  "edge",
  "nocalls",
  "twentieth",
  "staticfb",
  "onejob",
  "nopositions",
]);

function CogIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6.27 3.63L7.12 3.38L6.65 0.93L9.35 0.93L8.88 3.38L9.73 3.63L10.92 4.32L11.56 4.93L13.45 3.30L14.80 5.63L12.44 6.45L12.65 7.31L12.65 8.69L12.44 9.55L14.80 10.37L13.45 12.70L11.56 11.07L10.92 11.68L9.73 12.37L8.88 12.62L9.35 15.07L6.65 15.07L7.12 12.62L6.27 12.37L5.08 11.68L4.44 11.07L2.55 12.70L1.20 10.37L3.56 9.55L3.35 8.69L3.35 7.31L3.56 6.45L1.20 5.63L2.55 3.30L4.44 4.93L5.08 4.32Z M 8 5.8 a 2.2 2.2 0 1 0 0 4.4 a 2.2 2.2 0 1 0 0 -4.4 Z"
      />
    </svg>
  );
}

export function StatePanel() {
  const pathname = usePathname();
  const route = getRouteByPath(pathname);
  const { state, setToggle } = useWireframeState();
  const config = route?.statesKey ? STATES[route.statesKey] : null;
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="fixed top-3 right-3 z-50 flex flex-col items-end gap-2">
      <button
        type="button"
        className={`cursor-pointer border border-black p-1.5 ${
          open ? "bg-black text-white" : "bg-white text-black"
        }`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Hide wireframe states" : "Show wireframe states"}
        onClick={() => setOpen((current) => !current)}
      >
        <CogIcon />
      </button>
      {open ? (
        <div
          id={panelId}
          className="max-w-[230px] border-2 border-black bg-white p-3 text-xs"
        >
          <h5 className="mb-2 text-xs uppercase tracking-widest">
            Wireframe states
          </h5>
          <label className="mb-1 block cursor-pointer">
            <input
              type="checkbox"
              className="mr-1.5"
              checked={state.codes}
              onChange={(event) => setToggle("codes", event.target.checked)}
            />
            Show review chrome
          </label>
          {config?.list.map((toggle) => {
            const key = toggle.key as keyof WireframeState;

            if (!BOOLEAN_KEYS.has(key)) {
              return null;
            }

            return (
              <label key={toggle.key} className="mb-1 block cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-1.5"
                  checked={Boolean(state[key])}
                  onChange={(event) => setToggle(key, event.target.checked)}
                />
                {toggle.label}
              </label>
            );
          })}
          {config?.note ? (
            <div
              className="mt-2 border-t border-neutral-200 pt-1.5 text-xs text-neutral-500"
              dangerouslySetInnerHTML={{ __html: config.note }}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
