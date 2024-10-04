"use client";

import { createStore } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const store = createStore();

/**
 * Store whether the user has given consent to the use of analytics. If `undefined`, the user has
 * not given consent nor rejected the use yet. If `true`, the user consents to the use of analytics.
 */
export const analyticsConsentAtom = atomWithStorage<boolean | undefined>(
  "analytics-consent",
  undefined,
);
