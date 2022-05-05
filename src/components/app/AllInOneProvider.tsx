import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { IconContext } from "phosphor-react";
import { PropsWithChildren } from "react";

export const AllInOnProvider = ({ pageProps, children }: PropsWithChildren<{ pageProps: AppProps["pageProps"] }>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <IconContext.Provider
        value={{
          size: 20,
        }}
      >
        {children}
      </IconContext.Provider>
    </SessionProvider>
  );
};
