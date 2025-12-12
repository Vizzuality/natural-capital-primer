import { lexicalEditor, BlocksFeature, UploadFeature } from "@payloadcms/richtext-lexical";
import { Block, RichTextField } from "payload";

import { PullOutBlock } from "./pull-out";
import { commonRichTextFeatures } from "../fields/utils";

const sideBySideField: RichTextField = {
  name: "",
  type: "richText",
  editor: lexicalEditor({
    features: () => [
      ...commonRichTextFeatures,
      UploadFeature(),
      BlocksFeature({
        blocks: [PullOutBlock],
      }),
    ],
  }),
};

export const SideBySideBlock: Block = {
  slug: "side-by-side",
  interfaceName: "SideBySide",
  fields: [
    {
      ...sideBySideField,
      name: "leftColumn",
    },
    {
      ...sideBySideField,
      name: "rightColumn",
    },
  ],
};
