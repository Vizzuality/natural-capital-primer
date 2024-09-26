export type IndustryUseCasesTab = "ecosystem" | "dependencies" | "impacts";

export type IndustryUseCasesAccordionItem = {
  id: string;
  title: string;
  tabContent: IndustryUseCasesTabContent;
};

export interface IndustryUseCasesTabContent {
  ecosystem: {
    content1: React.ReactElement;
    content2: React.ReactElement;
    content3: React.ReactElement;
    image1: {
      src: string;
      width: number;
      height: number;
    };
    image2: {
      src: string;
      width: number;
      height: number;
    };
    image3: {
      src: string;
      width: number;
      height: number;
    };
    imageText: React.ReactNode;
    industriesRelyOnText: string;
    directIndustries: {
      title: string;
      tooltip: string;
    }[];
    indirectIndustries: {
      title: string;
      tooltip: string;
    }[];
    insights: string[];
  };
  dependencies: {
    content1: React.ReactElement;
    chartTitle: string;
    chartSubTitle: string;
    chartData: [number, number][];
  };
  impacts: {
    content1: React.ReactElement;
    image1: {
      src: string;
      width: number;
      height: number;
    };
    list: {
      title: string;
      text: string;
    }[];
  };
}
