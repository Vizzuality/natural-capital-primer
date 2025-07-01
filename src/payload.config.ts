import path from "path";
import { fileURLToPath } from "url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { resendAdapter } from "@payloadcms/email-resend";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "./cms/collections/Users";
import { Media } from "./cms/collections/Media";
import { CaseStudies } from "./cms/collections/CaseStudies";
import AppSettings from "./cms/globals/app-settings";

import { env } from "@/env.mjs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: "Natural Capital Primer",
      titleSuffix: " | CMS",
      icons: [
        {
          rel: "icon",
          type: "image/png",
          url: "@/app/favicon.png",
        },
        {
          rel: "apple-icon",
          type: "image/png",
          url: "@/app/apple-icon.png",
        },
      ],
    },
    components: {
      graphics: {
        Icon: "@/cms/admin-components/icon",
        Logo: "@/cms/admin-components/logo",
      },
    },
  },
  collections: [Users, Media, CaseStudies],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URI,
      ...(env.CA_CERTIFICATE && {
        ssl: {
          rejectUnauthorized: false,
          ca: env.CA_CERTIFICATE,
        },
      }),
    },
  }),
  sharp,
  email: resendAdapter({
    defaultFromAddress: process.env.EMAIL_DEFAULT_FROM_ADRESS || "",
    defaultFromName: "Natural Capital Primer",
    apiKey: process.env.EMAIL_RESEND_API_KEY || "",
  }),
  globals: [AppSettings],
  plugins: [
    // https://github.com/payloadcms/payload/tree/main/packages/storage-s3
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET_NAME || "",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        endpoint: process.env.S3_BUCKET_ENDPOINT || "",
        region: process.env.S3_REGION || "",
        forcePathStyle: true,
      },
    }),
  ],
});
