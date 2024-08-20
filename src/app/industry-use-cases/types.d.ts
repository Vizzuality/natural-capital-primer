export type TriggerImagesAndText = {
  text1: string;
  imageSrc1: string;
  text2: string;
  imageSrc2: string;
};

export type AccordionContentType = {
  id: string;
  content?: ReactNode;
} & TriggerImagesAndText;
