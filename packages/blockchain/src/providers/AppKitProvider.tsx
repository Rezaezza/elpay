"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

type AppKitContextValue = {
  open: () => void;
};

const AppKitContext =
  createContext<AppKitContextValue>({
    open: () => {},
  });

export function AppKitProvider({
  children,
}: {
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({
      open() {
        console.log("Open wallet modal");
      },
    }),
    [],
  );

  return (
    <AppKitContext.Provider value={value}>
      {children}
    </AppKitContext.Provider>
  );
}

export function useAppKit() {
  return useContext(AppKitContext);
}