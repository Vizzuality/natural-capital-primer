import {
  BlocksFeature,
  BoldFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  ParagraphFeature,
  UploadFeature,
} from "@payloadcms/richtext-lexical";

import type { CollectionConfig } from "payload";
import slugify from "slugify";
import { SideBySideBlock } from "../blocks/side-by-side";
import { commonRichTextFeatures } from "../fields/utils";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
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
      type: "textarea",
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
              UploadFeature(),
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
      name: "key insides",
      type: "array",
      fields: [
        {
          name: "inside",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: () => [BoldFeature(), LinkFeature(), ParagraphFeature(), ItalicFeature()],
          }),
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
};
