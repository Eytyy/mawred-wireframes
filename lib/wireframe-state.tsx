"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type WireframeState = {
  codes: boolean;
  closed: boolean;
  offered: boolean;
  filtered: boolean;
  empty: boolean;
  slots: boolean;
  orgs: boolean;
  cat: number;
  byline: boolean;
  edge: boolean;
  nocalls: boolean;
  twentieth: boolean;
  staticfb: boolean;
  onejob: boolean;
  nopositions: boolean;
};

const DEFAULT_STATE: WireframeState = {
  codes: true,
  closed: false,
  offered: false,
  filtered: false,
  empty: false,
  slots: false,
  orgs: false,
  cat: 0,
  byline: false,
  edge: false,
  nocalls: false,
  twentieth: false,
  staticfb: false,
  onejob: false,
  nopositions: false,
};

type WireframeStateContextValue = {
  state: WireframeState;
  setToggle: (key: keyof WireframeState, value: boolean) => void;
};

const WireframeStateContext = createContext<WireframeStateContextValue | null>(
  null,
);

export function WireframeStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WireframeState>(DEFAULT_STATE);

  useEffect(() => {
    document.body.classList.toggle("codes-off", !state.codes);
  }, [state.codes]);

  const setToggle = useCallback((key: keyof WireframeState, value: boolean) => {
    setState((current) => {
      const next = { ...current, [key]: value };

      if (key === "empty" && value) {
        next.filtered = true;
      }

      if (key === "filtered" && !value) {
        next.empty = false;
      }

      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      state,
      setToggle,
    }),
    [state, setToggle],
  );

  return (
    <WireframeStateContext.Provider value={value}>
      {children}
    </WireframeStateContext.Provider>
  );
}

export function useWireframeState() {
  const context = useContext(WireframeStateContext);

  if (!context) {
    throw new Error("useWireframeState must be used within WireframeStateProvider");
  }

  return context;
}
