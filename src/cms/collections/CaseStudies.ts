import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

import type { CollectionConfig } from "payload";
import slugify from "slugify";
import { SideBySideBlock } from "../blocks/side-by-side";
import { commonRichTextFeatures, commonTextRichTextFeatures } from "../fields/utils";
import { revalidatePath } from "next/cache";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
  },
  hooks: {
    afterChange: [
      async () => {
        revalidatePath("/", "layout");
        revalidatePath("/case-studies/[slug]/page", "page");
      },
    ],
  },
  fields: [
    {
      name: "id",
      type: "text",
      required: true,
      hooks: {
        beforeChange: [
          // The `id` is a slug created from the `title` field. Once the document is created, `id`
          // cannot be updated, independently of the return value of this hook. This means that if
          // the document is created using a non-default locale, then the `id` will always have a
          // text content in the non-default locale.
          async ({ data }) => {
            return slugify(data!.title as string, { lower: true });
          },
        ],
      },
      access: {
        update: () => false, // Disable API modifications
      },
      admin: {
        hidden: true,
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "introduction",
      type: "richText",
      editor: lexicalEditor({
        features: () => commonTextRichTextFeatures,
      }),
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media", // Assuming media collection exists
      required: true,
    },
    {
      name: "color",
      type: "text",
      label: "Color",
      admin: {
        components: {
          Field: "@/cms/fields/colors",
        },
      },
    },
    {
      name: "content",
      type: "array",
      fields: [
        {
          name: "content",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: () => [
              ...commonRichTextFeatures,
              BlocksFeature({
                blocks: [SideBySideBlock],
              }),
            ],
          }),
        },
      ],
      required: true,
    },
    {
      name: "key_insights",
      type: "array",
      fields: [
        {
          name: "insight",
          type: "text",
          required: true,
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
};
