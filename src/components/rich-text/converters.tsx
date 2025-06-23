import { JSXConverter, JSXConverters } from "@payloadcms/richtext-lexical/react";
import {
  SerializedTextNode,
  SerializedBlockNode,
  SerializedUploadNode,
  DefaultNodeTypes,
  SerializedParagraphNode,
} from "@payloadcms/richtext-lexical";
import { RichText } from ".";
import Image from "next/image";
import { Media } from "@/payload-types";

export const HighlightConverter: JSXConverters<SerializedTextNode> = {
  text: (data) => {
    if (data.node.format === 8) {
      // Assuming format 8 is for highlight
      return <span className="text-[var(--case-study-color)] no-underline">{data.node.text}</span>;
    }
    // return data.node.text;
    return;
  },
};

export const SideBySideBlockConverter: JSXConverter<SerializedBlockNode> = ({ node }) => {
  const leftColumn = node.fields?.leftColumn;
  const rightColumn = node.fields?.rightColumn;
  return (
    <div className="flex justify-between gap-8 sm:gap-[10vw]">
      {leftColumn && (
        <div className="flex-1 space-y-4">
          <RichText data={leftColumn} />
        </div>
      )}
      {rightColumn && (
        <div className="flex-1 space-y-4">
          <RichText data={rightColumn} />
        </div>
      )}
    </div>
  );
};

export const PullOutBlockConverter: JSXConverter<SerializedBlockNode> = ({ node }) => {
  return (
    <div className="pull-out border-l-[6px] border-l-[var(--case-study-color)] pl-8">
      <h5>{node.fields?.title}</h5>
      <RichText data={node?.fields?.content} />
    </div>
  );
};

const isMedia = (media: unknown): media is Media => {
  return (
    !!media &&
    typeof media === "object" &&
    "url" in media &&
    typeof media.url === "string" &&
    "alt" in media &&
    typeof media.alt === "string"
  );
};

export const UploadConverter: JSXConverter<SerializedUploadNode> = ({ node }) => {
  const media = isMedia(node.value) ? node.value : null;
  const isImage = media?.mimeType?.startsWith("image/");

  if (!isImage) {
    return null;
  }

  return (
    <Image
      src={media?.url || ""}
      alt={media?.alt || "Uploaded Image"}
      width={500}
      height={500}
      className="h-full w-full object-cover object-center"
    />
  );
};

const HighlightedText = ({ text }: { text: string }) => (
  <span className="text-[var(--case-study-color)] no-underline">{text}</span>
);

export const TextConverter =
  (defaultConverters: JSXConverters<DefaultNodeTypes>): JSXConverter<SerializedTextNode> =>
  // eslint-disable-next-line react/display-name
  (data) => {
    if (data.node.format === 8) {
      // Assuming format 8 is for highlight
      return <HighlightedText text={data.node.text} />;
    }
    return typeof defaultConverters?.text === "function"
      ? defaultConverters.text(data)
      : data.node.text;
  };

export const ParagraphConverter =
  (defaultConverters: JSXConverters<DefaultNodeTypes>): JSXConverter<SerializedParagraphNode> =>
  // eslint-disable-next-line react/display-name
  (data) => {
    if (!data.node.children?.length) return null;
    return typeof defaultConverters?.paragraph === "function" && defaultConverters.paragraph(data);
  };
