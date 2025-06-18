import {
  BoldFeature,
  LinkFeature,
  ParagraphFeature,
  ItalicFeature,
  UploadFeature,
  HeadingFeature,
  FixedToolbarFeature,
  UnorderedListFeature,
  OrderedListFeature,
  UnderlineFeature,
} from "@payloadcms/richtext-lexical";

export const commonRichTextFeatures = [
  BoldFeature(),
  FixedToolbarFeature(),
  HeadingFeature({
    enabledHeadingSizes: ["h2", "h3", "h4"],
  }),
  UnderlineFeature(),
  ItalicFeature(),
  LinkFeature(),
  OrderedListFeature(),
  ParagraphFeature(),
  UnorderedListFeature(),
  UploadFeature(),
];
