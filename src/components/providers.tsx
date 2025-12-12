import { Provider as JotaiProvider } from "jotai";
import { PropsWithChildren } from "react";

import QueryProvider from "@/app/(frontend)/query-provider";
import { store } from "@/lib/store";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <JotaiProvider store={store}>{children}</JotaiProvider>
    </QueryProvider>
  );
};
