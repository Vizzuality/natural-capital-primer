import { PropsWithChildren } from "react";
import { Provider } from "jotai";
import { store } from "@/lib/store";

export const Providers = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
