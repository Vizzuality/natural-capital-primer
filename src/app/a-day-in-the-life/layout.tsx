import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A day in the life",
};

export default function ADayInTheLifeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
