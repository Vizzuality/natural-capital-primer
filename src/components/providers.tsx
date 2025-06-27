import { PropsWithChildren } from "react";
import { Provider as JotaiProvider } from "jotai";
import { store } from "@/lib/store";
import QueryProvider from "@/app/(frontend)/query-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <JotaiProvider store={store}>{children}</JotaiProvider>
    </QueryProvider>
  );
};
