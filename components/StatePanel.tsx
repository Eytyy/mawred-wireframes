"use client";

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

export function StatePanel() {
  const pathname = usePathname();
  const route = getRouteByPath(pathname);
  const { state, setToggle } = useWireframeState();
  const config = route?.statesKey ? STATES[route.statesKey] : null;

  return (
    <div className="fixed bottom-3 right-3 z-50 max-w-[230px] border-2 border-black bg-white p-3 text-xs">
      <h5 className="mb-2 text-xs uppercase tracking-widest">Wireframe states</h5>
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
  );
}
