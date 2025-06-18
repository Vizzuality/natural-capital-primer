import {
  BoldFeature,
  FixedToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnorderedListFeature,
} from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const PullOutBlock: Block = {
  slug: "pull-off",
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Pull Off Title",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: () => [
          BoldFeature(),
          FixedToolbarFeature(),
          ItalicFeature(),
          LinkFeature(),
          OrderedListFeature(),
          ParagraphFeature(),
          UnorderedListFeature(),
        ],
      }),
    },
  ],
};
