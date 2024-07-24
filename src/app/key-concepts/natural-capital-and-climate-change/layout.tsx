import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natural Capital and Climate Change",
};

export default function ClimateChangeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
