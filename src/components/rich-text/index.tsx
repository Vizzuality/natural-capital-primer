import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from "@payloadcms/richtext-lexical/react";
import { HTMLAttributes } from "react";

import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical";

import {
  ParagraphConverter,
  PullOutBlockConverter,
  SideBySideBlockConverter,
  TextConverter,
  UploadConverter,
} from "./converters";

type RichTextProps = {
  data: SerializedEditorState;
  substitutions?: [string, string][];
} & HTMLAttributes<HTMLDivElement>;

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  text: TextConverter(defaultConverters),
  paragraph: ParagraphConverter(defaultConverters),
  upload: UploadConverter,
  blocks: {
    ...defaultConverters.blocks,
    "side-by-side": SideBySideBlockConverter,
    "pull-out": PullOutBlockConverter,
  },
});

export const RichText = ({ data, ...rest }: RichTextProps) => {
  return <RichTextWithoutBlocks converters={jsxConverters} data={data} {...rest} />;
};
