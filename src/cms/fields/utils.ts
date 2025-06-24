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
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
} from "@payloadcms/richtext-lexical";

export const commonTextRichTextFeatures = [
  BoldFeature(),
  LinkFeature(),
  ParagraphFeature(),
  ItalicFeature(),
  FixedToolbarFeature(),
  UnderlineFeature(),
  StrikethroughFeature(),
  SubscriptFeature(),
  SuperscriptFeature(),
];

export const commonRichTextFeatures = [
  ...commonTextRichTextFeatures,
  HeadingFeature({
    enabledHeadingSizes: ["h2", "h3", "h4"],
  }),
  OrderedListFeature(),
  UnorderedListFeature(),
  UploadFeature(),
];
