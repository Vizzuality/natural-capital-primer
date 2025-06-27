import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    S3_BUCKET_NAME: z.string(), // The name of the bucket used for storage.
    S3_BUCKET_ENDPOINT: z.string(), // The endpoint URL for accessing the bucket.
    S3_ACCESS_KEY_ID: z.string(), // The access key ID for authenticating with the service.
    S3_SECRET_ACCESS_KEY: z.string(), // The secret access key for authenticating with the service.
    S3_REGION: z.string(), // The AWS region where the bucket is located.
    EMAIL_RESEND_API_KEY: z.string(), // The API key for the Resend email service.
    EMAIL_DEFAULT_FROM_ADRESS: z.string(), // The default email address used as the sender in outgoing emails.
  },
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
    // The Google Tag Manager tracking id
    NEXT_PUBLIC_GTM_TRACKING_ID: z.string().optional(),
    // Enable case studies on the menu navigation and case studies pages
    NEXT_PUBLIC_ENABLE_CASE_STUDIES: z.string().default("false"),
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
    NEXT_PUBLIC_GTM_TRACKING_ID: process.env.NEXT_PUBLIC_GTM_TRACKING_ID,
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    S3_BUCKET_ENDPOINT: process.env.S3_BUCKET_ENDPOINT,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_REGION: process.env.S3_REGION,
    EMAIL_RESEND_API_KEY: process.env.EMAIL_RESEND_API_KEY,
    EMAIL_DEFAULT_FROM_ADRESS: process.env.EMAIL_DEFAULT_FROM_ADRESS,
    NEXT_PUBLIC_ENABLE_CASE_STUDIES: process.env.NEXT_PUBLIC_ENABLE_CASE_STUDIES,
  },
});
