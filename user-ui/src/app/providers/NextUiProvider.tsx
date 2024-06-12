"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { NextUIProvider } from "@nextui-org/react";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <NextThemesProvider>{children}</NextThemesProvider>
      </NextUIProvider>
    </ApolloProvider>
  );
}
