import { PropsWithChildren } from "react";
import { PageFlow } from "./PageFlow";

export const AppShell = ({ children }: PropsWithChildren<{}>) => (
  <>
    <PageFlow />
    <div>
      <div>{children}</div>
    </div>
  </>
);
