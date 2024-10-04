import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {},
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    // If `true` or left empty, crawlers (including search engines) are not allowed to index the
    // website
    NEXT_USE_RESTRICTIVE_ROBOTS_TXT: z.preprocess(
      (value) => (!value || value === "true" ? true : false),
      z.boolean(),
    ),
    // Domain of the application (without https://)
    NEXT_PUBLIC_DOMAIN: z.string(),
    // The Google Analytics tracking id
    NEXT_PUBLIC_GA_TRACKING_ID: z.string().optional(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NEXT_USE_RESTRICTIVE_ROBOTS_TXT: process.env.NEXT_USE_RESTRICTIVE_ROBOTS_TXT,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
});
