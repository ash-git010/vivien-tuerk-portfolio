"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * SSR-safe media query. The server snapshot is always `false`, so the
 * mobile-first branch renders first and the client corrects itself during
 * hydration. Reveals only fire on viewport entry, which is after hydration,
 * so there is no visible flash from the correction.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
