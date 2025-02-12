"use client";

import type { JSX, Dispatch, SetStateAction } from "react";
import { createContext, useContext, useMemo, useState } from "react";

interface ContextData {
  sensitiveClickies: boolean;
}

interface ContextFull extends ContextData {
  setSensitiveClickies?: Dispatch<SetStateAction<boolean>> | undefined;
}

const ClickiesContext = createContext<ContextFull>({
  sensitiveClickies: false,
});

export function ClickiesContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const [sensitiveClickies, setSensitiveClickies] = useState(false);

  const value: ContextFull = useMemo(
    () => ({
      sensitiveClickies,
      setSensitiveClickies,
    }),
    [sensitiveClickies, setSensitiveClickies],
  );

  return (
    <ClickiesContext.Provider value={value}>
      {children}
    </ClickiesContext.Provider>
  );
}

export function useClickiesContext(): ContextFull {
  const context = useContext(ClickiesContext);
  if (!context.setSensitiveClickies) {
    throw new Error(
      "useClickiesContext must be used within a ClickiesContextProvider",
    );
  }
  return context;
}
